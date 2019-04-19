import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { 
  	this.getTasks();
  }
  getTasks() {
	let all_tasks = this._http.get('/');
	all_tasks.subscribe(task => console.log ('Got our data!', task));
	}
}
