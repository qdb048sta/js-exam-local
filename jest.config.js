module.exports = {
  roots: ['<rootDir>/src/'],
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.js',
};
