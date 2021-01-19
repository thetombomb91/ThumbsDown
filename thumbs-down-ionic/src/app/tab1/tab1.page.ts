import { Component } from '@angular/core';
import { LicensePlateService } from '../services/license-plate/license-plate.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private licensePlateService: LicensePlateService) {}

  async submitClicked() {
    this.licensePlateService.createNewOrAddToExistingLicensePlate()
      .then(async (data) => {
        console.log("GOOD but now really good")

        console.log(data.status);
        console.log(data.data); // data received by server

        // return await this.openSuccessModal();

      })
      .catch(error => {
        console.log("NOT GOOD")
        console.log(error);
        console.log(error.error); // error message as string
      });;


  }
}
