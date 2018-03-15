import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchText:string;
  searchName(){
    this.myObj=this.copyObj.filter((user)=>{
      this.searchText=(this.searchText).replace(/\s/g,'');
      if(this.searchText!='')
        return (user.name.indexOf(this.searchText)!=-1)||((user.age).toString().indexOf(this.searchText)!=-1)||
        user.car.indexOf(this.searchText)!=-1
        return user.name;
    })
  }
  myObj = [{ "name":"John", "age":30, "car":"naveen" },{ "name":"gupta", "age":60, "car":"rolls royce" }];
  copyObj= this.myObj;
}

