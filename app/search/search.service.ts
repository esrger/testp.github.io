import 'rxjs/Rx';

import { Injectable } from '@angular/core';
import {
  Http,
  RequestOptions,
  URLSearchParams
} from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class SearchService {

  constructor(
    private http: Http
  ) { }

  url: string = 'https://api.flickr.com/services/rest';

  private cachedResults: any[] = [];

  search(searchText: string): Observable<any> {
    console.log(searchText);

    let params = new URLSearchParams();
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

    let requestOptions = new RequestOptions();
    requestOptions.search = params;

    return this.http.get(
      'https://api.flickr.com/services/rest',
      requestOptions
    ).map(response => {
      //           if (res.status == 200 && res.data.photos) {
      //var photosArr = res.data.photos.photo;
                
this.cachedResults = [];

      let jsonRes = response.json().photos.photo;
      for (let i = 0; i < jsonRes.length; i++) {
        let farm = jsonRes[i].farm;
        let id = jsonRes[i].id;
        let secret = jsonRes[i].secret;
        let server = jsonRes[i].server;
        let title = jsonRes[i].title;

        let photoUrl = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
        this.cachedResults.push({ url: photoUrl, title: title });
      }

      return response.json().photos.photo;
    });

  };

  public getCachedResults(): any[] {
    return this.cachedResults;
  }

}
