import { generateRandomCombination } from '../index';

describe('generateRandomCombination', () => {
  it('should return a string', () => {
    const result = generateRandomCombination('humorous', 'animal');
    expect(typeof result).toBe('string');
  });

  it('should return a combination of an adjective and a noun', () => {
    const result = generateRandomCombination('serious', 'car');
    const [adjective, ...nounParts] = result.split(' ');
    const noun = nounParts.join(' ');
    expect(adjective).toBeTruthy();
    expect(noun).toBeTruthy();
  });

  it('should return different combinations', () => {
    const result1 = generateRandomCombination('humorous', 'animal');
    const result2 = generateRandomCombination('humorous', 'animal');
    expect(result1).not.toBe(result2);
  });

  it('should handle different adjective and noun types', () => {
    const result1 = generateRandomCombination('serious', 'animal');
    const result2 = generateRandomCombination('humorous', 'car');
    expect(result1).toBeTruthy();
    expect(result2).toBeTruthy();
  });
});
