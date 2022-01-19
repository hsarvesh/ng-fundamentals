import { Component } from "@angular/core";

@Component({
    selector: 'event-list',
    template: `
        <div>
            <h1>Upcoming Angular Evnts </h1>
            <hr>
            <event-thumbnail [event]="event1"></event-thumbnail>
        </div>
    `
})

export class EventListComponent{
        event1 = {
            id: 1,
            name: 'Angular Connect',
            date: '1/18/22',
            time: '8:00 PM',
            location: {
                address: 'sarjapur main road',
                city: 'bangalore',
                country: 'India'
            }
        }
}
