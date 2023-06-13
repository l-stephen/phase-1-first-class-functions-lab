// Code your solution in this file!
const names = ["Stephen", "Sarah", "John", "David"]
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
};
console.log(returnFirstTwoDrivers(names))

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}
console.log(returnLastTwoDrivers(names))

const selectingDrives = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value
    }
}
const quad = createFareMultiplier(2)
console.log(quad(4))

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, driverToReturn){
    return driverToReturn(drivers)
}

console.log(selectDifferentDrivers(names, returnLastTwoDrivers))