import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'flickr-app',
  templateUrl: 'angular2-flickr-app/app/app.component.html'
})
export class AppComponent {

  private router: Router;

  constructor(
    router: Router
  ) {
    this.router = router;
  }

  public goTo(page: string): void {
    this.router.navigate([page]);
  }

}
