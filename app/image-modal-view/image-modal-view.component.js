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
var bootstrap_modal_component_1 = require('../bootstrap-modal/bootstrap-modal.component');
var ImageModalComponent = (function () {
    function ImageModalComponent() {
        this.modalInstance = new bootstrap_modal_component_1.BootstrapModalComponent(null);
    }
    ImageModalComponent.prototype.setImageTitle = function (imageTitle) {
        this.imageTitle = imageTitle;
    };
    ImageModalComponent.prototype.setImageUrl = function (imageUrl) {
        this.imageUrl = imageUrl;
    };
    ImageModalComponent.prototype.closeModal = function () {
        this.modalInstance.closeModal();
    };
    ImageModalComponent = __decorate([
        core_1.Component({
            selector: 'image-modal-view',
            templateUrl: 'angular2-flickr-app/app/image-modal-view/image-modal-view.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ImageModalComponent);
    return ImageModalComponent;
}());
exports.ImageModalComponent = ImageModalComponent;
//# sourceMappingURL=image-modal-view.component.js.map