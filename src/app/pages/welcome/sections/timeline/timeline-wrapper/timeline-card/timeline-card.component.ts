import { Component, Input, OnInit } from '@angular/core';
import {
  timelineCardConfig,
  timelineSectionConfig,
} from '../timeline-wrapper.component';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css'],
})
export class TimelineCardComponent implements OnInit {
  @Input() config!: timelineCardConfig;

  constructor() {}

  ngOnInit(): void {}
}
