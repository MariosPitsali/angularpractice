import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHero } from '../heroes-list/heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  pageTitle: string = "Hero Details";
  hero: IHero | undefined;

  constructor(private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.hero = {
      "hero_name": "Generic",
      "code": "xyz-9-00",
      "age": 32,
      "gender": "Female",
      "real_name": "John",
      "image_path": "https://i.pinimg.com/474x/30/a2/af/30a2af2e10d93de9c0bb6be811186faf--middle-earth-art-work.jpg",
      "hero_image_width" : [100,60],
      "hero_availability": "Available"
    }
  }

  onBack(): void{
    this.router.navigate(['/heroes'])
  }

}
