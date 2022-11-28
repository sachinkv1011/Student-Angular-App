import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name=""
  rollno=""
  adno=""
  mobileno=""
  college=""
  parentname=""
  parentmobile=""
  username=""
  password=""

  student=()=>
  {
    let data:any={
      "name":this.name,
      "rollno":this.rollno,
      "adno":this.adno,
      "mobileno":this.mobileno,
      "college":this.college,
      "parentname":this.parentname,
      "parentmobile":this.parentmobile,
      "username":this.username,
      "password":this.password

    }
    console.log(data)
  }

}
