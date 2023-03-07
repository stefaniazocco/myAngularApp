import { Component, Input, OnInit } from '@angular/core';
import { Hobby } from 'src/app/models/hobby';
import { Language } from 'src/app/models/language';
import { Student } from 'src/app/models/student.type';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @Input() student: Student | undefined;
  genderOptions= ["M", "F"];
  nome= "";
  cognome= "";
  eta= 19;
  citta = "";
  genere= "";
  hobbies= new Array<Hobby>();
  lingue = new Array<Language>();
  animali= false;

  ngOnInit(){
    if(!this.student){
      this.addHobby();
      this.addLanguage();
    }
  }
  addHobby(){
    this.hobbies.push({name:'', icon: ''})
  }
  addLanguage(){
    this.lingue.push({name:'', icon: ''})
  }
  saveChanges(): void{
    
  }
}
