import { Component } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {
  name=""

  searchFunction=()=>
  {
    let data:any={
      "name":this.name
    }
    console.log(data)
  }

}
