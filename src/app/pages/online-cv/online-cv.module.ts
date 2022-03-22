import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineCvRoutingModule } from './online-cv-routing.module';
import { OnlineCvComponent } from './online-cv.component';
import { SharedMaterialModule } from 'src/app/sharedModules/shared-material/shared-material.module';

@NgModule({
  declarations: [OnlineCvComponent],
  imports: [CommonModule, OnlineCvRoutingModule, SharedMaterialModule],
})
export class OnlineCvModule {}
