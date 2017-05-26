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
var ImageBoxDirective = (function () {
    function ImageBoxDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.favored = false;
        this.onFavored = new core_1.EventEmitter();
    }
    ImageBoxDirective.prototype.onMouseEnter = function () {
        if (this.favored) {
            return;
        }
        this.favored = true;
        if (!localStorage.getItem('flickrPhotosAppNg2')) {
            localStorage.setItem('flickrPhotosAppNg2', JSON.stringify([{
                    title: this.title,
                    url: this.url
                }]));
        }
        else {
            var currentFavs = JSON.parse(localStorage.getItem("flickrPhotosAppNg2"));
            currentFavs.push({
                title: this.title,
                url: this.url
            });
            localStorage.setItem('flickrPhotosAppNg2', JSON.stringify(currentFavs));
        }
        console.log('on favored...');
        this.onFavored.emit(true);
        //Here should have saved to database so it would have persisted on refresh
        //this.el.nativeElement
        //this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
        //element[0].querySelector('.favorite-hover-label').style.color = 'red';
        //element[0].querySelector('.favorite-hover-label .fa-heart-o').style.display = 'none';
        //element[0].querySelector('.favorite-hover-label .fa-heart').style.display = 'inline';
        //element[0].querySelector('.favorite-overlay').style.top = '0px';      
    };
    __decorate([
        core_1.Input('imageTitle'), 
        __metadata('design:type', String)
    ], ImageBoxDirective.prototype, "title", void 0);
    __decorate([
        core_1.Input('imageUrl'), 
        __metadata('design:type', String)
    ], ImageBoxDirective.prototype, "url", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ImageBoxDirective.prototype, "onFavored", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ImageBoxDirective.prototype, "onMouseEnter", null);
    ImageBoxDirective = __decorate([
        core_1.Directive({
            selector: '[favoriteImage]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ImageBoxDirective);
    return ImageBoxDirective;
}());
exports.ImageBoxDirective = ImageBoxDirective;
//# sourceMappingURL=image-box.directive.js.map