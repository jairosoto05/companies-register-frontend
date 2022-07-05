import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(private formBulder: FormBuilder) { }

  public companyForm: FormGroup = this.formBulder.group({
    rnc: new FormControl(''),
    name: new FormControl(''),
    traceName: new FormControl(''),
    category: new FormControl(''),
    paymentScheme: new FormControl(''),
    state: new FormControl(''),
    ecomonicActivity: new FormControl(''),
    localManagement: new FormControl('')
  });

  ngOnInit(): void {
  }

  SaveData() {
    console.log(this.companyForm.value);
  }

}
