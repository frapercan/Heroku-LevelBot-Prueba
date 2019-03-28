import { Injectable } from '@angular/core';
import { Company } from './company';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CompanyService {
  private companiesUrl = '/api/companies';
  private companyUrl = '/api/company';
  private options = new RequestOptions({
    headers: new Headers({
      'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhvbGFAZ21haWwuY29tIiwiaWQiOiI1YzliZjZjODRmMTk2MzAwMTdhNWRlOGYiLCJleHAiOjE1NTg5MDkxMjgsImlhdCI6MTU1MzcyNTEyOH0.-05yAVESjOrPrNFX3L3WV3-zNhE5aaU7-3YfHTVZFeo'
    })
  });



  constructor(private http: Http) {

   }

  // get("/api/companies")
  getCompanies(): Promise<void | Company[]> {
    return this.http.get(this.companiesUrl, this.options)
      .toPromise()
      .then(response => response.json() as Company[])
      .catch(this.handleError);
  }

  // post("/api/companies")
  createCompany(newCompany: Company): Promise<void | Company> {
    return this.http.post(this.companyUrl, newCompany, this.options)
      .toPromise()
      .then(response => response.json() as Company)
      .catch(this.handleError);
  }

  // get("/api/companies/:id") endpoint not used by Angular app

  // delete("/api/companies/:id")
  deleteCompany(delCompanyId: String): Promise<void | String> {
    return this.http.delete(this.companyUrl + '/' + delCompanyId, this.options)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  // put("/api/companies/:id")
  updateCompany(putCompany: Company): Promise<void | Company> {
    const putUrl = this.companyUrl + '/' + putCompany._id;
    return this.http.put(putUrl, putCompany, this.options)
      .toPromise()
      .then(response => response.json() as Company)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
