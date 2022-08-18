import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnChanges,OnInit {

  
  availabilityDict: any = {
    "Available": "green",
    "Occupied": "orange",
    "Missing": "red"
  };
  avColor: string = "green";
  @Input() availabilityDescription: string = "";

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.avColor = this.availabilityDict[this.availabilityDescription]
  }
   onClick(): void{
      console.log(`Availability Clicked!`)
   }
}
