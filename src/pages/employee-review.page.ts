import { $, ElementFinder, by, browser } from "protractor";
import { DateService } from "../services/date-service";
import { EmployeeDepartment } from "../models/iemployee-form";

export class EmployeeReviewPage {
    public employeeFirstName: ElementFinder
    public employeeLastName: ElementFinder
    public hireMonth: ElementFinder
    public hireDate: ElementFinder
    public hireYear: ElementFinder
    public employeeTitle: ElementFinder
    public employeeDepartment: ElementFinder
    public performanceEvaluationAttendenceVeryGood: ElementFinder
    public overallVeryGood: ElementFinder
    public moreDetails: ElementFinder
    public supervisorFirstName: ElementFinder
    public supervisorLastName: ElementFinder
    public clearSignature: ElementFinder
    public signature: ElementFinder
    public submitFormBtn: ElementFinder
    private today: Date 

    constructor() {
        //It is sample template ID's and id is not dynamic
        this.employeeFirstName = $("#field48323184-first");
        this.employeeLastName = $("#field48323184-last");
        this.hireMonth = $("#field48323212M");
        this.hireDate = $("#field48323212D");
        this.hireYear = $("#field48323212Y");
        this.employeeTitle = $("#field48323242");
        this.employeeDepartment = $("#field48323246");
        this.performanceEvaluationAttendenceVeryGood = $("input[value='Attendence = Very Good']");
        this.overallVeryGood = $("input[value='Very good']");
        this.moreDetails = $("#field48323422");
        this.supervisorFirstName = $("#field48323416-first");
        this.supervisorLastName = $("#field48323416-last");
        this.clearSignature = $("#signatureClear48323419");
        this.signature = $(".jSignature");
        this.submitFormBtn = $("#fsSubmitButton2560208");
        this.today = new Date();
    }

    public async selectEmployeeHireDate (date: Date = this.today): Promise<void>{
        const year =  await DateService.getYearNumeric(date);
        const month =  await DateService.getMonthShort(date);
        const day =  await DateService.getDay2Digits(date);

        await this.hireMonth.click()
        await this.hireMonth.element(by.cssContainingText('option', month)).click()

         await this.hireDate.click()
         await this.hireDate.element(by.cssContainingText('option', day)).click()

         await this.hireYear.click()
         await this.hireYear.element(by.cssContainingText('option', year)).click()
    }

    public async sign (date: Date = this.today): Promise<void>{
        browser.actions().mouseDown(this.signature).perform();

        return browser.actions().mouseMove(this.signature, {
           x: 500,
           y: 50
        }).perform();       
    }
}
