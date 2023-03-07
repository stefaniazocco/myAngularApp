import { Component } from '@angular/core';
import { STUDENTS } from './data/students';
import { Student } from './models/student.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';
  students = structuredClone(STUDENTS);
  
  handleBlockOne( text: string): void{
    alert(text);
  }
  handleBlockTwo( text: string): void{
    setTimeout(() => {
      alert(text);
    }, 3000);
  }
  
  addStudent(newStudent: Student):void{
    this.students.push(newStudent)
  }

}
