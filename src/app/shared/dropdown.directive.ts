import {Directive, HostListener, HostBinding, ElementRef, Renderer2} from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';

@Directive({selector: '[appDropdown]', exportAs: 'appDropDown'})
export class DropdownDirective {
  constructor(private el : ElementRef, private router : Router, private renderer : Renderer2) {
    this
      .router
      .events
      .subscribe((event : Event) => {
        if (event instanceof NavigationEnd) {

          this.isOpen = false;
          this
            .renderer
            .removeClass(this.el.nativeElement, 'show');
        }
      });
  }
  @HostBinding('class.show')isOpen = false;

  @HostListener('click')toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  @HostListener('mouseover')mouseOver() {
    this.isOpen = true;
  }
  @HostListener('mouseout')mouseOut() {
    this.isOpen = false;
  }

}
 