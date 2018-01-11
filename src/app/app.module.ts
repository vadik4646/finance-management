import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppComponent } from 'app/app'
import { MaterialModule } from 'app/material.module'
import { PagesModule } from 'app/pages/pages.module'
import { rootRouting } from 'app/app.router'
import { ServicesModule } from 'app/core/services/services.module'
import { environment } from 'environments/environment'
import { ServiceWorkerModule } from '@angular/service-worker'


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
    ServicesModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
