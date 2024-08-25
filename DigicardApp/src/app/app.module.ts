import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrepaidCardRequestComponent } from './prepaid-card-request/prepaid-card-request.component';
import { ValidationCardRequestComponent } from './validation-card-request/validation-card-request.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SuiviDemandeComponent } from './suivi-demande/suivi-demande.component';
import { HomeComponent } from './home/home.component';
import { DelivranceComponent } from './delivrance/delivrance.component';
import { SuiviDelivranceComponent } from './suivi-delivrance/suivi-delivrance.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ValidationDemandeComponent } from './validation-demande/validation-demande.component';
import { ValidationDelivranceComponent } from './validation-delivrance/validation-delivrance.component';
import { CreditCardFormatPipe } from './credit-card-format.pipe';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'prepaid-card-request', component: PrepaidCardRequestComponent },
  { path: 'validation-card-request', component: ValidationCardRequestComponent },
  { path: 'suivi-demande', component : SuiviDemandeComponent },
  { path: 'home', component : HomeComponent },
  { path: 'delivrance', component : DelivranceComponent },
  { path: 'suivi-delivrance', component : SuiviDelivranceComponent },
  { path: 'validation-demande', component : ValidationDemandeComponent },
  { path: 'validation-delivrance', component : ValidationDelivranceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PrepaidCardRequestComponent,
    ValidationCardRequestComponent,
    SuiviDemandeComponent,
    HomeComponent,
    DelivranceComponent,
    SuiviDelivranceComponent,
    ValidationDemandeComponent,
    ValidationDelivranceComponent,
    CreditCardFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
