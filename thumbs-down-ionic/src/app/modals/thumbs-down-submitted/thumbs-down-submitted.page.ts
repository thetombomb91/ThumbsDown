import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-thumbs-down-submitted',
  templateUrl: './thumbs-down-submitted.page.html',
  styleUrls: ['./thumbs-down-submitted.page.scss'],
})
export class ThumbsDownSubmittedPage implements OnInit {

  constructor(public modalController: ModalController) {

  }
  ngOnInit() {
  }
  
  closeModal() {
    this.modalController.dismiss();
  }

}
