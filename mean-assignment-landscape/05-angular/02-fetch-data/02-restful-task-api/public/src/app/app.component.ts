import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks';
  header = 'Tasks listed below';
  task = this._httpService;
  	constructor(private _httpService: HttpService) {
  	console.log(this._httpService);
  	}
}