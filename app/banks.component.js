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
var router_1 = require('@angular/router');
var bank_service_1 = require('./bank.service');
var BanksComponent = (function () {
    function BanksComponent(bankService, router) {
        this.bankService = bankService;
        this.router = router;
    }
    BanksComponent.prototype.getBanks = function () {
        var _this = this;
        this.bankService.getBanks().then(function (banks) { return _this.banks = banks; });
    };
    BanksComponent.prototype.onSelect = function (bank) {
        this.selectedBank = bank;
    };
    BanksComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/bank', this.selectedBank.id]);
    };
    BanksComponent.prototype.ngOnInit = function () {
        this.getBanks();
    };
    BanksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'banks',
            templateUrl: 'banks.component.html',
            styleUrls: ['banks.component.css']
        }), 
        __metadata('design:paramtypes', [bank_service_1.BankService, router_1.Router])
    ], BanksComponent);
    return BanksComponent;
}());
exports.BanksComponent = BanksComponent;
//# sourceMappingURL=banks.component.js.map