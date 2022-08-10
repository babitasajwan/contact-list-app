import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ContactList } from 'src/app/contact-dashboard/model/contact-list';
import { ContactDashboardService } from 'src/app/contact-dashboard/services/contact-dashboard.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(public contactDashboardService: ContactDashboardService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList() {
    this.contactDashboardService.constactList$.asObservable();
  }

  deleteContact(id: number) {
    console.log(this.contactDashboardService.constactList$.value.filter((x) => x.id !== id));
    const contact = this.contactDashboardService.constactList$.value.filter((x) => x.id !== id);
    if (!contact.length) return;
    this.contactDashboardService.constactList$.next(contact);  
  }
}
