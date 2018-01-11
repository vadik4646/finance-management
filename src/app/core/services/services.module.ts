import { NgModule } from '@angular/core'
import { ExpensesService } from './expensesService'
import { HttpClientModule } from '@angular/common/http'

const servicesArray = [
  ExpensesService,
]

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    ...servicesArray,
  ]
})
export class ServicesModule { }
