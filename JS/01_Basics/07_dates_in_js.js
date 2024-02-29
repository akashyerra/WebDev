// Dates

let myDate = new Date();

console.log(myDate); // gives the date and time of current location in an non interpretable format
console.log(myDate.toString()); // gives the date and time of the current location with the time zone, day
console.log(myDate.toISOString()); // returns a string in the format 1970-01-01T00:00:00.000Z (the date time string format introduced above, which is simplified ISO 8601)
console.log(myDate.toJSON()); // calls toISOString() and returns the result.
console.log(myDate.toLocaleDateString()); // use locale-specific date and time formats, usually provided by the Intl API.
console.log(myDate.toLocaleString()); // use locale-specific date and time formats, usually provided by the Intl API.

console.log(typeof myDate); // ******* always asked in interviews, date is an object
console.log(myDate.toDateString()); // coverts to day-month-date-year format

let newDate = new Date(2024, 1, 28); // months are started from 0
console.log(newDate.toString());

let myNewDate = new Date(2024, 1, 28, 5, 3);
console.log(myNewDate.toLocaleString());

let newDate1 = new Date("2024-02-11");
console.log(newDate1);

let newDate2 = new Date("11-02-2024");
console.log(newDate2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(newDate2.getTime()); // give the value of milliseconds from 1st jan 1970 to till now
console.log(Math.floor(Date.now() / 1000)); // to get in seconds

let newDate3 = new Date();
console.log(newDate3.getMonth()); // .getMonth(), .getDate(), .getDay() gives the required fields

// Very useful for the creation of projects and much
// .toLocaleString has this special property to be used for more details follow the mdn javascript dates page
newDate3.toLocaleString('default', {
    weekday: "long",
    timeZone: 'UTC'
});
