var courses = require('./mongodb.json');

console.log(courses[0].teachers[0].course.courseTypes[0].schedules[0].testingDays);