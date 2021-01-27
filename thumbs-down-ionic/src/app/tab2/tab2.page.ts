import { Component } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ThumbsDownSubmittedPage } from '../modals/thumbs-down-submitted/thumbs-down-submitted.page';
import { LicensePlate } from '../models/licensePlate';
import { LicensePlateService } from '../services/license-plate/license-plate.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  inputLicensePlate: string;
  inputState: string;
  submitInProgress: boolean;

  constructor(private licensePlateService: LicensePlateService,
    public modalController: ModalController,
    public loadingController: LoadingController) { }

  async submitClicked() {
    // TODO: Find a better way to create this object. Why was using LicensePlate model in ngModel not working?
    let licensePlate = new LicensePlate;
    licensePlate.licensePlate = this.inputLicensePlate;
    licensePlate.state = this.inputState;

    this.submitInProgress = true;

    await this.showSubmitInProgressSpinner();

    this.licensePlateService.createNewOrAddToExistingLicensePlate(licensePlate)
      .then(async (data) => {
        this.submitInProgress = false;
        await this.loadingController.dismiss();
        return await this.openSuccessModal(JSON.parse(data.data) as LicensePlate);

      })
      .catch(async error => {
        this.submitInProgress = false;
        await this.loadingController.dismiss();

        console.log("NOT GOOD")
        console.log(error.error); // error message as string
      });
  }

  private async showSubmitInProgressSpinner() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Good stuff is happening...hopefully',
      duration: 10000
    });
    await loading.present();
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
