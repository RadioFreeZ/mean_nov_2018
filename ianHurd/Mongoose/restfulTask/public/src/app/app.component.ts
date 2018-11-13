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
  newTask: any;
  updateTask: any;
  title = 'public';
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.tasks = [];
    this.taskOne = [];
    this.newTask = { title: "", description: "" , completed: false}
    this.updateTask = { title: "", description: "" , completed: false}
    this.getTasksFromService();
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
  onSubmit() {
    console.log("I submitted!");
    console.log(this.newTask);
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log("AAAAAAAH", data);
      console.log("Im back");
      this.newTask = { title: "", description: "" }
    });
    this.getTasksFromService();

  }
  deleteTask(id) {
    let observable = this._httpService.destroyTask(id);
    observable.subscribe(data => {
      console.log("deleted task");
      this.getTasksFromService();
    });
  }
  displayForm(id) {
    let observable = this._httpService.getOne(id);
    observable.subscribe(data => {
      console.log(data);
      this.updateTask = data['data']
      console.log("This is update task!",this.updateTask)
  });
}
  onUpdate() {
    let observable = this._httpService.changeTask(this.updateTask);
    observable.subscribe(data => {
      this.updateTask = { title: "", description: "" }
    });
    this.getTasksFromService();

  }
}
