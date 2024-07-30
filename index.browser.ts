type AdjectiveType = 'serious' | 'humorous' | 'celestial';
type NounType = 'car' | 'animal' | 'star';

async function loadJson(filePath: string): Promise<string[]> {
  const response = await fetch(filePath);
  return response.json();
}

function getRandomElement(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function generateRandomCombination(
  adjectiveType: AdjectiveType,
  nounType: NounType,
): Promise<string> {
  const adjectives = await loadJson(`/data/adjectives/${adjectiveType}.json`);
  const nouns = await loadJson(`/data/nouns/${nounType}s.json`);

  return `${getRandomElement(adjectives)} ${getRandomElement(nouns)}`;
}

export { generateRandomCombination, AdjectiveType, NounType };
