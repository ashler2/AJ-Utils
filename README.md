# AJ-Utils

A npm package created with different functionality for ease of use.

## Set up

`npm install aj-utils`
or
`npm install aj-utils -g`

#### Require examples

```
Const AJ = require('aj-utils')
Const {centuryCalc} = require('aj-utils)
```

## Functions

`"ajExpress" or "ajExpress < folder name >"`

`centuryCalc(year, romanNumerals = true/false)`

`formatNumber(number, "prefix")`

`binarySearch(array, value)`

`gcd(num1, num2)`

`romanNum(Number)`

## Change log

#### V1.5.1 - Added fizzBuzz - 23rd Nov 2019

- Changed Keywords

#### V1.5.0 - Added fizzBuzz - 11th Oct 2019

- added the function fizzBuzz that takes a number and returns an array of the length counting up and returning fizz for multiples of 3 and buzz for multiples of 5, if both returns fizzbuzz in the array.
  -fizzBuzz(15) === [1, 2,'Fizz', 4,'Buzz', 'Fizz',7, 8,'Fizz', 'Buzz',11, 'Fizz',13, 14,'FizzBuzz']

#### V1.4.0 - Added ajExpress - 23rd Sep 2019

- Added ajExpress when globally installed. This will create a basic node/express server as well as installing Express and nodemon.

  - Once installed globally use "ajExpress" in the terminal to generate the server in the file
  - Or use "ajExpress < filename >" to create the folder for the server.

  ```
  ajExpress
  ├── app.js
  ├── config
  │   └── index.js
  ├── controllers
  │   └── errors.js
  ├── listen.js
  ├── models
  ├── package-lock.json
  ├── package.json
  └── routes
    └── apiRouter.js
  ```

#### V1.3.0 - Added centuryCalc - 21st Sep 2019

- Added CenturyCalc function that takes a year and roman numerals true/False and returns the century.
  - centuryCalc(2019) === "21st"
  - centuryCalc(2019, true) === "XXI
- Updated the Readme

#### V1.2.0 - Added formatNumber - 21st Sep 2019

- Added Format Number Function that returns a number separated by comma every 3 digits, also takes a prefix for currency.
  - formatNumber(100000, "£") === "£100,000.00"
  - formatNumber(100000) === "£100,000"

#### V1.1.0 - Added binarySearch - 17th Sep 2019

- Added Binary search Function that returns the index of the value - binarySearch([1,3,5,6], 3) === 2

#### V1.0.2 - First official Version - 17th Sep 2019

- Updated the Readme
- Small code Change
- Added Greatest Common Divisor function - gcd(12, 24) === 12
- Added Roman Numeral Encoder - romanNum(4) === "IX"
