import { Directive, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appRouteDirective]'
})
export class RouteDirective {
  constructor(private el: ElementRef, private router: Router) { }

  @HostListener('click', ['$event.target']) onClick($event) {
    console.info('clicked: ' + $event.getAttribute('href'));
    let goRoute = $event.getAttribute('href');

    this.router.navigateByUrl(goRoute);
    return false;
  }


}