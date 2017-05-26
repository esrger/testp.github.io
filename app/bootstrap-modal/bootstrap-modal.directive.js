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
var platform_browser_1 = require('@angular/platform-browser');
var bootstrap_modal_backdrop_component_1 = require('./bootstrap-modal-backdrop.component');
var bootstrap_modal_service_1 = require('./bootstrap-modal.service');
var bootstrap_modal_options_1 = require('./bootstrap-modal-options');
var bootstrap_modal_constants_1 = require('./constants/bootstrap-modal.constants');
var BootstrapModalDirective = (function () {
    function BootstrapModalDirective(element, renderer, injector, applicationRef, componentFactoryResolver) {
        this.element = element;
        this.renderer = renderer;
        this.injector = injector;
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.onShow = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.onHide = new core_1.EventEmitter();
        this.onHidden = new core_1.EventEmitter();
        this._isShown = false;
    }
    Object.defineProperty(BootstrapModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BootstrapModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (isShown) {
            this._isShown = isShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapModalDirective.prototype, "document", {
        get: function () {
            return this.injector.get(platform_browser_1.DOCUMENT);
        },
        enumerable: true,
        configurable: true
    });
    ;
    BootstrapModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || event.target !== this.element.nativeElement) {
            return;
        }
        this.hideModal(event, false);
    };
    BootstrapModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.hideModal(null, false);
        }
    };
    BootstrapModalDirective.prototype.ngOnInit = function () {
        this.modalService = this.injector.get(bootstrap_modal_service_1.BootstrapModalService);
    };
    BootstrapModalDirective.prototype.ngAfterViewInit = function () {
        this.config = this.config || this.getConfig();
        this.injector.get(bootstrap_modal_service_1.BootstrapModalService);
    };
    BootstrapModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        this.isShown = void 0;
    };
    BootstrapModalDirective.prototype.toggle = function () {
        return this.isShown ? this.hideModal() : this.showModal();
    };
    BootstrapModalDirective.prototype.showModal = function () {
        var _this = this;
        this.onShow.emit(this);
        if (this.isShown) {
            return;
        }
        this.isShown = true;
        this.toggleBackdrop(function () {
            _this.showModalContents();
        });
    };
    BootstrapModalDirective.prototype.hideModal = function (event, destroyComponent) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        if (!this.isShown) {
            return;
        }
        this.isShown = false;
        this.toggleBackdrop(function () {
            if (_this.document && _this.document.body) {
                _this.renderer.setElementStyle(_this.document.documentElement, 'overflow-y', 'auto');
            }
            destroyComponent ? _this.onHidden.emit(true) : _this.onHidden.emit(false);
        });
    };
    BootstrapModalDirective.prototype.showModalContents = function () {
        var _this = this;
        this.renderer.setElementStyle(this.document.documentElement, 'overflow-y', 'hidden');
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'block');
        this.renderer.setElementProperty(this.element.nativeElement, 'scrollTop', 0);
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this.element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        transitionComplete();
    };
    BootstrapModalDirective.prototype.toggleBackdrop = function (callback) {
        var _this = this;
        if (this.isShown && this.config.backdrop) {
            this.backdrop = this.appendBackdrop();
            this.backdrop.instance.isShown = true;
            if (this._config.isAnimated) {
                this.backdrop.instance.isAnimated = this._config.isAnimated;
            }
            if (!callback) {
                return;
            }
            callback();
        }
        else if (!this.isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                setTimeout(callbackRemove, 500);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    BootstrapModalDirective.prototype.appendBackdrop = function () {
        var location = this.modalService.getModalOutlet();
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(bootstrap_modal_backdrop_component_1.ModalBackdropComponent);
        var parentInjector = location.parentInjector;
        return location.createComponent(componentFactory, location.length, parentInjector);
    };
    BootstrapModalDirective.prototype.removeBackdrop = function () {
        if (this.backdrop) {
            this.backdrop.destroy();
            this.backdrop = void 0;
        }
    };
    BootstrapModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, bootstrap_modal_constants_1.modalConfigDefaults, config);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BootstrapModalDirective.prototype, "onShow", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BootstrapModalDirective.prototype, "onShown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BootstrapModalDirective.prototype, "onHide", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BootstrapModalDirective.prototype, "onHidden", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', bootstrap_modal_options_1.BootstrapModalOptions)
    ], BootstrapModalDirective.prototype, "config", null);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], BootstrapModalDirective.prototype, "onClick", null);
    __decorate([
        core_1.HostListener('keydown.esc'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BootstrapModalDirective.prototype, "onEsc", null);
    BootstrapModalDirective = __decorate([
        core_1.Directive({
            selector: '[bootstrapModal]',
            exportAs: 'bootstrapModal'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.Injector, core_1.ApplicationRef, core_1.ComponentFactoryResolver])
    ], BootstrapModalDirective);
    return BootstrapModalDirective;
}());
exports.BootstrapModalDirective = BootstrapModalDirective;
//# sourceMappingURL=bootstrap-modal.directive.js.map