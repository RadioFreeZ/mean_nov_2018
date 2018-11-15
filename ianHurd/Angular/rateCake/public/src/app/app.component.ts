import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cakes: Object[];
  newCake: any;
  newRating: any;
  selectedCake: any;
  title = 'public';
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    console.log("pre error?");
    this.cakes = [];
    this.newCake = { baker: "", img: "" };
    this.newRating = { star: 0, comment: "", cakeId: "" };
    this.selectedCake = {};
    this.getCakes();
    console.log("post error?");
  }
  getCakes(){
    console.log("here")
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got our cakes!", data);
      console.log(data['data']);
      this.cakes = data['data'];
      console.log(this.cakes);
    });

  }
  bakeCake(){
    console.log("I submitted!");
    console.log(this.newCake);
    let observable = this._httpService.bakeCake(this.newCake);
    observable.subscribe(data => {
      console.log("AAAAAAAH", data);
      console.log("Im back");
      this.newCake = { baker: "", img: "" }
    });
    this.getCakes();
  }
  rateCake(cake){
    console.log("I submitted!");
    console.log(this.newRating);
    this.newRating ={star: cake.star, comment: cake.comment, cakeId: cake._id};
    console.log(this.newRating);
    let observable = this._httpService.rateCake(this.newRating);
    observable.subscribe(data => {
      console.log("AAAAAAAH", data);
      console.log("Im back");
      this.newRating = { star: 0, comment: "", cakeId: ""}
    });
    this.getCakes();
  }
  cakeToShow(cake){
    this.selectedCake = cake;
    console.log(this.selectedCake.ratings);
    var sum = 0;
    var count = 0;
    for(let rating of this.selectedCake.ratings){
      sum += rating.star;
      count++;
    }
    if(sum > 0){
    var average = sum/count;
    average = Math.round(10*average)/10;
  }
    this.selectedCake.average = average;
  }
}
