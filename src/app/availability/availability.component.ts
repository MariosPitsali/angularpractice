import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnChanges {

  
  availabilityDict: any = {
    "Available": "green",
    "Occupied": "orange",
    "Missing": "red"
  };
  avColor: string = "green";
  @Input() availabilityDescription: string = "";
  @Output() availabilityClickEvent: EventEmitter<string> = 
                                    new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.avColor = this.availabilityDict[this.availabilityDescription]
  }

  //this corresponds to the (click) event on this component's view
  onClick(): void{
      this.availabilityClickEvent.emit(`${this.availabilityDescription} was clicked`)
   }
}
