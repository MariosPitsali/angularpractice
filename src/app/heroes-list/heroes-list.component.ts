import { Component, OnInit } from '@angular/core';
import { IHero } from './heroes';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  pageTitle: string = 'Heroes List';
  showImage: boolean = false;

  private _listFilter: string = '';
  //get and set
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    console.log(value);
  }

  heroes: IHero[] = [
    {
      "hero_name": 'Windstorm',
      "code": 'ftr-1-110',
      "age": 22,
      "gender": "Male",
      "real_name": "Johnathan with a 'h' ",
      "image_path": "https://i.pinimg.com/474x/30/a2/af/30a2af2e10d93de9c0bb6be811186faf--middle-earth-art-work.jpg",
      "hero_image_width" : [100,60]
    },

    {
      "hero_name": 'Olyphant',
      "code": 'hhn-9-90',
      "age": 32,
      "gender": "Female",
      "real_name": "Marrie",
      "image_path": "https://i.pinimg.com/474x/30/a2/af/30a2af2e10d93de9c0bb6be811186faf--middle-earth-art-work.jpg",
      "hero_image_width" : [100,60]
    }
  ]

  /* methods after class attributes */

  toggleImage(): void {
    /* change showImage value from True to False AND VICE VERSA */

    this.showImage = !this.showImage  

  }

  constructor() { }

  ngOnInit(): void {
    this._listFilter = 'cart';
  }

}
