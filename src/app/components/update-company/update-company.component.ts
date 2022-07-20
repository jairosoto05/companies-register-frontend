import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { ICompany } from '../company';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  constructor(private formBulder: FormBuilder,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }

  public companyForm: FormGroup = this.formBulder.group({
    rnc: new FormControl({ value: '', disabled: true }),
    name: new FormControl(''),
    tradeName: new FormControl(''),
    category: new FormControl(''),
    paymentScheme: new FormControl(''),
    state: new FormControl(''),
    economicActivity: new FormControl(''),
    localManagement: new FormControl('')
  });

  ngOnInit(): void {
    let rnc = this.route.snapshot.params['rnc'];
    this.companyService.getCompany(rnc).subscribe(
      (data: ICompany) => {
        this.companyForm.patchValue({
          rnc: data.rnc,
          name: data.name,
          tradeName: data.tradeName,
          category: data.category,
          paymentScheme: data.paymentScheme,
          state: data.state,
          economicActivity: data.economicActivity,
          localManagement: data.localManagement
        });
      }
    );
  }

  SaveData() {
    let company: ICompany = {
      rnc: this.route.snapshot.params['rnc'],
      name: this.companyForm.value.name,
      tradeName: this.companyForm.value.tradeName,
      category: this.companyForm.value.category,
      paymentScheme: this.companyForm.value.paymentScheme,
      state: this.companyForm.value.state,
      economicActivity: this.companyForm.value.economicActivity,
      localManagement: this.companyForm.value.localManagement
    };
    this.companyService.updateCompany(company).subscribe(
      () => {
        console.log('Company updated successfully');
      }
    );
    this.router.navigate(['/gestionar']);
  }

}
