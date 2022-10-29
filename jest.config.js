module.exports = {
  rootDir: 'src',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    'single-spa-react/parcel': 'single-spa-react/lib/cjs/parcel.cjs',
    '^@app(.*)$': '<rootDir>/$1',
    '^@components(.*)$': '<rootDir>/components$1',
    '^@core(.*)$': '<rootDir>/core$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@assets(.*)$': '<rootDir>/assets$1',
    '\\.(scss|css|sass)$': 'identity-obj-proxy',
  },
};
