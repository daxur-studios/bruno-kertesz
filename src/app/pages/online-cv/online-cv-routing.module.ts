import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineCvComponent } from './online-cv.component';

const routes: Routes = [{ path: '', component: OnlineCvComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineCvRoutingModule {}
