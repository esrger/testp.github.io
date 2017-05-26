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
var bootstrap_modal_component_1 = require('./bootstrap-modal.component');
var bootstrap_modal_outlet_component_1 = require('./outlet/bootstrap-modal-outlet.component');
var bootstrap_modal_backdrop_component_1 = require('./bootstrap-modal-backdrop.component');
var bootstrap_modal_service_1 = require('./bootstrap-modal.service');
var bootstrap_modal_directive_1 = require('./bootstrap-modal.directive');
var BootstrapModalModule = (function () {
    function BootstrapModalModule() {
    }
    BootstrapModalModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [
                bootstrap_modal_component_1.BootstrapModalComponent,
                bootstrap_modal_outlet_component_1.BootstrapModalOutletComponent,
                bootstrap_modal_directive_1.BootstrapModalDirective,
                bootstrap_modal_backdrop_component_1.ModalBackdropComponent
            ],
            providers: [
                bootstrap_modal_service_1.BootstrapModalService
            ],
            entryComponents: [
                bootstrap_modal_backdrop_component_1.ModalBackdropComponent,
                bootstrap_modal_component_1.BootstrapModalComponent
            ],
            exports: [
                bootstrap_modal_component_1.BootstrapModalComponent,
                bootstrap_modal_outlet_component_1.BootstrapModalOutletComponent,
                bootstrap_modal_directive_1.BootstrapModalDirective,
                bootstrap_modal_backdrop_component_1.ModalBackdropComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BootstrapModalModule);
    return BootstrapModalModule;
}());
exports.BootstrapModalModule = BootstrapModalModule;
//# sourceMappingURL=bootstrap-modal.module.js.map