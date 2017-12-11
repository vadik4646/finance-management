import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'


import { EntryComponent } from './entry'


@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EntryComponent]
})
export class EntryModule { }
