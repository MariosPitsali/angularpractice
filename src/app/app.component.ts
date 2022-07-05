import { Component } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version = 'Angular version: ' + VERSION.full ;
  title = 'Tour of Heroes Application';
  targetLink = "https://www.google.com"
}


