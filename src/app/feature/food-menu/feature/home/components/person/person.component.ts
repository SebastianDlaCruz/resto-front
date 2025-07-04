import { Component, input } from '@angular/core';
import { Person } from './model/person.model';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  person = input.required<Person>();
}
