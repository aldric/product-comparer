import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { BankDetailComponent } from './bank-detail.component';
import { BanksComponent } from './banks.component';
import { DashboardComponent } from './dashboard.component';

import { BankService } from './bank.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    AppRoutingModule
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
