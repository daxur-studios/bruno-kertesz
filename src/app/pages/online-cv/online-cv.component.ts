import { Component, OnInit } from '@angular/core';
import { BrunoService } from 'src/app/services/bruno.service';
import {
  timelineConfig,
  timelineData,
} from 'src/app/sharedModules/shared-components/timeline/timeline.component';

@Component({
  selector: 'app-online-cv',
  templateUrl: './online-cv.component.html',
  styleUrls: ['./online-cv.component.css'],
  host: {
    class: 'page-flex pointsBG',
  },
})
export class OnlineCvComponent implements OnInit {
  constructor(public bruno: BrunoService) {}

  ngOnInit(): void {}
  /**
   * EMPLOYMENT
   */
  employmentTimeline: timelineData = {
    cards: [
      {
        body: [
          'Development of CRM integration with external apps, such as Livechat, Outlook and Google Sheets.',
          'Full Stack Development of inhouse CRM (with Angular, Firebase, Node.js, Google Cloud Platform & Microsoft Azure)',
          'Development of business performance analysis, such as Quote Conversion, Sales Revenue, Google Analytics, and Marketing Email Open Rate tracking. Reported in DataStudio',
          'Development of warehouse responsive PWA for receiving and despatching packages, using a touch screen work phone.',
        ],
        formattedTime: '2018 - To Present',
        photoURL: 'assets/icons/code.svg',
        title: 'Full Stack Development at CD Automation UK Ltd',
        matIcon: 'done',
      },

      {
        title: 'Apprenticeship at CD Automation UK Ltd',
        body: [
          'Level 2 Diploma in Business Administration',
          'Zapier, Integration of web applications used in our Order Processing',
          'Spreadsheet & Email Automation using Javascript in Google Apps Script',
          'Learning Photoshop for Raster Image Editing & Inkscape for Vector Image Editing',
          'Learning Blender for CGI Animation, 360 Product Videos, Wiring Tutorials & How to use phone app tutorial',
        ],
        formattedTime: '2017 - 2018',
        photoURL: 'assets/icons/edu.svg',

        matIcon: 'done',
      },
    ],
    formattedDateLeft: 'Employment History',
    formattedDateRight: '2017 - To Present',
  };
  employmentTimelineConfig: timelineConfig = {
    timelineColor: '#ff834f',
  };

  /**
   * EDUTCATION
   */

  educationTimeline: timelineData = {
    cards: [
      {
        title: 'A Levels, BHASVIC',
        body: [
          'Graphics Design: B',
          'Philosophy: E',
          'Applied Law (QCF): Distinction*',
        ],
        formattedTime: '2015 - 2017',
        photoURL: 'assets/icons/maths.svg',

        matIcon: 'done',
      },
      {
        body: [
          'Physics: A',
          'Business and Communications Systems: B',
          'Business Studies: B',
          'Spanish: B',
          'History: B',
          'English Literature: B',
          'English Language: C',
          'Chemistry: B',
          'Maths: C',
          'Biology: C',
          'ICT: B',
          'Religious Studies: B',
          'OCR Level 2 National First Award in ICT: Merit',
          'Sport: Pass at level 2',
        ],
        formattedTime: '2012 - 2015',
        photoURL: 'assets/icons/english.svg',
        title: 'GCSEs, Seaford Head School',
        matIcon: 'done',
      },
    ],
    formattedDateLeft: 'Education',
    formattedDateRight: '2012 - 2017',
  };
  educationTimelineConfig: timelineConfig = {
    timelineColor: '#009688',
  };
}
