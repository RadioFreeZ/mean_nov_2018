import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {  }
  getCakes(){
    console.log("Now here")
    return this._http.get('/cakes');
   }
  getOneCake(id){
    console.log(id);
    return this._http.get('/tasks/'+id)
  }
  bakeCake(newCake){
    console.log("Here i am!");
    console.log(newCake);
    return this._http.post('/bake', newCake);
    console.log("Still here?");
  }
  rateCake(createRating){
    return this._http.post('/rate', createRating);
  }
}
