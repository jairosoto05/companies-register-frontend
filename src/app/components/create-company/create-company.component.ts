import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { ICompany } from '../company';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(private formBulder: FormBuilder,
    private companyService: CompanyService) { }

  public companyForm: FormGroup = this.formBulder.group({
    rnc: new FormControl(''),
    name: new FormControl(''),
    tradeName: new FormControl(''),
    category: new FormControl(''),
    paymentScheme: new FormControl(''),
    state: new FormControl(''),
    economicActivity: new FormControl(''),
    localManagement: new FormControl('')
  });

  ngOnInit(): void {
  }

  SaveData() {
    let company: ICompany = {
      rnc: this.companyForm.value.rnc,
      name: this.companyForm.value.name,
      tradeName: this.companyForm.value.tradeName,
      category: this.companyForm.value.category,
      paymentScheme: this.companyForm.value.paymentScheme,
      state: this.companyForm.value.state,
      economicActivity: this.companyForm.value.economicActivity,
      localManagement: this.companyForm.value.localManagement
    };
    this.companyService.addCompany(company).subscribe(
      () => {
        console.log('Company added successfully');
      }
    );
    this.companyForm.reset();
  }
}
