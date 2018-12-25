import { $, ElementFinder, by } from "protractor";
import { DateService } from "../services/date-service";

export class EmployeeReviewPage {
    public employeeFirstName: ElementFinder
    public employeeLastName: ElementFinder
    public hireMonth: ElementFinder
    public hireDate: ElementFinder
    public hireYear: ElementFinder
    public employeeTitle: ElementFinder
    public employeeDepartment: ElementFinder
    public performanceEvaluation: ElementFinder
    public overall: ElementFinder
    public moreDetails: ElementFinder
    public SupervisorFirstName: ElementFinder
    public supervisorLastName: ElementFinder
    public clearSignature: ElementFinder
    public signature: ElementFinder
    public submitFormBtn: ElementFinder
    private today: Date 

    constructor() {
        //It is sample template ID's is not dynamic
        this.employeeFirstName = $("input[type='email']");
        this.employeeLastName = $("#gform_submit_button_3");
        this.hireMonth = $("#field48323212M");
        this.hireDate = $("input[type='email']");
        this.hireYear = $("#gform_submit_button_3");
        this.hireMonth = $(".validation_error");
        this.employeeTitle = $("input[type='email']");
        this.employeeDepartment = $("#gform_submit_button_3");
        this.performanceEvaluation = $(".validation_error");
        this.overall = $("input[type='email']");
        this.moreDetails = $("#gform_submit_button_3");
        this.SupervisorFirstName = $(".validation_error");
        this.supervisorLastName = $("input[type='email']");
        this.clearSignature = $("#gform_submit_button_3");
        this.signature = $("#gform_submit_button_3");
        this.submitFormBtn = $(".validation_error");
        this.today = new Date();
    }

    public async selectEmployeeHireDate (date: Date): Promise<void>{
        const year =  await DateService.getYearNumeric(this.today);
        const month =  await DateService.getMonthShort(this.today);
        const day =  await DateService.getDay2Digits(this.today);

        await this.hireMonth.click()
        await this.hireMonth.element(by.cssContainingText('option', month)).click()

        await this.hireDate.click()
        await this.hireDate.element(by.cssContainingText('option', day)).click()

        await this.hireYear.click()
        await this.hireYear.element(by.cssContainingText('option', year)).click()
    }
}
