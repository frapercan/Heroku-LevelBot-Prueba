import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { CompanyDetailsComponent } from '../company-details/company-details.component';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers: [CompanyService]
})

export class CompanyListComponent implements OnInit {

  companies: Company[]
  selectedCompany: Company
  products: any

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService
      .getCompanies()
      .then((companies: Company[]) => {
        this.companies = companies.map((company) => {
          return company;
        });
      });
  }

  private getIndexOfCompany = (companyId) => {
    return this.companies.findIndex((company) => {
      return company._id === companyId;
    });
  }

  selectCompany(company: Company | null) {
    this.selectedCompany = company;
  }

  createNewCompany() {
    var company: Company = {
      name: '',
      homepage_url: ''
    };

    this.selectCompany(company);
  }

  deleteCompany = (company: Company) => {
    var idx = this.getIndexOfCompany(company._id);
    if (idx !== -1) {
      this.companies.splice(idx, 1);
      this.selectCompany(null);
    }
    return this.companies;
  }

  getCompanyProducts = (products) => {

    return products;
  }

  addCompany = (company: Company) => {
    this.companies.push(company);
    this.selectCompany(company);
    return this.companies;
  }

  updateCompany = (company: Company) => {
    var idx = this.getIndexOfCompany(company._id);
    if (idx !== -1) {
      this.companies[idx] = company;
      this.selectCompany(company);
    }
    return this.companies;
  }
}
