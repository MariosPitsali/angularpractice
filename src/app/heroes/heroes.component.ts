import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm', 
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c0f697e9d5abb8c65cd6857/1599032187414-92U41D7HVIIFVCHHBDA3/Artboard+2.png?format=1000w'
  };

  constructor() { }

  ngOnInit(): void {
  }

  

}
