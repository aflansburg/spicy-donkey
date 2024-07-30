module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/dist/'],
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
};
