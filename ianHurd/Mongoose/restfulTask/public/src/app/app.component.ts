import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks: Object[];
  taskOne: Object[];
  title = 'public';
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.tasks = [];
    this.taskOne = [];
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      console.log(data['data']);
      this.tasks = data['data'];
      console.log(this.tasks);
    });
  }
  getTaskById(id){
    let observable = this._httpService.getOne(id);
    observable.subscribe(data => {
      console.log(data);
      this.taskOne.push(data['data']);
    });
  }
}
