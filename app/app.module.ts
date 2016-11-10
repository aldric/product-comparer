import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { BankDetailComponent } from './bank-detail.component';
import { BanksComponent } from './banks.component';
import { DashboardComponent } from './dashboard.component';

import { BankService } from './bank.service';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'bank/:id', component: BankDetailComponent },
      { path: 'banks', component: BanksComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ])
  ],
  declarations: [ 
  	AppComponent,
    DashboardComponent,
	  BankDetailComponent,
  	BanksComponent
  ],
  providers : [
  	BankService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
