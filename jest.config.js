module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    '**/*.(test|spec).(ts|tsx)',
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'jest.tsconfig.json',
      diagnostics: false,
    },
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'enzyme.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'text-summary',
  ],
};
