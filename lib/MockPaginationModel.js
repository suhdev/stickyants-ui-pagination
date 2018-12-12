"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var MockModel = /** @class */ (function () {
    function MockModel() {
        this.itemsPerPage = 10;
        this.page = 1;
        this.totalCount = 100;
    }
    Object.defineProperty(MockModel.prototype, "totalPages", {
        get: function () {
            return Math.ceil(this.totalCount / this.itemsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    MockModel.prototype.onNextPage = function () {
        if (this.page < (this.totalPages - 1)) {
            this.page++;
        }
    };
    MockModel.prototype.onPrevPage = function () {
        if (this.page > 1) {
            this.page--;
        }
    };
    __decorate([
        mobx_1.observable.ref
    ], MockModel.prototype, "itemsPerPage", void 0);
    __decorate([
        mobx_1.observable.ref
    ], MockModel.prototype, "page", void 0);
    __decorate([
        mobx_1.observable.ref
    ], MockModel.prototype, "totalCount", void 0);
    __decorate([
        mobx_1.computed
    ], MockModel.prototype, "totalPages", null);
    __decorate([
        mobx_1.action.bound
    ], MockModel.prototype, "onNextPage", null);
    __decorate([
        mobx_1.action.bound
    ], MockModel.prototype, "onPrevPage", null);
    return MockModel;
}());
exports.model = new MockModel();
