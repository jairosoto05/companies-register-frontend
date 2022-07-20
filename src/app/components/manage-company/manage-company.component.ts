import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ICompany } from '../company';


@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  public companies: ICompany[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.get_Companies();
  }

  get_Companies() {
    this.companyService.getCompanies().subscribe(
      (data: ICompany[]) => {
        this.companies = data;
      }
    );
  }

  deleteCompany(rnc: string) {
    if(confirm('Are you sure you want to delete this company?')) {
      this.companyService.deleteCompany(rnc).subscribe(
        () => {
          console.log('Company deleted successfully');
          this.get_Companies();
        }
      );
    }
  }

}
