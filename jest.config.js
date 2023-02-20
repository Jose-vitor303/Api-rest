/** @type {import('jest').Config} */
const config = {
    detectOpenHandles: true,
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch : ["**/tests/***.test.js?(x)"]
    // the following line is needed in order to grab modules from the
    // src folder without the need to write them relatively
  };
  
  module.exports = config;