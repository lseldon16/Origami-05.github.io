// Origami_05

/**
 * MyDate - represents a date (day, month, year)
 */
class MyDate {
    /**
     * Creates a new date object
     * @param {*} day day of the date
     * @param {*} month month of the date
     * @param {*} year year of the date
     */
    constructor(day, month, year) {
        this._day = day;
        this._month = month;
        this._year = year;
    }

    /**
     * @return the day of the date
     */
    getDay() {
        return this._day;
    }
    /**
     * @return the month of the date
     */
    getMonth() {
        return this._month;
    }
    /**
     * @return the year of the date
     */
    getYear() {
        return this._year;
    }

    /*     _day; //day of the date, must be >=1 and <=31
        _month; //month of the date, must be >=1 and <=12
        _year; // year of the date */
}