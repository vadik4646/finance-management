import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ApiClient } from 'app/core/services/api/apiClient'
import { ExpenseService } from 'app/core/services/expenseService'
import { IncomeService } from 'app/core/services/incomeService'
import { AuthenticationService } from 'app/core/services/authenticationService'

const services = [
  ExpenseService,
  ApiClient,
  IncomeService,
  AuthenticationService,
]

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    ...services,
  ]
})
export class ServicesModule {
}
