import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { BootstrapModalService } from '../bootstrap-modal/bootstrap-modal.service';
import { SearchService } from '../search/search.service';
import { UIService } from '../ui-service/app-ui.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'favorites',
  templateUrl: 'angular2-flickr-app/app/favorites/favorites.component.html'
})
export class FavoritesComponent implements OnInit {

  private router: Router;
  private searchService: SearchService;
  private uiService: UIService;
  private images: any[] = [];
  private picCols: any[];
  private modalService: BootstrapModalService;
  private disableFavs = true;
  private resizedObservable: Observable<boolean>;
  private zone: NgZone;


  constructor(
    searchService: SearchService,
    uiService: UIService,
    router: Router,
    modalService: BootstrapModalService,
    zone: NgZone
  ) {
    this.uiService = uiService;
    this.searchService = searchService;
    this.modalService = modalService;
    this.router = router;
    this.zone = zone;

    let images = JSON.parse(localStorage.getItem('flickrPhotosAppNg2'));
    if (images) {
      /*this.images = [];
      for (let index in images) {
          this.images.push({title: 'temp', url: images[index]});
      }*/
      this.images = images;
    }
  }

  public ngOnInit(): void {
    this.picCols = this.uiService.findColNum();
    console.log(this.picCols);
    this.uiService.resetHeaderFooter();
    this.uiService.adjustImageContainerHeights(true, this.images.length);
    this.resizedObservable = this.uiService.getResizedObservable();
    this.resizedObservable.subscribe(
      (change) => {
        this.zone.run(() => {
          this.picCols = this.uiService.findColNum();
          console.log('UPDATED PIC COLS');
          console.log(this.picCols);
          this.uiService.resetHeaderFooter();
          this.uiService.adjustImageContainerHeights(true, this.images.length);
        });
      }
    );
  }

  public ngOnDestroy(): void {
    this.modalService.destroyModal();
    this.uiService.resetHeaderFooter();
  }

}
