import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bank } from './bank';
import { BankService } from './bank.service';

@Component({
	moduleId : module.id,
	selector : 'banks',
	templateUrl : 'banks.component.html',
    styleUrls: ['banks.component.css']
})

export class BanksComponent implements OnInit {
  selectedBank : Bank;
  banks : Bank[];

  constructor(private bankService: BankService, private router: Router) { }

  getBanks(): void {
    this.bankService.getBanks().subscribe(banks => this.banks = banks);
  }
  
  onSelect(bank: Bank): void {
    this.selectedBank = bank;
  }

  gotoDetail():void {
  	this.router.navigate(['/bank', this.selectedBank.id]);
  }

  ngOnInit(): void {
    this.getBanks();
  }
}