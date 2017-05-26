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
var BootstrapModalService = (function () {
    function BootstrapModalService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    BootstrapModalService.prototype.setModalOutlet = function (outletViewContainerRef) {
        this.modalOutletRef = outletViewContainerRef;
    };
    BootstrapModalService.prototype.getModalOutlet = function () {
        return this.modalOutletRef;
    };
    BootstrapModalService.prototype.setupModal = function (modalContent, customOptions) {
        var _this = this;
        if (!this.modalComponent) {
            var modalComponentFactory = this.componentFactoryResolver.resolveComponentFactory(bootstrap_modal_component_1.BootstrapModalComponent);
            this.modalComponent = this.modalOutletRef.createComponent(modalComponentFactory);
            if (customOptions) {
                this.modalComponent.instance.getBootstrapModal().setModalOptions(customOptions);
            }
            else if (this.globalModalOptions) {
                this.modalComponent.instance.getBootstrapModal().setModalOptions(this.globalModalOptions);
            }
        }
        else {
            if (customOptions) {
                this.modalComponent.instance.getBootstrapModal().setModalOptions(customOptions);
            }
        }
        if (this.modalContentComponent) {
            this.modalContentComponent.destroy();
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(modalContent);
        this.modalContentComponent = this.modalComponent.instance.modalContentViewRef.createComponent(factory);
        if (this.modalContentComponent.instance.modalInstance instanceof bootstrap_modal_component_1.BootstrapModalComponent) {
            this.modalContentComponent.instance.modalInstance = this.modalComponent.instance;
        }
        this.modalComponent.instance.setModalContent(this.modalContentComponent);
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(); }, 0);
        }).then(function () {
            return _this.modalComponent.instance.getBootstrapModal();
        });
    };
    BootstrapModalService.prototype.setPropertiesOnModalContentComponent = function (dataHash) {
        var modalContentComponent = this.modalContentComponent.instance;
        for (var key in dataHash) {
            modalContentComponent[key].call(modalContentComponent, dataHash[key]);
        }
    };
    BootstrapModalService.prototype.getModalComponent = function () {
        return this.modalComponent;
    };
    BootstrapModalService.prototype.destroyModal = function () {
        if (this.modalComponent) {
            this.modalComponent.instance.closeModal();
        }
    };
    BootstrapModalService.prototype.setGlobalModalOptions = function (modalOptions) {
        this.globalModalOptions = modalOptions;
    };
    BootstrapModalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver])
    ], BootstrapModalService);
    return BootstrapModalService;
}());
exports.BootstrapModalService = BootstrapModalService;
//# sourceMappingURL=bootstrap-modal.service.js.map