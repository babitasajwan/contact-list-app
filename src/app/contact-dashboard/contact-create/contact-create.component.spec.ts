import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { ContactList } from 'src/app/contact-dashboard/model/contact-list';
import { ContactDashboardService } from 'src/app/contact-dashboard/services/contact-dashboard.service';

import { ContactCreateComponent } from './contact-create.component';

describe('ContactCreateComponent', () => {
  let component: ContactCreateComponent;
  let fixture: ComponentFixture<ContactCreateComponent>;
  const contactDashboardService = jasmine.createSpyObj(
    'contactDashboardService',
    [
      'getContactist',
    ],
    { constactList$: new BehaviorSubject<ContactList[]>([
      {
        id: 1,
        firstName: 'test',
        lastName: 'test',
        phone: '1234'
      }
    ]) }
  );
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [ ContactCreateComponent ],
      providers: [{
        provide: ContactDashboardService,
        useValue: contactDashboardService,
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onSubmit call create contact if isAddMode true', () => {
    component.registerForm.patchValue({
      id: 1,
      firstName: 'test',
      lastName: 'test',
      phone: 10,
    });
    component.onSubmit();
    expect(component.loading).toBeFalsy();
  });

  it('should onSubmit call update contact if isAddMode false', () => {
    component.isAddMode = false;
    component.registerForm.patchValue({
      id: 1,
      firstName: 'test',
      lastName: 'test',
      phone: 10,
    });
    component.onSubmit();
    expect(component.loading).toBeFalsy();
  });

  it('should onSubmit not call create contact if form is invalid', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });
});
