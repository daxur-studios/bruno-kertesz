import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

import { TimelineComponent } from './timeline/timeline.component';
import { TimelineCardComponent } from './timeline/timeline-card/timeline-card.component';

@NgModule({
  declarations: [TimelineComponent, TimelineCardComponent],
  exports: [TimelineComponent],
  imports: [CommonModule, SharedMaterialModule],
})
export class SharedComponentsModule {}
