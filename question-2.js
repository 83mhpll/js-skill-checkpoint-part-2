const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

const totalScore = students
  .filter(student => student.score > 50)
  .map(student => student.score * 1.1)
  .reduce((sum, score) => sum + score, 0);

console.log(`Total score is ${totalScore}`);

