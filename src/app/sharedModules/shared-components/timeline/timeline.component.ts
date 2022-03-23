import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { timelineCard } from './timeline-card/timeline-card.component';

export type timelineData = {
  cards: timelineCard[];
  formattedDateLeft: string;
  formattedDateRight: string;
};

export type timelineConfig = {
  timelineColor?: string;
  avatarSize?: string;
  timelineBorderWidth?: string;
};

@Component({
  selector: 'dax-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  @Input() data: timelineData;

  @Input() config: timelineConfig;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.config) {
      this.setRootVariables(this.config);
    }
  }

  // IMPLEMENT - to be able to set profile size, border with size, and color based on config input
  setRootVariables(config: timelineConfig) {
    //  constructor(private el: ElementRef) {

    for (const key in config) {
      (this.elementRef.nativeElement as HTMLElement).style.setProperty(
        `--${key}`,
        config[key]
      );
    }
  }
}
