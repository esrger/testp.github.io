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
var bootstrap_modal_service_1 = require('../bootstrap-modal/bootstrap-modal.service');
var image_modal_view_component_1 = require('../image-modal-view/image-modal-view.component');
var ImageBoxComponent = (function () {
    function ImageBoxComponent(modalService) {
        this.displayEmptyHeartIcon = 'inline';
        this.displayRedHeartIcon = 'none';
        this.modalService = modalService;
    }
    ImageBoxComponent.prototype.openModal = function () {
        var _this = this;
        this.modalService.setupModal(image_modal_view_component_1.ImageModalComponent)
            .then(function (bootstrapModal) {
            _this.modalService.setPropertiesOnModalContentComponent({
                'setImageTitle': _this.title,
                'setImageUrl': _this.src
            });
            bootstrapModal.openModal();
        });
    };
    ImageBoxComponent.prototype.imageFavored = function () {
        this.favoriteLabelColor = 'red';
        this.displayRedHeartIcon = 'inline';
        this.displayEmptyHeartIcon = 'none';
        this.favoriteOverlayTop = '0px';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageBoxComponent.prototype, "src", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageBoxComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ImageBoxComponent.prototype, "disableFavs", void 0);
    ImageBoxComponent = __decorate([
        core_1.Component({
            selector: 'image-box',
            templateUrl: 'angular2-flickr-app/app/image-box/image-box.component.html'
        }), 
        __metadata('design:paramtypes', [bootstrap_modal_service_1.BootstrapModalService])
    ], ImageBoxComponent);
    return ImageBoxComponent;
}());
exports.ImageBoxComponent = ImageBoxComponent;
//# sourceMappingURL=image-box.component.js.map