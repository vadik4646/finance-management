import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { MatSnackBar } from '@angular/material'
import { CustomValidators } from 'app/core/validators'
import { AuthenticationService, ApiResponse } from 'app/core/services'

// ----- ----- ----- -----

@Component({
  selector: 'fm-register',
  templateUrl: './register.html',
  styleUrls: [
    './register.styl'
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  registerInProgress: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private snackbar: MatSnackBar,
    private router: Router,
  ) {
    this.createFormControl()
  }

  ngOnInit() {
    this.registerForm.updateValueAndValidity()
    this.registerForm.statusChanges
      .subscribe((data) => console.log(data, this.registerForm.get('passwordGroup').errors))
  }

  private createFormControl(): void {
    let email = new FormControl('asd@asd', [
        Validators.required,
        Validators.email,
      ]
    )

    let passwordGroup = this.formBuilder.group({
      password: new FormControl('12345678', [
        Validators.required,
        Validators.minLength(8),
      ]),
      repeatPassword: new FormControl('12345678', [
        Validators.required,
        Validators.minLength(8),
      ]),
    }, {
      validator: CustomValidators.childrenEqual
    })

    this.registerForm = this.formBuilder.group({
      email,
      passwordGroup,
    })
  }

  onRegFormSubmit(): void {
    if (this.registerForm.invalid) {
      return
    }

    this.registerInProgress = true

    let payload = {
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('passwordGroup.password').value
    }

    this.auth.register(payload.email, payload.password)
      .subscribe((response: ApiResponse) => {
        this.registerInProgress = false
        this.snackbar.open(response.message, null, { duration: 5000 })

        if (!response.validationErrors) {
          this.router.navigate(['/login'])
        }
      }, (err: ApiResponse) => {
        this.registerInProgress = false

        let [errKey] = Object.keys(err.validationErrors)
        this.registerForm.get('email').setErrors({ server: err.validationErrors[errKey] })

        this.snackbar.open(err.validationErrors[errKey], null, { duration: 5000 })
      })
  }

  get isPasswordFilled(): boolean {
    return this.registerForm.get('passwordGroup.password').hasError('required')
      || this.registerForm.get('passwordGroup.repeatPassword').hasError('required')
  }

  get isPasswordMinLength(): boolean {
    return this.registerForm.get('passwordGroup.password').hasError('minlength')
      || this.registerForm.get('passwordGroup.repeatPassword').hasError('minlength')
  }

}
