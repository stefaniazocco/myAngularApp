import { Component, EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-first-component-ever',
  templateUrl: './my-first-component-ever.component.html',
  styleUrls: ['./my-first-component-ever.component.scss']
})
export class MyFirstComponentEverComponent {
  @Input() title: string = '';
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
}
