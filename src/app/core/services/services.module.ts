import { NgModule } from '@angular/core'

import { HttpClientModule } from '@angular/common/http'

import { ExpenseService } from 'app/core/services/expenseService'
import { IncomeService } from 'app/core/services/incomeService'
import { AuthenticationService } from 'app/core/services/authenticationService'
import { ApiClient } from 'app/core/services/api/apiClient'


// ----- ----- ----- -----

const services = [
  ApiClient,
  ExpenseService,
  IncomeService,
  AuthenticationService,
]

// ----- ----- ----- -----

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    ...services,
  ]
})
export class ServicesModule {}
