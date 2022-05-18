// Code your solution here
function findMatching(drivers, name){
    const matching = drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())
    return matching
}

function fuzzyMatch(drivers, string){
    const matching = drivers.filter(driver => driver.substring(0,string.length) === string)
    return matching
}

function matchName(drivers, string){
    const matching = drivers.filter(driver => driver.name == string)
    return matching
}