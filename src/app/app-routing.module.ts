import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  {
    path: 'contacts',
    loadChildren: () => import('./contact-dashboard/contact-dashboard.module').then(m => m.ContactDashboardModule)
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
