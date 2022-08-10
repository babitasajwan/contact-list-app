import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContactList } from 'src/app/contact-dashboard/model/contact-list';

@Injectable({
  providedIn: 'root'
})
export class ContactDashboardService {
  constactList$ = new BehaviorSubject<ContactList[]>([]);

  constructor(private httpClient: HttpClient) { }

  getContactist() {
    const dataList = this.httpClient.get('https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts'); 
    return dataList;
  }

}
