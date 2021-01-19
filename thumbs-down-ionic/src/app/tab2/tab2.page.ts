import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThumbsDownSubmittedPage } from '../modals/thumbs-down-submitted/thumbs-down-submitted.page';
import { LicensePlate } from '../models/licensePlate';
import { LicensePlateService } from '../services/license-plate/license-plate.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private licensePlateService: LicensePlateService, public modalController: ModalController) { }

  async submitClicked() {
    this.licensePlateService.createNewOrAddToExistingLicensePlate()
      .then(async (data) => {
        console.log("GOOD but now really good")

        console.log(data.status);
        console.log(data.data); // data received by server

        return await this.openSuccessModal(JSON.parse(data.data) as LicensePlate);

      })
      .catch(error => {
        console.log("NOT GOOD")
        console.log(error);
        console.log(error.error); // error message as string
      });;


  }

  private async openSuccessModal(licensePlateData) {
    const modal = await this.modalController.create({
      component: ThumbsDownSubmittedPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'licensePlateData': licensePlateData
      }
    });
    return await modal.present();
  }
}
