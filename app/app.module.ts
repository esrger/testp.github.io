import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { BootstrapModalModule } from './bootstrap-modal/bootstrap-modal.module';

import { AppComponent }  from './app.component';
import { SearchComponent }  from './search/search.component';
import { GalleryComponent }  from './gallery/gallery.component';
import { FavoritesComponent }  from './favorites/favorites.component';
import { ImageBoxComponent }  from './image-box/image-box.component';
import { ImageBoxDirective }  from './image-box/image-box.directive';
import { ImageModalComponent }  from './image-modal-view/image-modal-view.component';

import { SearchService }  from './search/search.service';
import { UIService }  from './ui-service/app-ui.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    BootstrapModalModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    GalleryComponent,
    FavoritesComponent,
    ImageBoxComponent,
    ImageBoxDirective,
    ImageModalComponent
  ],
  entryComponents: [
    ImageModalComponent
  ],
  providers: [
    SearchService,
    UIService,
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
