import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  pageTitle: string = 'Heroes List';
  heroes: any[] = [
    {
      "hero_name": 'Windstorm',
      "code": 1,
      "age": 22,
      "gender": "Male",
      "real_name": "Johnathan with a 'h' ",
      "image_path": "https://i.pinimg.com/474x/30/a2/af/30a2af2e10d93de9c0bb6be811186faf--middle-earth-art-work.jpg",
      "hero_image_width" : [100,60]
    },

    {
      "hero_name": 'Olyphant',
      "code": 2,
      "age": 32,
      "gender": "Female",
      "real_name": "Marrie",
      "image_path": "https://i.pinimg.com/474x/30/a2/af/30a2af2e10d93de9c0bb6be811186faf--middle-earth-art-work.jpg",
      "hero_image_width" : [100,60]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
