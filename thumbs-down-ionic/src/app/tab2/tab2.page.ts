import { Component } from '@angular/core';
import { LicensePlateService } from '../services/license-plate/license-plate.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private licensePlateService: LicensePlateService) {}

  submitClicked() {
    this.licensePlateService.someFunction();
  }
}
