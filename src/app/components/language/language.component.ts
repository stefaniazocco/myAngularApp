import { Component, Input } from '@angular/core';
import { Language } from 'src/app/models/language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  @Input() lang: Language | undefined;
}
