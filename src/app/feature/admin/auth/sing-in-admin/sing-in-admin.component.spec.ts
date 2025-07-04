import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInAdminComponent } from './sing-in-admin.component';

describe('SingInAdminComponent', () => {
  let component: SingInAdminComponent;
  let fixture: ComponentFixture<SingInAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingInAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingInAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
