import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent {
  locations: string[] = [];
  newLocation: string = '';

  constructor() {}

  addLocation() {
    if (this.newLocation.trim()) {
      this.locations.push(this.newLocation);
      this.newLocation = '';
    }
  }
}
