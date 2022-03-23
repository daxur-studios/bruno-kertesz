import { Component, Input, OnInit } from '@angular/core';

export type timelineCard = {
  title: string;
  body: string | string[];
  formattedTime: string;
  photoURL: string;
  matIcon?: string;
};

@Component({
  selector: '[timelineCard]',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css'],
})
export class TimelineCardComponent implements OnInit {
  @Input() data: timelineCard;

  @Input() cardClass: {
    isLast: boolean;
    isNotLast: boolean;
    isFirst: boolean;
    isNotFirst: boolean;
  };

  hasArrayBody = false;

  constructor() {}

  ngOnInit(): void {
    if (this.data.body instanceof Array) {
      this.hasArrayBody = true;
    }
  }
}
