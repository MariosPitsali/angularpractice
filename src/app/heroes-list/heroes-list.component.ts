import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { IHero } from './heroes';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  providers: [HeroesService],
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  pageTitle: string = 'Heroes List';
  showImage: boolean = false;
  errorMessage: string = '';

  private _listFilter: string = '';

  //get and set
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    console.log(value);
    this.filteredHeroes = this.performFilter(value);
  }
  //array to store filtered products according to input value in html
  filteredHeroes: IHero[] = [];

  heroes: IHero[] = [
  ]

  /* methods after class attributes */

  toggleImage(): void {
    /* change showImage value from True to False AND VICE VERSA */

    this.showImage = !this.showImage  

  }

  performFilter(filterBy: string): IHero[]{
    filterBy = filterBy.toLocaleLowerCase();

    return this.heroes.filter(
      (hero: IHero) => 
      hero.hero_name.toLocaleLowerCase().includes(filterBy)
      );
  }

  constructor(private heroesService: HeroesService) { 
    
  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(
      {
        next: heroes => {
          this.heroes = heroes;
          this.filteredHeroes = this.heroes;
        },
        error: err => this.errorMessage = err
      }
    );
    
  }

  onAvailabilityClicked(message: string): void{
    this.pageTitle = "Product list " + message;
  }

}
