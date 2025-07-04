import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishAdminListComponent } from './dish-admin-list.component';

describe('DishAdminListComponent', () => {
  let component: DishAdminListComponent;
  let fixture: ComponentFixture<DishAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishAdminListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
