import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovilComponent } from './search-movil.component';

describe('SearchMovilComponent', () => {
  let component: SearchMovilComponent;
  let fixture: ComponentFixture<SearchMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchMovilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
