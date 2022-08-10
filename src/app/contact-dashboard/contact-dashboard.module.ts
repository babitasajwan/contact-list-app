import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDashboardRoutingModule } from './contact-dashboard-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDashboardComponent } from 'src/app/contact-dashboard/contact-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactDashboardComponent,
    ContactListComponent,
    ContactCreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContactDashboardRoutingModule
  ]
})
export class ContactDashboardModule { }
