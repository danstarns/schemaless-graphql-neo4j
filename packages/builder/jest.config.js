const globalConf = require("../../jest-global.config");

module.exports = {
  ...globalConf,
  roots: ["tests"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testTimeout: 120000,
  testMatch: [`./**/*.test.ts`],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node", "md"],
};
