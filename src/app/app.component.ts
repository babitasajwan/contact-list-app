import { Component } from '@angular/core';
import { ContactDashboardService } from 'src/app/contact-dashboard/services/contact-dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contact-list-app';

  constructor(public contactDashboardService: ContactDashboardService) {
    this.getDataList();
  }

  getDataList() {
    this.contactDashboardService.getContactist()
    .subscribe((data: any) => {
      this.contactDashboardService.constactList$.next(data);
    }, (error) => {
      this.contactDashboardService.constactList$.next([]);

    });
  }
}
