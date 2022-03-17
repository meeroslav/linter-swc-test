// import { calendarData } from '../../../../libs/calendar-data';
import { calendarData } from '@linter-test/calendar-data';
import { Component } from '@angular/core';

@Component({
  selector: 'linter-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'linter-test' + calendarData();
}
