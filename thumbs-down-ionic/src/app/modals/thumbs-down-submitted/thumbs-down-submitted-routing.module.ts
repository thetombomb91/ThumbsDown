import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThumbsDownSubmittedPage } from './thumbs-down-submitted.page';

const routes: Routes = [
  {
    path: '',
    component: ThumbsDownSubmittedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThumbsDownSubmittedPageRoutingModule {}
