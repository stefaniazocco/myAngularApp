import { Component, Input } from '@angular/core';
import { Student } from 'src/app/models/student.type';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  @Input() student: Student | undefined;
}
