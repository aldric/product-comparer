import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { BankService } from './bank.service';
import { Bank } from './bank';

@Component({
  moduleId: module.id,
  selector: 'bank-details',
  templateUrl: 'bank-detail.component.html',
  styleUrls: [ 'bank-detail.component.css' ]
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

	goBack(): void {
 		this.location.back();
	}
}
