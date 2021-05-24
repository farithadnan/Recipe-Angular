import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // Functionality to add certain css class when this directive sits on is click and
  // vice versa when user click it again

  // property binding to attach false to the class "open"
  // it will attach when it is true, and remove when it's false
  @HostBinding('class.open') isOpen = false;

  // THIS LISTENER ONLY OPEN AND CLOSE WHEN USER CLICK THE DROPDOWN
  // toggle or listen to the click event of that specific element
  // @HostListener('click') toggleOpen() {
  // When click it will toggle the variable to true/false vice versa

  // and this variable also been bind to the choosen element thru hostbinding
  //   this.isOpen = !this.isOpen;
  // }

  // BELOW IS THE UPGRADE VERSION OF OPEN AND CLOSING THE DROPDOWN USING DIRECTIVE
  // THIS WILL CLOSE THE DROPDOWN, WHEN USER CLICK ANYWHERE IN THE PAGE
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
