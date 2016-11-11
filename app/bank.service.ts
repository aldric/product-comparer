import { Injectable }    from '@angular/core';
import { Response, Http } from '@angular/http';

import { Observable }    from 'rxjs/Observable';

import { Bank }          from './bank';
import { Evaluation }    from './bank';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BankService {
	private banksUrl = 'app/data.json';

	constructor(private http:Http) { }

	getBanks(): Observable<Bank[]> {
		return this.http.get(this.banksUrl)
					    .map(this.extractData)
					    .catch(this.handleError);
	}

	getBank(id : number) : Promise<Bank> {
		return this.getBanks()
				   .toPromise()
				   .then(banks => banks.find(bank => bank.id === id));
	}

	private extractData(res: Response | any) {
		let self = this;
		return res.json().map(function (item) {
			let bank = new Bank();
			bank.id = item.id;
			bank.name = item.title.rendered;
			bank.criterias = item.acf.evaluation_criteres.map(function(critere){
				return new Evaluation(critere.label_critere,  critere.description_critere, +critere.valeur_note);
			});
			return bank;
		});
	}

	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}