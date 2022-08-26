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

  darkMode: boolean = false;


  toggleLightDark(event: any): void{

    this.darkMode = !this.darkMode;
    var element = document.body;
    
    console.log(this.darkMode);
    console.log(event);

    if (this.darkMode){  
      element.classList.toggle("dark-mode");
      element.classList.remove("light-mode");
    }
    else {
      element.classList.toggle("light-mode")
      element.classList.remove("dark-mode");
    }
    
  }
}


