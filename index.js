/* Your Code Here */

function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: new Array(),
    timeOutEvents: new Array(),
  };
}

function createEmployeeRecords(arrayOfarrays) {
  return arrayOfarrays.map((array) => createEmployeeRecord(array));
}

function createTimeInEvent(dateTime) {
  const [date, hour] = dateTime.split(" ");
  const timeInEvent = {
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10),
  };
  this.timeInEvents.push(timeInEvent);
  return this;
}

function createTimeOutEvent(dateTime) {
  const [date, hour] = dateTime.split(" ");
  const timeOutEvent = {
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10),
  };
  this.timeOutEvents.push(timeOutEvent);
  return this;
}

function hoursWorkedOnDate(dateTime) {
  const timeOutHour = this.timeOutEvents.filter(
    (event) => event.date === dateTime
  )[0].hour;
  const timeinHour = this.timeInEvents.filter(
    (event) => event.date === dateTime
  )[0].hour;
  return (timeOutHour - timeinHour) / 100;
}

function wagesEarnedOnDate(dateTime) {
  return hoursWorkedOnDate.call(this, dateTime) * this.payPerHour;
}

function findEmployeeByFirstName(collection, firstName) {
  return collection.filter((employee) => employee.firstName === firstName)[0];
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce(
    (total, employee) => total + allWagesFor.call(employee),
    0
  );
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
