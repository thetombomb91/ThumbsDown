import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThumbsDownSubmittedPageRoutingModule } from './thumbs-down-submitted-routing.module';

import { ThumbsDownSubmittedPage } from './thumbs-down-submitted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThumbsDownSubmittedPageRoutingModule
  ],
  declarations: [ThumbsDownSubmittedPage]
})
export class ThumbsDownSubmittedPageModule {}
