import { Component, ViewContainerRef, ViewChild, OnInit } from '@angular/core';
import { BootstrapModalService } from '../bootstrap-modal.service';

@Component({
  selector: 'bootstrap-modal-outlet',
  templateUrl: 'angular2-flickr-app/app/bootstrap-modal/outlet/bootstrap-modal-outlet.component.html'
})
export class BootstrapModalOutletComponent implements OnInit {
  private modalService: BootstrapModalService;
  @ViewChild('modalOutlet', { read: ViewContainerRef }) private viewContainerRef: ViewContainerRef;


  public constructor(
    modalService: BootstrapModalService
  ) {
    this.modalService = modalService;
  }

  public ngOnInit() {
    this.modalService.setModalOutlet(this.viewContainerRef);
  }

}
