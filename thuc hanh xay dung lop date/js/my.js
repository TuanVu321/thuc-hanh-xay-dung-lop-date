let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;
    };
    this.getYear = function () {
        return this.year;
    };
    this.Month = function () {
        return this.month;
    };
    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    };
};
let date = new MyDate(2, 2, 2007);
function toString(){
    let day = date.getDay();
    let month = date.Month();
    let year = date.getYear();
    alert(day + '/' + month + '/' + year);
};
function setDate(day,month,year){
    date.setDay(day);
    date.setMonth(month);
    date.setYear(year);
}
setDate(10,10,2010);
toString();
