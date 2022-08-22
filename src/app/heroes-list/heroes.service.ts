import { Injectable } from "@angular/core";
import { IHero } from "./heroes";

@Injectable({
    providedIn: "root"
})
export class HeroesService {

    getHeroes(): IHero[]{
        return [
                {
                  "hero_name": 'Windstorm',
                  "code": 'ftr-1-110',
                  "age": 22,
                  "gender": "Male",
                  "real_name": "Johnathan with a 'h' ",
                  "image_path": "https://i.pinimg.com/474x/30/a2/af/30a2af2e10d93de9c0bb6be811186faf--middle-earth-art-work.jpg",
                  "hero_image_width" : [100,60],
                  'hero_availability': 'Occupied'
                },
            
                {
                  "hero_name": 'Olyphant',
                  "code": 'hhn-9-90',
                  "age": 32,
                  "gender": "Female",
                  "real_name": "Marrie",
                  "image_path": "https://i.pinimg.com/474x/30/a2/af/30a2af2e10d93de9c0bb6be811186faf--middle-earth-art-work.jpg",
                  "hero_image_width" : [100,60],
                  'hero_availability': 'Missing'
                },
            
                {
                  "hero_name": 'Generic',
                  "code": 'hoz-9-00',
                  "age": 32,
                  "gender": "Female",
                  "real_name": "Marrie",
                  "image_path": "https://i.pinimg.com/474x/30/a2/af/30a2af2e10d93de9c0bb6be811186faf--middle-earth-art-work.jpg",
                  "hero_image_width" : [100,60],
                  'hero_availability': 'Available'
                },
            
                {
                  "hero_name": 'Strombreather',
                  "code": 'hhn-9-90',
                  "age": 42,
                  "gender": "Male",
                  "real_name": "Horace",
                  "image_path": "https://i.pinimg.com/474x/30/a2/af/30a2af2e10d93de9c0bb6be811186faf--middle-earth-art-work.jpg",
                  "hero_image_width" : [100,60],
                  'hero_availability': 'Available'
                }
        ]
    } 

}