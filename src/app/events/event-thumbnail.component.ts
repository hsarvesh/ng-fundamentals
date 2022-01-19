import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="container">
        <h2> {{ event.name }} </h2>
        <div>date: {{event.date}}</div>
        <div>time: {{event.time}}</div><hr>
        <div>
            <span>Location: {{event.location.address}}</span><hr>
            <span>City: {{event.location.city}}</span><hr>
            <span>Country: {{event.location.country}}</span><hr>
        </div>
    `
})

export class EventThumbnailComponent {
    @Input() event:any
}