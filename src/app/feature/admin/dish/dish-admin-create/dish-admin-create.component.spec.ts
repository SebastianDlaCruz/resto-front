import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishAdminCreateComponent } from './dish-admin-create.component';

describe('DishAdminCreateComponent', () => {
  let component: DishAdminCreateComponent;
  let fixture: ComponentFixture<DishAdminCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishAdminCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
