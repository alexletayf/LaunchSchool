const grades = [10, 85, 95, 100];
let gradesSum = 0;

grades.forEach(value => {
  gradesSum += value;
});

const gradeAverage = gradesSum / grades.length;
console.log(gradeAverage);

if (gradeAverage >= 90) {
  console.log('A');
} else if (gradeAverage >= 80) {
  console.log('B');
} else if (gradeAverage >= 70) {
  console.log('C');
} else if (gradeAverage >= 60) {
  console.log('D');
} else {
  console.log('F');
}



