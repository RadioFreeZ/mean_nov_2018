import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold: number;
  activities: Object[];
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.gold = 0;
    this.activities = [];
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max+1));
  }
  farm(){
    var gain = this.getRandomInt(10) + 10;
    this.gold += gain;
    this.activities.push(["You went to the farm and gained "+gain+" gold!","text-success"]);
  }
  cave(){
    var gain = this.getRandomInt(5) + 5;
    this.gold += gain;
    this.activities.push(["You went to the cave and gained "+gain+" gold!","text-success"]);
  }
  house(){
    var gain = this.getRandomInt(3) + 2;
    this.gold += gain;
    this.activities.push(["You went to the house and gained "+gain+" gold!","text-success"]);
  }
  casino(){
    var gain = this.getRandomInt(100) - 50;
    this.gold += gain;
    if(gain >= 0){
      this.activities.push(["You went to the casino and won "+gain+" gold!","text-success"]);
    }
    else{
      this.activities.push(["You went to the casino and lost "+(gain* -1)+" gold!","text-danger"]);
    }

  }

}
