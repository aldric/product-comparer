import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }     from '@angular/http';

import { AppRoutingModule }    from './app-routing.module';

import { AppComponent }        from './app.component';
import { BankDetailComponent } from './bank-detail.component';
import { BanksComponent }      from './banks.component';
import { DashboardComponent }  from './dashboard.component';
import { BankService }         from './bank.service';
import { MeanPipe }            from './mean.pipe';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
    DashboardComponent,
	  BankDetailComponent,
  	BanksComponent,
    MeanPipe
  ],
  providers : [
  	BankService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
