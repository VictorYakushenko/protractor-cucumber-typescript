export class DateService {

    public static getMonthShort(date: Date, locale: string = "en-us"): string {
        return date.toLocaleString(locale, {
            month: "short"
          });
    }

    public static getYearNumeric(date: Date, locale: string = "en-us"): string {
        return date.toLocaleString(locale, {
            year: "numeric"
          });
    }

    public static getDay2Digits(date: Date, locale: string = "en-us"): string {
        return date.toLocaleString(locale, {
            day: "2-digit"
          });
    }
}
