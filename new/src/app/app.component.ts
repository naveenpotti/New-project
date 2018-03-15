import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myObj = [{ "name":"John", "age":30, "car":"naveen" },{ "name":"gupta", "age":60, "car":"rolls royce" }];
}

