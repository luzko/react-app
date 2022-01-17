module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
  ],
  coverageDirectory: "coverage",
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "node"
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\.(js|jsx|ts|tsx|json)$": "babel-jest",
    "^.+\.(css|less|sass|scss)$": "jest-css-modules-transform",
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/jest/fileTransformer.js',
  },
  transformIgnorePatterns: [
    "/node_modules/",
    '<rootDir>/node_modules/'
  ],
};
