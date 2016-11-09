import { Component, OnInit } from '@angular/core';

import  { Bank } from './bank';
import  { BankService } from './bank.service';


@Component({
	moduleId: module.id,
	selector : 'dashboard',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit { 
	banks: Bank[] = [];

	constructor(private bankService:BankService) { }

	ngOnInit() : void {
		this.bankService.getBanks().then(banks => this.banks = banks.slice(1, 5))
	}
}