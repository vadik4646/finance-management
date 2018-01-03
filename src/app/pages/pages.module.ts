import { NgModule } from '@angular/core'
import { LoginComponent, RegisterComponent } from './'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class PagesModule { }
