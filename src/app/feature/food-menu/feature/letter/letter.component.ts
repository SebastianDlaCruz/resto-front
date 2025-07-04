import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  CategoryHttpService
} from '@core/http';
import { FooterComponent, NavBarComponent } from '@shared/components';
import { CardCategoryComponent } from './components/card-category/card-category.component';


@Component({
  selector: 'app-letter',
  imports: [NavBarComponent, CardCategoryComponent, AsyncPipe, FooterComponent],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {

  private readonly categoryHttp = inject(CategoryHttpService);

  category$ = this.categoryHttp.getAll().pipe(
    takeUntilDestroyed()
  );


}
