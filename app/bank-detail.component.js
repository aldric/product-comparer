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
var common_1 = require('@angular/common');
var bank_service_1 = require('./bank.service');
var bank_1 = require('./bank');
var BankDetailComponent = (function () {
    function BankDetailComponent(bankService, route, location) {
        this.bankService = bankService;
        this.route = route;
        this.location = location;
    }
    BankDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.bankService.getBank(id)
                .then(function (bank) { return _this.bank = bank; });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', bank_1.Bank)
    ], BankDetailComponent.prototype, "bank", void 0);
    BankDetailComponent = __decorate([
        core_1.Component({
            selector: 'bank-details',
            template: "\n  <div *ngIf=\"bank\" id=\"bank-details\">\n    <h2>{{bank.name}} details!</h2>\n    <div><label>id: </label>{{bank.id}}</div>\n    <div><label>name: </label><input [(ngModel)]=\"bank.name\" placeholder=\"name\"></div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [bank_service_1.BankService, router_1.ActivatedRoute, common_1.Location])
    ], BankDetailComponent);
    return BankDetailComponent;
}());
exports.BankDetailComponent = BankDetailComponent;
//# sourceMappingURL=bank-detail.component.js.map