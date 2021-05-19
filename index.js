//*findMatching function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers


//*fuzzyMatch function takes an array of drivers' names and a string as arguments for querying the array, and returns all 
//drivers whose names begin with the provided letters.


//*matchName function takes an array of drive objects and a string as arguments. Each driver object has 
//two properties: name and hometown. Return each element whose name property matches the provided string argument.

function findMatching(drivers, string) {
    return drivers.filter((driver) => {
        return driver.toLowerCase() === string.toLowerCase();
    });
}

function fuzzyMatch(drivers, string) {
    return drivers.filter((driver) => {
        return driver.slice(0, string.length) === string;
    });
}

function matchName(drivers, string) {
    return drivers.filter((driver) => {
        return driver.name === string;
    });
}