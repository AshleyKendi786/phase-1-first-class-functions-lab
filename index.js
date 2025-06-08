// Code your solution in this file!
// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function to create a fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Double the fare
const fareDoubler = createFareMultiplier(2);

// 6. Triple the fare
const fareTripler = createFareMultiplier(3);

// 7. Select different drivers based on passed-in function
function selectDifferentDrivers(drivers, driverSelectorFunction) {
  return driverSelectorFunction(drivers);
}
