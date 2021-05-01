//I always recommend having all TypeScript files in a src folder in your project. We assume this is as the case and specify this using the roots option.

module.exports = {
  roots: ["<rootDir>/src"],
  transform: {    //The transform config just tells Jest to use ts-jest for ts / tsx files.
  "^.+\\.tsx?$": "ts-jest",
  '.+\\.(css|styl|less|sass|scss|svg|gif)$': 'jest-transform-css'
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",  //The testRegex tells Jest to look for tests in any __tests__ folder AND also 
                                                            //any files anywhere that use the (.test|.spec).(ts|tsx) extension e.g. message.test.tsx etc.
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], //The moduleFileExtensions tells Jest to recognize our file extensions. 
                                                                  //This is needed as we add ts/tsx into the defaults (js|jsx|json|node).
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/src/setupEnzyme.ts",
  }