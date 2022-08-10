import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ContactDashboardService } from 'src/app/contact-dashboard/services/contact-dashboard.service';

describe('ContactDashboardService', () => {
    let service: ContactDashboardService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpClient, ContactDashboardService]
        });
        httpMock = TestBed.inject(HttpTestingController);
        service = TestBed.inject(ContactDashboardService);
    });

  it('should be created', () => {
    const service: ContactDashboardService = TestBed.inject(ContactDashboardService);
    expect(service).toBeTruthy();
  });

  it('should getContactist call get method', () => {
    const service: ContactDashboardService = TestBed.inject(ContactDashboardService);
    spyOn((service  as any).httpClient, 'get');
    service.getContactist();
    expect((service  as any).httpClient.get).toHaveBeenCalledWith('https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts');
  });

});
