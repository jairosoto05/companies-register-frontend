import { Injectable } from '@angular/core';
import { ICompany } from '../components/company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  getCompanies():Observable<ICompany[]> {
    return this.http.get<ICompany[]>(environment.apiUrl);
  }

  getCompany(rnc: string): Observable<ICompany> {
    return this.http.get<ICompany>(environment.apiUrl + rnc);
  }

  addCompany(company: ICompany): Observable<ICompany> {
    return this.http.post<ICompany>(environment.apiUrl, company);
  }

  updateCompany(company: ICompany): Observable<ICompany> {
    return this.http.put<ICompany>(environment.apiUrl + company.rnc, company);
  }

  deleteCompany(rnc: string): Observable<ICompany> {
    return this.http.delete<ICompany>(environment.apiUrl + rnc);
  }
}
