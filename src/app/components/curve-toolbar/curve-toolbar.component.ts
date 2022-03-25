import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curve-toolbar',
  templateUrl: './curve-toolbar.component.html',
  styleUrls: ['./curve-toolbar.component.css'],
})
export class CurveToolbarComponent implements OnInit {
  @Input() config: {
    toolbarStyle: {
      height: string;
      background: string;
    };
  };
  constructor() {}

  ngOnInit(): void {}
}
