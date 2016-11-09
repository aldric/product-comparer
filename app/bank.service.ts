import { Injectable } from '@angular/core';
import { Bank } from './bank';
import { BANKS } from './mock-banks';


@Injectable()
export class BankService {
	getBanks(): Promise<Bank[]> {
		return Promise.resolve(BANKS);
	}
}