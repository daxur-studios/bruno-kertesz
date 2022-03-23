import { Injectable } from '@angular/core';
import { differenceInCalendarYears, differenceInYears, format } from 'date-fns';

type nationality = 'British' | 'Hungarian';

@Injectable({
  providedIn: 'root',
})
export class BrunoService {
  dateOfBirth = new Date('1998-04-30');
  dateOfBirthFormatted: string;
  age: number;

  nationality: nationality = 'Hungarian';

  address = 'Eastbourne, UK';

  constructor() {
    this.age = differenceInYears(new Date(), this.dateOfBirth);
    this.dateOfBirthFormatted = format(this.dateOfBirth, 'PPP');
  }
}
