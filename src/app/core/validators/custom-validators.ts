import { AbstractControl, ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms'

// ----- ----- ----- -----

export class CustomValidators {

  static childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
    const [firstControlName, ...otherControlNames] = Object.keys(formGroup.controls || {})
    const isValid = otherControlNames.every(controlName => formGroup.get(controlName).value === formGroup.get(firstControlName).value)

    return isValid ? null : { childrenNotEqual: true }
  }

}
