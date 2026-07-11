import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testPathPattern: ['<rootDir>/__tests__/'],
  collectCoverageFrom: [
    'lib/**/*.ts',
    'components/**/*.tsx',
    'app/api/**/*.ts',
    '!**/*.d.ts',
  ],
};

export default createJestConfig(customJestConfig);
