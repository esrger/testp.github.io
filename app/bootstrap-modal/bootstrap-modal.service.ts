import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import { BootstrapModal } from './bootstrap-modal';
import { BootstrapModalComponent } from './bootstrap-modal.component';
import { BootstrapModalOptions } from './bootstrap-modal-options';

@Injectable()
export class BootstrapModalService {

  private modalOutletRef: ViewContainerRef;
  private modalComponent: ComponentRef<BootstrapModalComponent>;
  private modalContentComponent: ComponentRef<any>;
  private globalModalOptions?: BootstrapModalOptions;
  private componentFactoryResolver: ComponentFactoryResolver;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.componentFactoryResolver = componentFactoryResolver;
  }

  public setModalOutlet(outletViewContainerRef: ViewContainerRef) {
    this.modalOutletRef = outletViewContainerRef;
  }

  public getModalOutlet(): ViewContainerRef {
    return this.modalOutletRef;
  }

  public setupModal(
    modalContent: any,
    customOptions?: BootstrapModalOptions
  ): Promise<BootstrapModal> {
    if (!this.modalComponent) {
      const modalComponentFactory: ComponentFactory<BootstrapModalComponent> =
        this.componentFactoryResolver.resolveComponentFactory(BootstrapModalComponent);
      this.modalComponent = this.modalOutletRef.createComponent(modalComponentFactory);
      if (customOptions) {
        this.modalComponent.instance.getBootstrapModal().setModalOptions(customOptions);
      } else if (this.globalModalOptions) {
        this.modalComponent.instance.getBootstrapModal().setModalOptions(this.globalModalOptions);
      }
    } else {
      if (customOptions) {
        this.modalComponent.instance.getBootstrapModal().setModalOptions(customOptions);
      }
    }

    if (this.modalContentComponent) {
      this.modalContentComponent.destroy();
    }
    const factory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(modalContent);
    this.modalContentComponent = this.modalComponent.instance.modalContentViewRef.createComponent(factory);
    if (this.modalContentComponent.instance.modalInstance instanceof BootstrapModalComponent) {
      this.modalContentComponent.instance.modalInstance = this.modalComponent.instance;
    }
    this.modalComponent.instance.setModalContent(this.modalContentComponent);

    return new Promise(resolve => {
      setTimeout(() => resolve(), 0);
    }).then(() => {
      return this.modalComponent.instance.getBootstrapModal();
    });

  }

  public setPropertiesOnModalContentComponent(dataHash: any) {
    let modalContentComponent = this.modalContentComponent.instance;
    for (let key in dataHash) {
      modalContentComponent[key].call(modalContentComponent, dataHash[key]);
    }
  }

  public getModalComponent(): ComponentRef<BootstrapModalComponent> {
    return this.modalComponent;
  }

  public destroyModal() {
    if (this.modalComponent) {
      this.modalComponent.instance.closeModal();
    }
  }

  public setGlobalModalOptions(modalOptions: BootstrapModalOptions) {
    this.globalModalOptions = modalOptions;
  }

}
