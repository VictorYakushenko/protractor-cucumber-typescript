import { When, Given, Then } from "cucumber";
import { browser, protractor, by } from "protractor";
import { EmployeeReviewPage } from "../pages/employee-review.page";
import { FormSubmittedPage } from "../pages/form-submitted.page";
import { expect } from "chai";
import { EmployeeDepartment } from "../models/iemployee-form";

const employeeReviewPage: EmployeeReviewPage = new EmployeeReviewPage();
const formSubmittedPage: FormSubmittedPage = new FormSubmittedPage();

Given('I am on review form page',{timeout: 60000}, async () => {
    await browser.get("/templates/30-day-employee-review")
});

When('I fill Employee Review form right', async () => {
    await employeeReviewPage.employeeFirstName.sendKeys("First Name");
    await employeeReviewPage.employeeLastName.sendKeys("Last Name");
    await employeeReviewPage.selectEmployeeHireDate();

    await employeeReviewPage.employeeTitle.sendKeys("Employee Title");

    await employeeReviewPage.employeeDepartment.click()
    await employeeReviewPage.employeeDepartment.element(by.cssContainingText('option', EmployeeDepartment.CustomerService)).click()

    await employeeReviewPage.performanceEvaluationAttendenceVeryGood.click()

    await employeeReviewPage.overallVeryGood.click()

    await employeeReviewPage.moreDetails.sendKeys("More Details");

    await employeeReviewPage.supervisorFirstName.sendKeys("First Name");
    await employeeReviewPage.supervisorLastName.sendKeys("Last Name");

    await employeeReviewPage.sign();
});

When('I click submit button', async () => {
    await employeeReviewPage.submitFormBtn.click();
});

Then('I see message: {string}', async (expected) => {
    const actual = await formSubmittedPage.message.getText();
    expect(actual).to.equal(expected);
});