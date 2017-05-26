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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
var bootstrap_modal_module_1 = require('./bootstrap-modal/bootstrap-modal.module');
var app_component_1 = require('./app.component');
var search_component_1 = require('./search/search.component');
var gallery_component_1 = require('./gallery/gallery.component');
var favorites_component_1 = require('./favorites/favorites.component');
var image_box_component_1 = require('./image-box/image-box.component');
var image_box_directive_1 = require('./image-box/image-box.directive');
var image_modal_view_component_1 = require('./image-modal-view/image-modal-view.component');
var search_service_1 = require('./search/search.service');
var app_ui_service_1 = require('./ui-service/app-ui.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_module_1.AppRoutingModule,
                bootstrap_modal_module_1.BootstrapModalModule
            ],
            declarations: [
                app_component_1.AppComponent,
                search_component_1.SearchComponent,
                gallery_component_1.GalleryComponent,
                favorites_component_1.FavoritesComponent,
                image_box_component_1.ImageBoxComponent,
                image_box_directive_1.ImageBoxDirective,
                image_modal_view_component_1.ImageModalComponent
            ],
            entryComponents: [
                image_modal_view_component_1.ImageModalComponent
            ],
            providers: [
                search_service_1.SearchService,
                app_ui_service_1.UIService,
                { provide: Window, useValue: window }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map