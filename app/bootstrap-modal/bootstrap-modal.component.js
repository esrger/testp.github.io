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
var bootstrap_modal_1 = require('./bootstrap-modal');
var bootstrap_modal_directive_1 = require('./bootstrap-modal.directive');
var BootstrapModalComponent = (function () {
    function BootstrapModalComponent(componentFactoryResolver) {
        this.animationState = 'out';
        this.componentFactoryResolver = componentFactoryResolver;
        this.bootstrapModal = new bootstrap_modal_1.BootstrapModal();
        this.bootstrapModal.setModalComponent(this);
    }
    BootstrapModalComponent.prototype.ngOnInit = function () {
        this.animationState = 'out';
    };
    BootstrapModalComponent.prototype.openModal = function () {
        this.setModalOptions();
        if (this.modalDir.config.isAnimated) {
            this.animationState = 'in-animated';
        }
        else {
            this.animationState = 'in';
        }
        this.modalDir.showModal();
    };
    BootstrapModalComponent.prototype.closeModal = function (destroyComponent) {
        this.modalDir.hideModal(null, destroyComponent);
    };
    BootstrapModalComponent.prototype.onModalCloseStart = function () {
        this.animationState = 'out';
    };
    BootstrapModalComponent.prototype.onModalClose = function (destroyComponent) {
        if (this.modalContentComponent && destroyComponent) {
            this.modalContentComponent.destroy();
        }
        if (this.bootstrapModal.getModalClosedCallback()) {
            var modalCloseCallback = this.bootstrapModal.getModalClosedCallback();
            modalCloseCallback();
        }
    };
    BootstrapModalComponent.prototype.setModalContent = function (component) {
        this.modalContentComponent = component;
    };
    BootstrapModalComponent.prototype.setModalOptions = function () {
        if (this.bootstrapModal.getModalOptions()) {
            this.modalOptions = this.bootstrapModal.getModalOptions();
        }
    };
    // obj for user to control the modal
    BootstrapModalComponent.prototype.getBootstrapModal = function () {
        return this.bootstrapModal;
    };
    __decorate([
        core_1.ViewChild('modalContentComponent', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], BootstrapModalComponent.prototype, "modalContentViewRef", void 0);
    __decorate([
        core_1.ViewChild('bootstrapModal'), 
        __metadata('design:type', bootstrap_modal_directive_1.BootstrapModalDirective)
    ], BootstrapModalComponent.prototype, "modalDir", void 0);
    BootstrapModalComponent = __decorate([
        core_1.Component({
            selector: 'bootstrap-modal',
            templateUrl: 'angular2-flickr-app/app/bootstrap-modal/bootstrap-modal.component.html',
            styleUrls: ['angular2-flickr-app/app/bootstrap-modal/bootstrap-modal.component.css'],
            animations: [
                core_1.trigger('modalState', [
                    core_1.state('out', core_1.style({ display: 'none', opacity: 0, top: '-40%' })),
                    core_1.state('in', core_1.style({ display: 'block', opacity: 1, top: 0 })),
                    core_1.state('in-aniamted', core_1.style({ display: 'block', opacity: 1, top: 0 })),
                    core_1.transition('out => in-animated', core_1.animate('500ms')),
                    core_1.transition('in-animated => out', core_1.animate('500ms'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver])
    ], BootstrapModalComponent);
    return BootstrapModalComponent;
}());
exports.BootstrapModalComponent = BootstrapModalComponent;
//# sourceMappingURL=bootstrap-modal.component.js.map