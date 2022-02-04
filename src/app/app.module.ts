import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { PlandetailsComponent } from './plandetails/plandetails.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AuthGuard } from './Auth';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlansComponent,
    PlandetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],
  providers: [ AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
