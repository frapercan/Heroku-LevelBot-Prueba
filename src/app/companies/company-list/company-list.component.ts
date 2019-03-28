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

  companies: Company[];
  selectedCompany: Company;

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

  private getIndexOfCompany = (companyId: String) => {
    return this.companies.findIndex((company) => {
      return company._id === companyId;
    });
  }

  selectCompany(company: Company) {
    this.selectedCompany = company;
  }

  createNewCompany() {
    const company: Company = {
      name: '',
      permalink: '',
    };

    // By default, a newly-created company will have the selected state.
    this.selectCompany(company);
  }

  deleteCompany = (companyId: String) => {
    const idx = this.getIndexOfCompany(companyId);
    if (idx !== -1) {
      this.companies.splice(idx, 1);
      this.selectCompany(null);
    }
    return this.companies;
  }

  addCompany = (company: Company) => {
    this.companies.push(company);
    this.selectCompany(company);
    return this.companies;
  }

  updateCompany = (company: Company) => {
    const idx = this.getIndexOfCompany(company._id);
    if (idx !== -1) {
      this.companies[idx] = company;
      this.selectCompany(company);
    }
    return this.companies;
  }
}
