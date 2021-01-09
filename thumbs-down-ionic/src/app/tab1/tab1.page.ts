import { Component } from '@angular/core';
import { LicensePlateService } from '../services/license-plate/license-plate.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private licensePlateService: LicensePlateService) {}

  submitClicked() {
    this.licensePlateService.someFunction();
  }
}
