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
require('rxjs/Rx');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.url = 'https://api.flickr.com/services/rest';
        this.cachedResults = [];
    }
    SearchService.prototype.search = function (searchText) {
        var _this = this;
        console.log(searchText);
        var params = new http_1.URLSearchParams();
        params.set('method', 'flickr.photos.search');
        params.set('format', 'json');
        params.set('api_key', '80c0aff65590f93ed177cb65805fbec7');
        params.set('action', 'opensearch');
        params.set('text', searchText);
        params.set('per_page', '30');
        params.set('media', 'photos');
        params.set('content_type', '1');
        params.set('format', 'json');
        params.set('nojsoncallback', '1');
        var requestOptions = new http_1.RequestOptions();
        requestOptions.search = params;
        return this.http.get('https://api.flickr.com/services/rest', requestOptions).map(function (response) {
            //           if (res.status == 200 && res.data.photos) {
            //var photosArr = res.data.photos.photo;
            _this.cachedResults = [];
            var jsonRes = response.json().photos.photo;
            for (var i = 0; i < jsonRes.length; i++) {
                var farm = jsonRes[i].farm;
                var id = jsonRes[i].id;
                var secret = jsonRes[i].secret;
                var server = jsonRes[i].server;
                var title = jsonRes[i].title;
                var photoUrl = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
                _this.cachedResults.push({ url: photoUrl, title: title });
            }
            return response.json().photos.photo;
        });
    };
    ;
    SearchService.prototype.getCachedResults = function () {
        return this.cachedResults;
    };
    SearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map