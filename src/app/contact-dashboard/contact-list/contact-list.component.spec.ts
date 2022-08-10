import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { ContactList } from 'src/app/contact-dashboard/model/contact-list';
import { ContactDashboardService } from 'src/app/contact-dashboard/services/contact-dashboard.service';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
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
      imports: [RouterTestingModule],
      declarations: [ ContactListComponent ],
      providers: [{
        provide: ContactDashboardService,
        useValue: contactDashboardService,
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should deleteContact delete contact if match', () => {
    spyOn(contactDashboardService.constactList$, 'next');
    component.deleteContact(1);
    expect(contactDashboardService.constactList$.next).not.toHaveBeenCalled();

  });

  it('should deleteContact delete contact if id does not match', () => {
    spyOn(contactDashboardService.constactList$, 'next');
    component.deleteContact(100);
    expect(contactDashboardService.constactList$.next).toHaveBeenCalled();

  });
});
