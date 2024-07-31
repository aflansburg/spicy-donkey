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

function isNextJsEnvironment(): boolean {
  return (
    process.env.NEXT_PUBLIC_ENV !== undefined ||
    fs.existsSync(path.join(process.cwd(), 'next.config.js')) ||
    fs.existsSync(path.join(process.cwd(), '.next'))
  );
}

function generateRandomCombination(
  adjectiveType: AdjectiveType,
  nounType: NounType,
  baseDir?: string,
): string {
  if (!baseDir && isNextJsEnvironment()) {
    baseDir = path.join(process.cwd(), 'public');
  } else {
    baseDir = baseDir || __dirname;
  }

  const adjectives = loadJson(
    path.join(baseDir, 'data', 'adjectives', `${adjectiveType}.json`),
  );
  const nouns = loadJson(
    path.join(baseDir, 'data', 'nouns', `${nounType}s.json`),
  );

  return `${getRandomElement(adjectives)} ${getRandomElement(nouns)}`;
}

export { generateRandomCombination, AdjectiveType, NounType };
