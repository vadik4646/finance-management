import { Component, OnInit } from '@angular/core'
import { ExpenseService } from 'app/core/services'

// ----- ----- ----- -----

@Component({
  selector: 'fm-login',
  templateUrl: './login.html',
  styleUrls: [
    './login.styl'
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private expense: ExpenseService,
  ) {}

  ngOnInit() {
    this.getExpenses()
  }

  getExpenses() {
    this.expense
      .create('321', 2, [], '11-11-2018 13:02', 'USD')
      .subscribe(response => console.log(response.message))
  }
}
