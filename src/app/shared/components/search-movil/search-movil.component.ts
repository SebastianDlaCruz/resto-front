import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CustomInputConfig, CustomInputType } from '../custom-input';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-search-movil',
  imports: [CustomInputComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './search-movil.component.html',
  styleUrl: './search-movil.component.css'
})
export class SearchMovilComponent {


  isActive = input.required<boolean>();

  form = new FormGroup({
    search: new FormControl('')
  });

  config: CustomInputConfig = {
    label: '',
    placeholder: 'Buscar',
    type: CustomInputType.TEXT,
    formControlName: 'search',
    control: this.form.get('search') as FormControl,
    ref: 'search'
  };


}
