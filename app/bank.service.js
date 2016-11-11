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
var http_1 = require('@angular/http');
var bank_1 = require('./bank');
var bank_2 = require('./bank');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var BankService = (function () {
    function BankService(http) {
        this.http = http;
        this.banksUrl = 'app/data.json';
    }
    BankService.prototype.getBanks = function () {
        return this.http.get(this.banksUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BankService.prototype.getBank = function (id) {
        return this.getBanks()
            .toPromise()
            .then(function (banks) { return banks.find(function (bank) { return bank.id === id; }); });
    };
    BankService.prototype.extractData = function (res) {
        var self = this;
        return res.json().map(function (item) {
            var bank = new bank_1.Bank();
            bank.id = item.id;
            bank.name = item.title.rendered;
            bank.criterias = item.acf.evaluation_criteres.map(function (critere) {
                return new bank_2.Evaluation(critere.label_critere, critere.description_critere, +critere.valeur_note);
            });
            return bank;
        });
    };
    BankService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    BankService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BankService);
    return BankService;
}());
exports.BankService = BankService;
//# sourceMappingURL=bank.service.js.map