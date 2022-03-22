import { Component, Input, OnInit } from '@angular/core';

export type timelineSectionConfig = {
  label: string;
  cards: timelineCardConfig[];
};

export type timelineCardConfig = {
  label: string;
};

@Component({
  selector: 'app-timeline-wrapper',
  templateUrl: './timeline-wrapper.component.html',
  styleUrls: ['./timeline-wrapper.component.css'],
})
export class TimelineWrapperComponent implements OnInit {
  @Input() config!: timelineSectionConfig;

  constructor() {}

  ngOnInit(): void {}
}
