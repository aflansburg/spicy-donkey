// run `npx tsc` first to compile the typescript file to javascript
// then run `node demo-scripts/demo.js` to run the javascript file
const { generateRandomCombination } = require('../dist/index');

console.log(generateRandomCombination('humorous', 'animal'));
console.log(generateRandomCombination('serious', 'car'));
console.log(generateRandomCombination('serious', 'animal'));
console.log(generateRandomCombination('humorous', 'car'));
