import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { BankService } from './bank.service';
import { Bank } from './bank';

@Component({
  selector: 'bank-details',
  template: `
  <div *ngIf="bank" id="bank-details">
    <h2>{{bank.name}} details!</h2>
    <div><label>id: </label>{{bank.id}}</div>
    <div><label>name: </label><input [(ngModel)]="bank.name" placeholder="name"></div>
  </div>
  `
})

export class BankDetailComponent implements OnInit { 
	 @Input()
	 bank: Bank;

	constructor(
  		private bankService: BankService,
  		private route: ActivatedRoute,
  		private location: Location
	) {}

	ngOnInit(): void {
		this.route.params.forEach((params : Params) => {
			let id = +params['id'];
			this.bankService.getBank(id)
				.then(bank => this.bank = bank);
		})
	}
}
