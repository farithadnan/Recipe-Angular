import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;

  // Emiting event for navigation
  @Output() featureSelected = new EventEmitter<string>();

  // Navigation  for activating compartment is based on selection in the nav bar
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
