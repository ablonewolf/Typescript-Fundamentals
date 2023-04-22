let scores = [75, 85, 80, 92, 79, 73];
let subjects = [
  'Bengali',
  'English',
  'Physics',
  'Maths',
  'Chemistry',
  'Biology'
];

// iterating using indexing
for (let i = 0; i < subjects.length; i++) {
  console.log(`For subject ${subjects[i]}, the marks is: ${scores[i]}.`);
}

let sum = 0;
// iterating using for of
for (let score of scores) {
  sum += score;
}
let average = sum / scores.length;
console.log(`The Average score is: ${average.toFixed(2)}`);
