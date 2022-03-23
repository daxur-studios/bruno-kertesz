import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineCvRoutingModule } from './online-cv-routing.module';
import { OnlineCvComponent } from './online-cv.component';
import { SharedMaterialModule } from 'src/app/sharedModules/shared-material/shared-material.module';
import { SharedComponentsModule } from 'src/app/sharedModules/shared-components/shared-components.module';

@NgModule({
  declarations: [OnlineCvComponent],
  imports: [
    CommonModule,
    OnlineCvRoutingModule,
    SharedMaterialModule,
    SharedComponentsModule,
  ],
})
export class OnlineCvModule {}
