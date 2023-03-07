import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() addStudent: EventEmitter<Student> = new EventEmitter<Student>();
  @Output() editStudent: EventEmitter<Student> = new EventEmitter<Student>();

  mode: 'edit' | 'add' = 'add';
  genderOptions = ["M", "F"];


  ngOnInit() {
    if (!this.student) {
      this.student = this.createStudent();
      this.addHobby();
      this.addLanguage();
      this.mode = 'add';
    }
  }
  addHobby() {
    // if(this.student!.hobbies.some(hobby=>!hobby.name)){
    //   return;
    // }
    this.student!.hobbies.push({ name: '', icon: '' })
  }
  addLanguage() {
    this.student!.lingue.push({ name: '', icon: '' })
  }
  saveChanges(): void {
    this.student={
      ... this.student,
      hobbies: this.student!.hobbies.filter(hobby=>!!hobby.name),
      lingue: this.student!.lingue.filter(language=>!!language.name)
    } as Student
    if (this.mode === 'add') {
      this.addStudent.emit(this.student)
    } else {
      this.editStudent.emit(this.student)
    }
  }

  private createStudent(): Student {
    return {
      nome: '',
      cognome: '',
      eta: 19,
      citta: '',
      genere: '',
      hasPets: false,
      lingue: new Array<Language>,
      hobbies: new Array<Hobby>,
    };



  }
}
