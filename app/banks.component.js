"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bank_service_1 = require('./bank.service');
var BanksComponent = (function () {
    function BanksComponent(bankService) {
        this.bankService = bankService;
    }
    BanksComponent.prototype.getBanks = function () {
        var _this = this;
        this.bankService.getBanks().then(function (banks) { return _this.banks = banks; });
    };
    BanksComponent.prototype.onSelect = function (bank) {
        this.selectedBank = bank;
    };
    BanksComponent.prototype.ngOnInit = function () {
        this.getBanks();
    };
    BanksComponent = __decorate([
        core_1.Component({
            selector: 'banks',
            template: "\n \t<h2>My Banks</h2>\n  \t<ul class=\"banks\">\n    <li *ngFor=\"let bank of banks\" (click)=\"onSelect(bank)\" [class.selected]=\"bank === selectedBank\">\n      <span class=\"badge\">{{bank.id}}</span> {{bank.name}}\n    </li>\n  \t</ul>\n  \t<bank-details [bank]=\"selectedBank\"></bank-details>",
            styles: ["\n\t  .selected {\n\t    background-color: #CFD8DC !important;\n\t    color: white;\n\t  }\n\t  .banks {\n\t    margin: 0 0 2em 0;\n\t    list-style-type: none;\n\t    padding: 0;\n\t    width: 15em;\n\t  }\n\t  .banks li {\n\t    cursor: pointer;\n\t    position: relative;\n\t    left: 0;\n\t    background-color: #EEE;\n\t    margin: .5em;\n\t    padding: .3em 0;\n\t    height: 1.6em;\n\t    border-radius: 4px;\n\t  }\n\t  .banks li.selected:hover {\n\t    background-color: #BBD8DC !important;\n\t    color: white;\n\t  }\n\t  .banks li:hover {\n\t    color: #607D8B;\n\t    background-color: #DDD;\n\t    left: .1em;\n\t  }\n\t  .banks .text {\n\t    position: relative;\n\t    top: -3px;\n\t  }\n\t  .banks .badge {\n\t    display: inline-block;\n\t    font-size: small;\n\t    color: white;\n\t    padding: 0.8em 0.7em 0 0.7em;\n\t    background-color: #607D8B;\n\t    line-height: 1em;\n\t    position: relative;\n\t    left: -1px;\n\t    top: -4px;\n\t    height: 1.8em;\n\t    margin-right: .8em;\n\t    border-radius: 4px 0 0 4px;\n\t  }"
            ]
        }), 
        __metadata('design:paramtypes', [bank_service_1.BankService])
    ], BanksComponent);
    return BanksComponent;
}());
exports.BanksComponent = BanksComponent;
//# sourceMappingURL=banks.component.js.map