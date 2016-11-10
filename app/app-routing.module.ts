import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { BanksComponent } from './banks.component';
import { BankDetailComponent } from './bank-detail.component';

const routes : Routes = [
      { path: 'bank/:id', component: BankDetailComponent },
      { path: 'banks', component: BanksComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ];

@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})
export class AppRoutingModule { }