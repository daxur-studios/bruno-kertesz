import { Component, HostBinding, OnInit } from '@angular/core';
import { BrunoService } from 'src/app/services/bruno.service';

@Component({
  selector: '[intro]',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  host: {
    class: 'page-flex sectionBackground',
  },
})
export class IntroComponent implements OnInit {
  constructor(public bruno: BrunoService) {}

  ngOnInit(): void {}
}
