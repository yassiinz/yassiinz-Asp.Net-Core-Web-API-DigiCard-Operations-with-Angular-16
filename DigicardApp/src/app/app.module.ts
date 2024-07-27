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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'prepaid-card-request', component: PrepaidCardRequestComponent },
  { path: 'validation-card-request', component: ValidationCardRequestComponent },
  { path: 'suivi-demande', component : SuiviDemandeComponent },
  { path: 'home', component : HomeComponent },
  { path: 'delivrance', component : DelivranceComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    PrepaidCardRequestComponent,
    ValidationCardRequestComponent,
    SuiviDemandeComponent,
    HomeComponent,
    DelivranceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
