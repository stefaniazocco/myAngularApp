import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Hobby } from 'src/app/models/hobby';
import { Language } from 'src/app/models/language';
import { Student } from 'src/app/models/student';
import { StudentExperience } from 'src/app/models/studentExperience';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  @Input() student: Student | undefined;
  @Input() mode: 'edit' | 'add' = 'edit';
  @Output() addStudent: EventEmitter<Student> = new EventEmitter<Student>();
  @Output() editStudent: EventEmitter<Student> = new EventEmitter<Student>();

  studentViewModel: Student = new Student();
  genderOptions = ["M", "F"];

  ngOnChanges(changes: SimpleChanges):void {
    if(changes['student'].currentValue){
      this.studentViewModel= structuredClone(changes['student'].currentValue);
      this.addHobby();
      this.addLanguage();
      this.addExperience();
    }
  }
  addHobby():void {
    if(this.studentViewModel.hobbies.some(hobby =>!hobby.name)){
      return;
    }
    this.studentViewModel!.hobbies.push({ name: '', icon: '' })
  }
  addLanguage():void {
    if(this.studentViewModel.lingue.some(lang =>!lang.name)){
      return;
    }
    this.studentViewModel!.lingue.push({ name: '', icon: '' })
  }
  addExperience():void {
    if(this.studentViewModel.esperienze.some(esp =>!esp.nome)){
      return;
    }
    this.studentViewModel!.esperienze.push({ nome: '', descrizione: '', inizio: new Date(''), fine: new Date(''), tags: [] })
  }
  addTag(exp: StudentExperience) {
    if(exp.tags.some(tag=>!tag)){
      return;
    }
    exp.tags.push("")
  }
  saveChanges(): void {
    this.studentViewModel = {
      ... this.studentViewModel,
      hobbies: this.studentViewModel!.hobbies.filter(hobby => !!hobby.name),
      lingue: this.studentViewModel!.lingue.filter(language => !!language.name),
      esperienze: this.studentViewModel!.esperienze.filter(exp => !!exp.nome).map(exp=>({
        ...exp,
        tags:exp.tags.filter(tag=> !!tag)
      }))
    } as Student
    if (this.mode === 'add') {
      this.addStudent.emit(this.studentViewModel)
    } else {
      this.editStudent.emit(this.studentViewModel)
    }
  }
  tagsTrackByFn(ind: number) {
    return ind;
  }
}
