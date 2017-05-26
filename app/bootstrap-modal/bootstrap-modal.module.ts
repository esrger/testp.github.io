import { NgModule } from '@angular/core';
import { BootstrapModalComponent } from './bootstrap-modal.component';
import { BootstrapModalOutletComponent } from './outlet/bootstrap-modal-outlet.component';
import { ModalBackdropComponent } from './bootstrap-modal-backdrop.component';
import { BootstrapModalService } from './bootstrap-modal.service';
import { BootstrapModalDirective } from './bootstrap-modal.directive';

@NgModule({
  imports: [],
  declarations: [
    BootstrapModalComponent,
    BootstrapModalOutletComponent,
    BootstrapModalDirective,
    ModalBackdropComponent
  ],
  providers: [
    BootstrapModalService
  ],
  entryComponents: [
    ModalBackdropComponent,
    BootstrapModalComponent
  ],
  exports: [
    BootstrapModalComponent,
    BootstrapModalOutletComponent,
    BootstrapModalDirective,
    ModalBackdropComponent
  ]
})
export class BootstrapModalModule { }
