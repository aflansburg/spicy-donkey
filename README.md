# Spicy Donkey

A random name generator as seen on Reddit, Heroku, Xbox, etc. This project generates random combinations of adjectives and nouns to create unique and fun names.

## How It Works

The generator uses predefined lists of adjectives and nouns stored in JSON files. It randomly selects one adjective and one noun to create a combination. The types of adjectives and nouns can be specified to generate different styles of names.

## Building Locally

To build and run the project locally, follow these steps:

1. **Clone the repository:**

```sh
sh
git clone https://github.com/yourusername/spicy-donkey.git
cd spicy-donkey
```

2. **Install dependencies**

```sh
npm install
```

3. **Build the project&**

```sh
npm run build
```

4. **Run the demo script:**

```sh
node demo/demo.js
```

## Arguments

The main function `generateRandomCombination` accepts two arguments:

- `adjectiveType`: The type of adjective to use. Can be either `'serious'` or `'humorous'`.
- `nounType`: The type of noun to use. Can be either `'car'` or `'animal'`.

Example usage:

```typescript:index.ts
const name = generateRandomCombination('humorous', 'animal');
console.log(name); // Outputs a random combination like "Cheeky Monkey"
```

## Demo Script

The demo script demonstrates how to use the `generateRandomCombination` function. It generates and prints several random name combinations.

To run the demo script:

1. **Compile the TypeScript files:**

```sh
npx tsc
```

2. **Run the demo script:**

```sh
node demo/demo.js
```

The demo script will output random name combinations based on different adjective and noun types.

Example output:

```javascript.demo/demo.js
console.log(generateRandomCombination('humorous', 'animal'));
console.log(generateRandomCombination('serious', 'car'));
console.log(generateRandomCombination('serious', 'animal'));
console.log(generateRandomCombination('humorous', 'car'));
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Abe Flansburg (@aflansburg)