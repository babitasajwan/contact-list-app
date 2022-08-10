import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ContactList } from 'src/app/contact-dashboard/model/contact-list';
import { ContactDashboardService } from 'src/app/contact-dashboard/services/contact-dashboard.service';

@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.scss']
})
export class ContactDashboardComponent {
}
