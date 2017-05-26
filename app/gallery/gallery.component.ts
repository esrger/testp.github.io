import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { BootstrapModalService } from '../bootstrap-modal/bootstrap-modal.service';
import { SearchService } from '../search/search.service';
import { UIService } from '../ui-service/app-ui.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'gallery',
  templateUrl: 'angular2-flickr-app/app/gallery/gallery.component.html'
})
export class GalleryComponent implements OnInit {

  private router: Router;
  private searchService: SearchService;
  private uiService: UIService;
  private images: any[] = [];
  private picCols: any[];
  private modalService: BootstrapModalService;
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
    this.images = searchService.getCachedResults() ? searchService.getCachedResults() : [];
    this.zone = zone;
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
