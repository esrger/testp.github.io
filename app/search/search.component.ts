import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { SearchService } from './search.service';
import { UIService } from '../ui-service/app-ui.service';

@Component({
  selector: 'search',
  templateUrl: 'angular2-flickr-app/app/search/search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {

  constructor(
    searchService: SearchService,
    uiService: UIService,
    router: Router
  ) {
    this.searchService = searchService;
    this.uiService = uiService;
    this.router = router;
  }

  router: Router;
  searchService: SearchService;
  uiService: UIService;
  searchString: string = '';
  searchInProgress: boolean = false;
  private resizedObservable: Observable<boolean>;

  public ngOnInit() {
    this.uiService.resetHeaderFooter();
    this.uiService.adjustImageContainerHeights(false, 0);
    this.resizedObservable = this.uiService.getResizedObservable();
    this.resizedObservable.subscribe(
      (change) => {
        this.uiService.resetHeaderFooter();
        this.uiService.adjustImageContainerHeights(false, 0);
      }
    );
  }

  public ngOnDestroy(): void {
    this.uiService.resetHeaderFooter();
  }

  search() {

    if (this.searchString.length == 0) {
      alert('Please first enter a search query.');
      return;
    }

    this.searchInProgress = true;
    let searchObservable: Observable<any> = this.searchService.search(this.searchString);
    searchObservable.subscribe(
      data => {
        console.log(data);
        if (data.length == 0) {
      				console.log('no photos matched your search query.');
        }
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('Flickr search complete');
        this.searchInProgress = false;
        this.router.navigate(['/gallery']);
      }
    );
  }

}
