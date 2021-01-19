import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LicensePlate } from 'src/app/models/licensePlate';

@Component({
  selector: 'app-thumbs-down-submitted',
  templateUrl: './thumbs-down-submitted.page.html',
  styleUrls: ['./thumbs-down-submitted.page.scss'],
})
export class ThumbsDownSubmittedPage implements OnInit {

  @Input() licensePlateData: LicensePlate;
  secondData: LicensePlate;

  constructor(public modalController: ModalController) {

  }
  ngOnInit() {
    console.log("I got your data", this.licensePlateData);
    this.secondData = this.licensePlateData;
  }
  
  closeModal() {
    this.modalController.dismiss();
  }

}
