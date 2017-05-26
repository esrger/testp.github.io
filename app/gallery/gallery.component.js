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
var bootstrap_modal_service_1 = require('../bootstrap-modal/bootstrap-modal.service');
var search_service_1 = require('../search/search.service');
var app_ui_service_1 = require('../ui-service/app-ui.service');
var GalleryComponent = (function () {
    function GalleryComponent(searchService, uiService, router, modalService, zone) {
        this.images = [];
        this.uiService = uiService;
        this.searchService = searchService;
        this.modalService = modalService;
        this.router = router;
        this.images = searchService.getCachedResults() ? searchService.getCachedResults() : [];
        this.zone = zone;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.picCols = this.uiService.findColNum();
        console.log(this.picCols);
        this.uiService.resetHeaderFooter();
        this.uiService.adjustImageContainerHeights(true, this.images.length);
        this.resizedObservable = this.uiService.getResizedObservable();
        this.resizedObservable.subscribe(function (change) {
            _this.zone.run(function () {
                _this.picCols = _this.uiService.findColNum();
                _this.uiService.resetHeaderFooter();
                _this.uiService.adjustImageContainerHeights(true, _this.images.length);
            });
        });
    };
    GalleryComponent.prototype.ngOnDestroy = function () {
        this.modalService.destroyModal();
        this.uiService.resetHeaderFooter();
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'gallery',
            templateUrl: 'angular2-flickr-app/app/gallery/gallery.component.html'
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService, app_ui_service_1.UIService, router_1.Router, bootstrap_modal_service_1.BootstrapModalService, core_1.NgZone])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map