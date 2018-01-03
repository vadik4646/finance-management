import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppComponent } from 'app/app'
import { MaterialModule } from 'app/material.module'
import { PagesModule } from 'app/pages/pages.module'
import { rootRouting } from 'app/app.router'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    PagesModule,
    rootRouting,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
