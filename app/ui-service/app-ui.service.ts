import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class UIService {

  private resizedSource: Subject<boolean> = new Subject<boolean>();

  private resizedObservable$: Observable<boolean> = this.resizedSource.asObservable();

  private broadcastResize() {
    this.resizedSource.next(true);
  }

  public getResizedObservable(): Observable<boolean> {
    return this.resizedObservable$;
  }


  private body = document.getElementsByTagName('body')[0];
  private keepFooterStatic = false;

  public constructor(
    private injector: Injector,
    private window: Window
  ) {

    let self = this;

    window.onresize = function() {
      console.log('resize adjust');
      self.resetHeaderFooter();
      console.log('resize adjust end');
    };

    window.addEventListener('orientationchange', function() {
      console.log('orientation change adjust');
      self.resetHeaderFooter();
    });

    window.onscroll = () => {
      console.log('on scroll adjust');
      self.adjustHeaderFooter();
      console.log('on scroll adjust end');
    };

    window.onresize = () => {
      this.broadcastResize();
    };

    window.onorientationchange = () => {
      this.broadcastResize();
    };


  }

  findColNum(): any[] {
    let window = this.window;
    //injector.get(DOCUMENT);
    let relevantWidth = window.innerWidth;
    if (document.body.clientWidth > window.innerWidth) {
      relevantWidth = document.body.clientWidth;
    }
    if (relevantWidth < 768) {
      return [1];
    } else if (relevantWidth < 992) {
      return [1, 2];
    } else {
      return [1, 2, 3];
    }
  }

  public adjustImageContainerHeights(imagesPage: boolean, numImages: number) {
    let self = this;
    let imageLoadTracker = setInterval(function() {
      console.log('in adjust container heights');
      if (imagesPage) {
        var imagesPage = true;
      }
      var imgTags = document.getElementsByTagName('img');
      var loaded = 0;
      for (var i = 0; i < imgTags.length; i++) {
        if (imgTags[i].complete) {
          loaded++
        }
      }
      if (loaded == imgTags.length) {
        console.log('loaded: ' + loaded + ', image tags: ' + imgTags.length + ', out of: ' + numImages);
        if (numImages || numImages == loaded || !imagesPage) {
          clearInterval(imageLoadTracker);
        } else {
          return;
        }
        var containerTags = document.getElementsByClassName('container');
        var largestContainer = 0;
        for (var j = 0; j < containerTags.length; j++) {
          (<HTMLElement>containerTags[j]).style.height = 'auto';
          if (largestContainer < (<HTMLElement>containerTags[j]).offsetHeight) {
            largestContainer = (<HTMLElement>containerTags[j]).offsetHeight;
          }
        }
        if (largestContainer < window.innerHeight - 185) {
          largestContainer = window.innerHeight - 185;
        }
        for (var k = 0; k < containerTags.length; k++) {
          //console.log('comparing: ' + largestContainer + ' : ' + containerTags[k].offsetHeight);
          (<HTMLElement>containerTags[k]).style.height = largestContainer + 'px';
        }
        console.log('finished adjusting image sizes');
        self.resetHeaderFooter();
      }
    }, 10);
  }

  private adjustHeaderFooter(): void {
    console.log('--> adjusting header footer');
    var y = this.body.scrollTop || document.documentElement.scrollTop;

    if (y > 100 && ((this.body.scrollHeight - y) > (window.innerHeight + 100))) {
      document.getElementById('nav-menu').setAttribute('class', 'nav-menu-fixed');
    } else if (y < 100) {
      document.getElementById('nav-menu').setAttribute('class', '');
    }

    if (this.keepFooterStatic && ((this.body.scrollHeight - y) > (window.innerHeight + 90))) {
      this.keepFooterStatic = false;
    }
    if ((this.body.scrollHeight - y) > (window.innerHeight + 30) && !this.keepFooterStatic) {
      document.getElementsByTagName('footer')[0].setAttribute('class', 'footer');
    } else if (this.body.scrollHeight > window.innerHeight) {
      this.keepFooterStatic = true;
      document.getElementsByTagName('footer')[0].setAttribute('class', 'footer-static');
    }

    if (this.body.scrollHeight == window.innerHeight) {
      this.keepFooterStatic = false;
      document.getElementsByTagName('footer')[0].setAttribute('class', 'footer');
    }
  };

  public resetHeaderFooter() {
    console.log('reseting header footer');
    this.keepFooterStatic = false;
    document.getElementById('nav-menu').setAttribute('class', '');
    document.getElementsByTagName('footer')[0].setAttribute('class', 'footer');
    this.adjustHeaderFooter();
  }


  // MVP:
  // =======
  // broadcast from window change and orientation change so they can trigger calls to adjust cols, heights and header footer
  // clean
  // test
    
  //  to have:
  // ================
  // move property setting functionality
  // bring forth modal open \ closed functionality
  // more cleaning and organization wherever possible
}
