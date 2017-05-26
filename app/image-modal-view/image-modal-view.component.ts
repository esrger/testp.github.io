import { Component } from '@angular/core';
import { BootstrapModalComponent } from '../bootstrap-modal/bootstrap-modal.component';

@Component({
  selector: 'image-modal-view',
  templateUrl: 'angular2-flickr-app/app/image-modal-view/image-modal-view.component.html'
})
export class ImageModalComponent {

  private imageTitle: string;
  private imageUrl: string;
  public modalInstance: BootstrapModalComponent = new BootstrapModalComponent(null);

  public setImageTitle(imageTitle: string) {
    this.imageTitle = imageTitle;
  }

  public setImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
  }

  public closeModal() {
    this.modalInstance.closeModal();
  }

}
