import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
  }
  getTasks(){
    return this._http.get('/tasks');
   }
  getOne(id){
    console.log(id);
    return this._http.get('/tasks/'+id)
  }
  createTask(newTask){
    console.log("Here i am!");
    console.log(newTask);
    return this._http.post('/task', newTask);
    console.log("Still here?");
  }
  destroyTask(id){
    return this._http.delete('/delete/'+id)
  }
  changeTask(updateTask){
    return this._http.put('/update/'+updateTask._id, updateTask);
  }
}
