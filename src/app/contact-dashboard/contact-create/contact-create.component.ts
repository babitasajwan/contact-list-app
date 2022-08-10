import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ContactList } from 'src/app/contact-dashboard/model/contact-list';
import { ContactDashboardService } from 'src/app/contact-dashboard/services/contact-dashboard.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {

  registerForm!: FormGroup;
    id!: string;
    isAddMode!: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private contactDashboardService: ContactDashboardService,
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        
        // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }

        this.registerForm = this.formBuilder.group({
          id: [''],
          firstName: ['', Validators.compose([Validators.required])],
          lastName: ['', Validators.compose([Validators.required])],
          phone: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')])],
        });

        if (!this.isAddMode) {
            this.contactDashboardService.constactList$.subscribe(x => {
                    let data = x.filter((d) => d.id === +this.id)[0];
                    this.registerForm.patchValue(data);
                });
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createContact();
        } else {
            this.updateContact();
        }
    }

    private createContact() {
        const currentValue = this.contactDashboardService.constactList$.value;
        this.registerForm.controls.id.setValue(currentValue.length + 1);
        const updatedValue = [...currentValue, this.registerForm.value];
        this.contactDashboardService.constactList$.next(updatedValue);
        this.loading = false;
        this.router.navigate(['../'], { relativeTo: this.route })
    }

    private updateContact() {
        const currentValue = this.contactDashboardService.constactList$.value;
        let updateItem = currentValue.find((data) => data.id === +this.id) || {} as ContactList;
        let index = currentValue.indexOf(updateItem);
        currentValue[index] = this.registerForm.value;
        this.contactDashboardService.constactList$.next(currentValue);
        this.loading = false;
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
}


