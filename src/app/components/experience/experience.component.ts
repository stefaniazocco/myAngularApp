import { Component, Input } from '@angular/core';
import { StudentExperience } from 'src/app/models/studentExperience';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() exper: StudentExperience | undefined;
}
