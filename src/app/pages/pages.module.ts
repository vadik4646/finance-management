import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginComponent, RegisterComponent } from './'
import { MaterialModule } from 'app/material.module'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ServicesModule } from 'app/core/services'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    ServicesModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
  ]
})
export class PagesModule { }
