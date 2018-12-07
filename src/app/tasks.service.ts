import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { 

  }

  public getTasks() : Observable<any> {
    return this.http.get('http://n2i.stephanenativel.fr/n2i/todo');
  }

  public addTask(task : string) {
    console.log(task);
    let headersHttp = new HttpHeaders ({
      "Content-Type" : "application/json"
    });

    let options = {
      headers : headersHttp
    };
    return this.http.post('http://n2i.stephanenativel.fr/n2i/todo', JSON.stringify({"label" : task}), options);
  }

  public updateTask(task : any) {
    let headersHttp = new HttpHeaders ({
      "Content-Type" : "application/json"
    });

    let options = {
      headers : headersHttp
    };
    console.log(JSON.stringify(task));
    return this.http.put('http://n2i.stephanenativel.fr/n2i/todo', JSON.stringify(task), options );
  }
  
}
