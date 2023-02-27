/** @type {import('jest').Config} */
const config = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    detectOpenHandles : true,
    testTimeout: 20000,
  };
  
  module.exports = config;