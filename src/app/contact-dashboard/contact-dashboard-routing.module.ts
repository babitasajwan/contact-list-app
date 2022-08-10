import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCreateComponent } from 'src/app/contact-dashboard/contact-create/contact-create.component';
import { ContactDashboardComponent } from 'src/app/contact-dashboard/contact-dashboard.component';
import { ContactListComponent } from 'src/app/contact-dashboard/contact-list/contact-list.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'contact-dashboard', pathMatch: 'full' },
//   {
//     path: 'contact-dashboard',
//     children: [
//       {
//         path: '',
//         component: ContactDashboardComponent
//       },
//     ],
//   },
//   {
//     path: 'contact-create',
//     component: ContactCreateComponent
//   },
// ];

const routes: Routes = [
  {
      path: '', component: ContactDashboardComponent,
      children: [
          { path: '', component: ContactListComponent },
          { path: 'add', component: ContactCreateComponent },
          { path: 'edit/:id', component: ContactCreateComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactDashboardRoutingModule { }
