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
require('rxjs/Rx');
var search_service_1 = require('./search.service');
var app_ui_service_1 = require('../ui-service/app-ui.service');
var SearchComponent = (function () {
    function SearchComponent(searchService, uiService, router) {
        this.searchString = '';
        this.searchInProgress = false;
        this.searchService = searchService;
        this.uiService = uiService;
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uiService.resetHeaderFooter();
        this.uiService.adjustImageContainerHeights(false, 0);
        this.resizedObservable = this.uiService.getResizedObservable();
        this.resizedObservable.subscribe(function (change) {
            _this.uiService.resetHeaderFooter();
            _this.uiService.adjustImageContainerHeights(false, 0);
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.uiService.resetHeaderFooter();
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        if (this.searchString.length == 0) {
            alert('Please first enter a search query.');
            return;
        }
        this.searchInProgress = true;
        var searchObservable = this.searchService.search(this.searchString);
        searchObservable.subscribe(function (data) {
            console.log(data);
            if (data.length == 0) {
                console.log('no photos matched your search query.');
            }
        }, function (err) {
            console.log(err);
        }, function () {
            console.log('Flickr search complete');
            _this.searchInProgress = false;
            _this.router.navigate(['/gallery']);
        });
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: 'angular2-flickr-app/app/search/search.component.html',
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService, app_ui_service_1.UIService, router_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map