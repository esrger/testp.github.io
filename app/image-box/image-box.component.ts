import { Component, Input } from '@angular/core';
import { BootstrapModalService } from '../bootstrap-modal/bootstrap-modal.service';
import { ImageModalComponent } from '../image-modal-view/image-modal-view.component';

@Component({
  selector: 'image-box',
  templateUrl: 'angular2-flickr-app/app/image-box/image-box.component.html'
})
export class ImageBoxComponent {

  @Input()
  private src: string;

  @Input()
  private title: string;

  @Input()
  private disableFavs: boolean;

  private favoriteLabelColor: string;
  private displayEmptyHeartIcon = 'inline';
  private displayRedHeartIcon = 'none';
  private favoriteOverlayTop: string;

  private modalService: BootstrapModalService;

  constructor(
    modalService: BootstrapModalService
  ) {
    this.modalService = modalService;
  }

  public openModal(): void {

    this.modalService.setupModal(ImageModalComponent)
      .then((bootstrapModal) => {
        this.modalService.setPropertiesOnModalContentComponent({
          'setImageTitle': this.title,
          'setImageUrl': this.src
        });
        bootstrapModal.openModal();
      });
  }

  public imageFavored(): void {
    this.favoriteLabelColor = 'red';
    this.displayRedHeartIcon = 'inline';
    this.displayEmptyHeartIcon = 'none';
    this.favoriteOverlayTop = '0px';
  }

}
