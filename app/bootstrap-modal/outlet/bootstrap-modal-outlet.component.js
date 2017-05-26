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
var bootstrap_modal_service_1 = require('../bootstrap-modal.service');
var BootstrapModalOutletComponent = (function () {
    function BootstrapModalOutletComponent(modalService) {
        this.modalService = modalService;
    }
    BootstrapModalOutletComponent.prototype.ngOnInit = function () {
        this.modalService.setModalOutlet(this.viewContainerRef);
    };
    __decorate([
        core_1.ViewChild('modalOutlet', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], BootstrapModalOutletComponent.prototype, "viewContainerRef", void 0);
    BootstrapModalOutletComponent = __decorate([
        core_1.Component({
            selector: 'bootstrap-modal-outlet',
            templateUrl: 'angular2-flickr-app/app/bootstrap-modal/outlet/bootstrap-modal-outlet.component.html'
        }), 
        __metadata('design:paramtypes', [bootstrap_modal_service_1.BootstrapModalService])
    ], BootstrapModalOutletComponent);
    return BootstrapModalOutletComponent;
}());
exports.BootstrapModalOutletComponent = BootstrapModalOutletComponent;
//# sourceMappingURL=bootstrap-modal-outlet.component.js.map