import { Component } from '@angular/core';
import { EventListComponent } from './events/events-list.component';

@Component({
  selector: 'events-app',
  template: '<event-list></event-list>',
})
export class EventsAppComponent {
  title = 'Events Application';
}
