import { BootstrapModalComponent } from './bootstrap-modal.component';
import { BootstrapModalOptions } from './bootstrap-modal-options';

export class BootstrapModal {
  private modalComponent: BootstrapModalComponent;
  private modalOptions: BootstrapModalOptions;
  private modalClosedCallback: any;

  public openModal() {
    if (this.modalComponent) {
      this.modalComponent.openModal();
    }
  }

  public closeModal(destroyComponent?: boolean) {
    if (this.modalComponent) {
      destroyComponent ? this.modalComponent.closeModal(destroyComponent) : this.modalComponent.closeModal();
    }
  }

  public getModalOptions() {
    return this.modalOptions;
  }

  public setModalOptions(modalOptions: BootstrapModalOptions) {
    this.modalOptions = modalOptions;
  }

  public getModalClosedCallback() {
    return this.modalClosedCallback;
  }

  public setModalClosedCallback(callback: any) {
    this.modalClosedCallback = callback;
  }

  public getModalComponent() {
    return this.modalComponent;
  }

  public setModalComponent(modalComponent: BootstrapModalComponent) {
    this.modalComponent = modalComponent;
  }

}
