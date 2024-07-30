import * as fs from 'fs';
import * as path from 'path';

type AdjectiveType = 'serious' | 'humorous' | 'celestial';
type NounType = 'car' | 'animal' | 'star';

function loadJson(filePath: string): string[] {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function getRandomElement(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomCombination(
  adjectiveType: AdjectiveType,
  nounType: NounType,
): string {
  const adjectives = loadJson(
    path.join(__dirname, 'data', 'adjectives', `${adjectiveType}.json`),
  );
  const nouns = loadJson(
    path.join(__dirname, 'data', 'nouns', `${nounType}s.json`),
  );

  return `${getRandomElement(adjectives)} ${getRandomElement(nouns)}`;
}

export { generateRandomCombination, AdjectiveType, NounType };
