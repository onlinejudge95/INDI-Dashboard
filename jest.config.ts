import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['components/**/*.tsx'],
  coverageDirectory: 'reports',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      statements: 0,
      lines: 0,
    },
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);
