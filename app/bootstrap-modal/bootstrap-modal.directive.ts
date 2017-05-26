import {
  OnInit,
  AfterViewInit,
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  Output,
  Renderer,
  ViewContainerRef
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ModalBackdropComponent } from './bootstrap-modal-backdrop.component';
import { BootstrapModalService } from './bootstrap-modal.service';
import { BootstrapModalOptions } from './bootstrap-modal-options';
import { modalConfigDefaults } from './constants/bootstrap-modal.constants';

@Directive({
  selector: '[bootstrapModal]',
  exportAs: 'bootstrapModal'
})
export class BootstrapModalDirective implements OnInit, AfterViewInit, OnDestroy {

  @Output() public onShow: EventEmitter<BootstrapModalDirective> = new EventEmitter<BootstrapModalDirective>();
  @Output() public onShown: EventEmitter<BootstrapModalDirective> = new EventEmitter<BootstrapModalDirective>();
  @Output() public onHide: EventEmitter<BootstrapModalDirective> = new EventEmitter<BootstrapModalDirective>();
  @Output() public onHidden: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _config: BootstrapModalOptions;
  public get config(): BootstrapModalOptions {
    return this._config;
  }
  @Input()
  public set config(conf: BootstrapModalOptions) {
    this._config = this.getConfig(conf);
  };

  private _isShown: boolean = false;
  public get isShown(): boolean {
    return this._isShown;
  }
  public set isShown(isShown: boolean) {
    this._isShown = isShown;
  }

  // reference to backdrop component
  private backdrop: ComponentRef<ModalBackdropComponent>;

  private modalService: BootstrapModalService;

  private get document(): any {
    return this.injector.get(DOCUMENT);
  };

  @HostListener('click', ['$event'])
  protected onClick(event: any): void {
    if (this.config.ignoreBackdropClick || event.target !== this.element.nativeElement) {
      return;
    }

    this.hideModal(event, false);
  }

  @HostListener('keydown.esc')
  protected onEsc(): void {
    if (this.config.keyboard) {
      this.hideModal(null, false);
    }
  }

  public constructor(
    private element: ElementRef,
    private renderer: Renderer,
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public ngOnInit(): any {
    this.modalService = this.injector.get(BootstrapModalService);
  }

  public ngAfterViewInit(): any {
    this.config = this.config || this.getConfig();
    this.injector.get(BootstrapModalService);
  }

  public ngOnDestroy(): any {
    this.config = void 0;
    this.isShown = void 0;
  }

  public toggle(): void {
    return this.isShown ? this.hideModal() : this.showModal();
  }

  public showModal(): void {
    this.onShow.emit(this);

    if (this.isShown) {
      return;
    }
    this.isShown = true;

    this.toggleBackdrop(() => {
      this.showModalContents();
    });
  }

  public hideModal(event?: Event, destroyComponent?: boolean): void {
    if (event) {
      event.preventDefault();
    }

    this.onHide.emit(this);

    if (!this.isShown) {
      return;
    }
    this.isShown = false;

    this.toggleBackdrop(() => {
      if (this.document && this.document.body) {
        this.renderer.setElementStyle(this.document.documentElement, 'overflow-y', 'auto');
      }
      destroyComponent ? this.onHidden.emit(true) : this.onHidden.emit(false);
    });
  }

  private showModalContents(): void {
    this.renderer.setElementStyle(this.document.documentElement, 'overflow-y', 'hidden');
    this.renderer.setElementStyle(this.element.nativeElement, 'display', 'block');
    this.renderer.setElementProperty(this.element.nativeElement, 'scrollTop', 0);

    const transitionComplete: any = () => {
      if (this._config.focus) {
        this.element.nativeElement.focus();
      }

      this.onShown.emit(this);
    };

    transitionComplete();
  }

  private toggleBackdrop(callback?: Function): void {
    if (this.isShown && this.config.backdrop) {

      this.backdrop = this.appendBackdrop();
      this.backdrop.instance.isShown = true;

      if (this._config.isAnimated) {
        this.backdrop.instance.isAnimated = this._config.isAnimated;
      }

      if (!callback) {
        return;
      }

      callback();

    } else if (!this.isShown && this.backdrop) {
      this.backdrop.instance.isShown = false;

      let callbackRemove: any = () => {
        this.removeBackdrop();
        if (callback) {
          callback();
        }
      };

      if (this.backdrop.instance.isAnimated) {
        setTimeout(callbackRemove, 500);
      } else {
        callbackRemove();
      }
    } else if (callback) {
      callback();
    }
  }

  private appendBackdrop(): ComponentRef<any> {
    let location: ViewContainerRef = this.modalService.getModalOutlet();
    let componentFactory: ComponentFactory<ModalBackdropComponent> =
      this.componentFactoryResolver.resolveComponentFactory(ModalBackdropComponent);
    let parentInjector: Injector = location.parentInjector;
    return location.createComponent(componentFactory, location.length, parentInjector);
  }

  private removeBackdrop(): void {
    if (this.backdrop) {
      this.backdrop.destroy();
      this.backdrop = void 0;
    }
  }

  private getConfig(config?: BootstrapModalOptions): BootstrapModalOptions {
    return Object.assign({}, modalConfigDefaults, config);
  }

}
