# AJ-Utils

A npm package created with different functionality for ease of use.

## Set up

`npm install aj-utils`

#### Require examples

```
Const AJ = require('aj-utils')
Const {centuryCalc} = require('aj-utils)
```

## Functions

`centuryCalc(year, romanNumerals = true/false)`

`formatNumber(number, "prefix")`

`binarySearch(array, value)`

`gcd(num1, num2)`

`romanNum(Number)`

## Change log

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
