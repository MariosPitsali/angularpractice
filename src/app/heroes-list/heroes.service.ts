import { Injectable } from "@angular/core";
import { IHero } from "./heroes";
import { HttpClient, HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { Observable,tap, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class HeroesService {

  private requestUrl = "assets/heroes.json"

  constructor(private http: HttpClient){
    
  }

  getHeroes(): Observable<IHero[]>{
      return this.http.get<IHero[]>(this.requestUrl).pipe(
        tap(data=>console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
      )
  }
    
  private handleError(err: HttpErrorResponse) {

    let ErrorMessage = '';
    if (err.error instanceof ErrorEvent){

      ErrorMessage = `An error occured: ${err.error.message}`
    } else {
      ErrorMessage = `Server  returned code: ${err.status}, error message is ${err.message}`
    }

    console.error(ErrorMessage)
    return throwError(()=>ErrorMessage);
  }

}