import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThumbsDownSubmittedPage } from '../modals/thumbs-down-submitted/thumbs-down-submitted.page';
import { LicensePlateService } from '../services/license-plate/license-plate.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private licensePlateService: LicensePlateService, public modalController: ModalController) {}

  async submitClicked() {
    this.licensePlateService.createNewOrAddToExistingLicensePlate();
    // service should return promise and then() call should be here?

    const modal = await this.modalController.create({
      component: ThumbsDownSubmittedPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();

  }
}
