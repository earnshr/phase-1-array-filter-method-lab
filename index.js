function findMatching(drivers, string){
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());    
}

//.toLowerCase() === string.toLowerCase() returns matching drivers if case does not match but letters do. This part of the function is doing a return of driver and changing each 'name' string to lowercase so that it is not case sensitive.

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.substring(0, name.length) === name);
        
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string);
}