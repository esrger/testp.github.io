import {
  Component,
  ElementRef,
  Renderer,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'modal-backdrop',
  template: '<div [@modalBackdropState]="backdropState" class="modal-backdrop"></div>',
  animations: [
    trigger('modalBackdropState', [
      state('invisible', style({ opacity: 0 })),
      state('invisible-animated', style({ opacity: 0 })),
      state('visible', style({ display: 'block', opacity: 0.70 })),
      transition('* => invisible-animated', animate('500ms'))
    ])
  ]
})
export class ModalBackdropComponent {

  public element: ElementRef;
  public renderer: Renderer;
  public backdropState: string = 'invisible';

  private _isAnimated: boolean;
  private _isShown: boolean = false;

  public constructor(element: ElementRef, renderer: Renderer) {
    this.element = element;
    this.renderer = renderer;
  }

  public get isAnimated(): boolean {
    return this._isAnimated;
  }

  public set isAnimated(value: boolean) {
    this._isAnimated = value;
  }

  public get isShown(): boolean {
    return this._isShown;
  }

  public set isShown(value: boolean) {
    this._isShown = value;
    if (this._isShown) {
      this.backdropState = 'visible';
    } else {
      if (this.isAnimated) {
        this.backdropState = 'invisible-animated';
      } else {
        this.backdropState = 'invisible';
      }
    }
  }

}
