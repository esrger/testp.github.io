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
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(element, renderer) {
        this.backdropState = 'invisible';
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            if (this._isShown) {
                this.backdropState = 'visible';
            }
            else {
                if (this.isAnimated) {
                    this.backdropState = 'invisible-animated';
                }
                else {
                    this.backdropState = 'invisible';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent = __decorate([
        core_1.Component({
            selector: 'modal-backdrop',
            template: '<div [@modalBackdropState]="backdropState" class="modal-backdrop"></div>',
            animations: [
                core_1.trigger('modalBackdropState', [
                    core_1.state('invisible', core_1.style({ opacity: 0 })),
                    core_1.state('invisible-animated', core_1.style({ opacity: 0 })),
                    core_1.state('visible', core_1.style({ display: 'block', opacity: 0.70 })),
                    core_1.transition('* => invisible-animated', core_1.animate('500ms'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ModalBackdropComponent);
    return ModalBackdropComponent;
}());
exports.ModalBackdropComponent = ModalBackdropComponent;
//# sourceMappingURL=bootstrap-modal-backdrop.component.js.map