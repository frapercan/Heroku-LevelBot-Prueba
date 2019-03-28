import { Component, Input } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})

export class CompanyDetailsComponent {
  @Input()
  company: Company;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor(private companyService: CompanyService) {}

  createCompany(company: Company) {
    this.companyService.createCompany(company).then((newCompany: Company) => {
      this.createHandler(newCompany);
    });
  }

  updateCompany(company: Company): void {
    this.companyService.updateCompany(company).then((updatedCompany: Company) => {
      this.updateHandler(updatedCompany);
    });
  }

  deleteCompany(companyId: String): void {
    this.companyService.deleteCompany(companyId).then((deletedCompanyId: String) => {
      this.deleteHandler(deletedCompanyId);
    });
  }
}
