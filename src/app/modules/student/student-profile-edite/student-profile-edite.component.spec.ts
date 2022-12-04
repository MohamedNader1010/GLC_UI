import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileEditeComponent } from './student-profile-edite.component';

describe('StudentProfileEditeComponent', () => {
  let component: StudentProfileEditeComponent;
  let fixture: ComponentFixture<StudentProfileEditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileEditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfileEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
