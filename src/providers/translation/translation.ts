import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the TranslationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TranslationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TranslationProvider Provider');
  }

  public getTranslationResponse(input:string):Observable<any>{
    // REST API endpoint URL
    let url = 'https://api.mymemory.translated.net/get?q='+input+'&langpair=en|it'; 
    // make HTTP GET request
    let response = this.http.get(url);

    return response;    
  }

}
