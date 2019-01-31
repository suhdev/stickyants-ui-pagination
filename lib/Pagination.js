"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var bem_class_gen_1 = require("bem-class-gen");
var mobx_react_1 = require("mobx-react");
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.render = function () {
        var model = this.props.model;
        var clz = bem_class_gen_1.B().bl('sa-pagination');
        var count = (model.totalCount) || 0;
        var totalPages = Math.ceil(count / model.itemsPerPage);
        return (count > 0 ? (React.createElement("div", { className: clz.bem },
            React.createElement("div", { className: clz.el('btn').amod('prev').bem, onClick: model.page > 1 ? model.onPrevPage : undefined }, model.prevPageView || '<'),
            React.createElement("div", { className: clz.el('count').bem }, model.getPaginationLabel ? model.getPaginationLabel(model.page, totalPages) : model.page + " of " + totalPages),
            React.createElement("div", { className: clz.el('btn').amod('next').bem, onClick: model.page < totalPages ? model.onNextPage : undefined }, model.nextPageView || '>'))) : null);
    };
    Pagination = __decorate([
        mobx_react_1.observer
    ], Pagination);
    return Pagination;
}(React.Component));
exports.Pagination = Pagination;
