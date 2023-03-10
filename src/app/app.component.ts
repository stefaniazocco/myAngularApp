import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { STUDENTS } from './data/students';
import { Hobby } from './models/hobby';
import { Language } from './models/language';
import { IStudent, Student } from './models/student';
import { StudentHttpService } from './providers/services/student-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';
  students = structuredClone(STUDENTS);
  selectedStudent: Student | undefined;
  mode: 'edit' | 'add' = 'edit'

  studentsFromSerevice!: Array<Student>;
  studentsSubscription!: Subscription;
  students$!: Observable<Array<Student>>;

  constructor(private readonly studentHttpService: StudentHttpService) {
    // this.students$!= this.studentHttpService.getStudents(); //poi nell'html si scrive  students$ | async (per più observable meglio fare una util come l'unsubscribe)
    // this.studentHttpService.getStudents();
    this.studentHttpService.getStudents()
      .subscribe({
        next: (students: Array<Student>) => this.studentsFromSerevice = students
      })
  }
  // ngOnDestroy(): void {
  //   if (this.studentsSubscription) {
  //     this.studentsSubscription.unsubscribe()
  //   }
  // }

  addStudent(): void {
    this.selectedStudent = new Student();
    this.mode = 'add';
  }

  handleAddStudent(newStudent: Student): void {
    this.students.unshift(newStudent);
    this.selectedStudent = undefined;
  }
  editStudent(student: Student): void {
    this.selectedStudent = student;
    this.mode = 'edit';
  }
  handleEditStudent(student: Student): void {
    const studentIndex: number = this.students.findIndex((st: Student): boolean => st.nome === student.nome && st.cognome === student.cognome)
    if (studentIndex >= 0) {
      this.students.splice(studentIndex, 1, student);
    }
    this.selectedStudent = undefined;
  }

}
