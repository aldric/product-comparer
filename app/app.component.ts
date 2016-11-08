import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>My Banks</h2>
  <ul class="banks">
    <li *ngFor="let bank of banks" (click)="onSelect(bank)" [class.selected]="bank === selectedBank">
      <span class="badge">{{bank.id}}</span> {{bank.name}}
    </li>
  </ul>
  <div *ngIf="selectedBank">
    <h2>{{selectedBank.name}} details!</h2>
    <div><label>id: </label>{{selectedBank.id}}</div>
    <div><label>name: </label><input [(ngModel)]="selectedBank.name" placeholder="name"></div>
  </div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .banks {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .banks li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .banks li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .banks li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .banks .text {
    position: relative;
    top: -3px;
  }
  .banks .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent {
  title = 'Bank Comparer';
  selectedBank : Bank;
  banks = BANKS;

  onSelect(bank: Bank): void {
    this.selectedBank = bank;
  }
}

 export class Bank {
   id : number;
   name : string;
 }

 const BANKS: Bank[] = [
  { id: 11, name: 'BforBank' },
  { id: 12, name: 'Monabanq' },
  { id: 13, name: 'ING Direct' },
  { id: 14, name: 'Boursorama' }
];
