import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnChanges {

  @Input() availabilityDescription: string = "";
  availabilityDict: any = {
    "Available": "green",
    "Occupied": "orange",
    "Missing": "red"
  }
  avColor: string = "green";

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.avColor = this.availabilityDict[this.availabilityDescription]
  }

}
