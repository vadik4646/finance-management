import { Component } from '@angular/core'
import { ExpensesService } from 'app/core/services'
import { OnInit } from '@angular/core'

@Component({
  selector: 'fm-login',
  templateUrl: './login.html',
  styleUrls: [
    './login.styl'
  ]
})
export class LoginComponent implements OnInit {

  constructor(private expenses: ExpensesService) { }

  ngOnInit() {
  }

  getExpenses() {
    this.expenses.get()
  }

}
