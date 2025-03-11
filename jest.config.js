export default {
  testEnvironment: "node", // Środowisko testowe (Node.js)
  transform: {
    "^.+\\.js$": "babel-jest", // Użyj Babel do transpilacji plików .js
  },
  moduleFileExtensions: ["js", "json", "jsx", "node"], // Rozszerzenia plików
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"], // Wzorce dla plików testowych
};