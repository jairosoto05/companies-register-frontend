import { Injectable } from '@angular/core';
import { ICompany } from '../components/company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private _url: string = "../assets/data/companies.json";

  constructor(private http:HttpClient) { }

  getCompanies():Observable<ICompany[]> {
    return this.http.get<ICompany[]>(this._url);
  }
}
