module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
