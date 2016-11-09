import { Component, Input } from '@angular/core';
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

export class BankDetailComponent { 
	 @Input()
	 bank: Bank;
}
