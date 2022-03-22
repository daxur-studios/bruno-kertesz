import { Component, OnInit } from '@angular/core';
import { timelineSectionConfig } from './timeline-wrapper/timeline-wrapper.component';

@Component({
  selector: '[timeline]',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  BrunosTimeline: timelineSectionConfig[] = [
    { label: 'Todate', cards: [{ label: 'Full Stack Web Developement' }] },
    { label: 'Appprenticeship', cards: [{ label: 'Business Administration' }] },
    { label: 'College', cards: [{ label: 'Graphics Design' }] },
    { label: 'School', cards: [{ label: 'Physics' }] },
  ];
}
