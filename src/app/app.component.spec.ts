import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { ContactList } from 'src/app/contact-dashboard/model/contact-list';
import { ContactDashboardService } from 'src/app/contact-dashboard/services/contact-dashboard.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const contactDashboardService = jasmine.createSpyObj(
    'contactDashboardService',
    [
      'getContactist',
    ],
    { constactList$: new BehaviorSubject<ContactList[]>([]) }
  );
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{
        provide: ContactDashboardService,
        useValue: contactDashboardService,
      }]
    }).compileComponents();
    contactDashboardService.getContactist.and.returnValue(of([]));
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should check api error', async () => {
    spyOn(contactDashboardService.constactList$, 'next');
    contactDashboardService.getContactist.and.returnValue(throwError(new Error()));
    await component.getDataList();
    expect(contactDashboardService.constactList$.next).toHaveBeenCalled();
  });

});
