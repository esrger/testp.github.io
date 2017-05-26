import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  Type,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { BootstrapModal } from './bootstrap-modal';
import { BootstrapModalService } from './bootstrap-modal.service';
import { BootstrapModalDirective } from './bootstrap-modal.directive';
import { BootstrapModalOptions } from './bootstrap-modal-options';

@Component({
  selector: 'bootstrap-modal',
  templateUrl: 'angular2-flickr-app/app/bootstrap-modal/bootstrap-modal.component.html',
  styleUrls: ['angular2-flickr-app/app/bootstrap-modal/bootstrap-modal.component.css'],
  animations: [
    trigger('modalState', [
      state('out', style({ display: 'none', opacity: 0, top: '-40%' })),
      state('in', style({ display: 'block', opacity: 1, top: 0 })),
      state('in-aniamted', style({ display: 'block', opacity: 1, top: 0 })),
      transition('out => in-animated', animate('500ms')),
      transition('in-animated => out', animate('500ms'))
    ])
  ]
})
export class BootstrapModalComponent implements OnInit {

  @ViewChild('modalContentComponent', { read: ViewContainerRef }) public modalContentViewRef: ViewContainerRef;
  @ViewChild('bootstrapModal') private modalDir: BootstrapModalDirective;
  private modalContentComponent: ComponentRef<any>;
  private componentFactoryResolver: ComponentFactoryResolver;
  private modalOptions?: BootstrapModalOptions;
  private animationState: string = 'out';
  private bootstrapModal: BootstrapModal;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.bootstrapModal = new BootstrapModal();
    this.bootstrapModal.setModalComponent(this);
  }

  public ngOnInit() {
    this.animationState = 'out';
  }

  public openModal() {
    this.setModalOptions();
    if (this.modalDir.config.isAnimated) {
      this.animationState = 'in-animated';
    } else {
      this.animationState = 'in';
    }
    this.modalDir.showModal();
  }

  public closeModal(destroyComponent?: boolean) {
    this.modalDir.hideModal(null, destroyComponent);
  }

  public onModalCloseStart() {
    this.animationState = 'out';
  }

  public onModalClose(destroyComponent: boolean) {
    if (this.modalContentComponent && destroyComponent) {
      this.modalContentComponent.destroy();
    }
    if (this.bootstrapModal.getModalClosedCallback()) {
      let modalCloseCallback: any = this.bootstrapModal.getModalClosedCallback();
      modalCloseCallback();
    }
  }

  public setModalContent(component: ComponentRef<any>) {
    this.modalContentComponent = component;
  }

  public setModalOptions() {
    if (this.bootstrapModal.getModalOptions()) {
      this.modalOptions = this.bootstrapModal.getModalOptions();
    }
  }

  // obj for user to control the modal
  public getBootstrapModal() {
    return this.bootstrapModal;
  }

}
