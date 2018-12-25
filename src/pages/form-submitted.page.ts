import { $, ElementFinder, by } from "protractor";
import { DateService } from "../services/date-service";

export class FormSubmittedPage {
    public message: ElementFinder
    constructor() {
        this.message = $(".fsSectionText p");
    }
}