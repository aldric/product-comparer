import { Injectable } from '@angular/core';
import { Bank } from './bank';
import { BANKS } from './mock-banks';


@Injectable()
export class BankService {
	getBanks(): Promise<Bank[]> {
		return Promise.resolve(BANKS);
	}

	getBank(id : number) : Promise<Bank> {
		return this.getBanks()
				   .then(banks => banks.find(bank => bank.id === id));
	}
}