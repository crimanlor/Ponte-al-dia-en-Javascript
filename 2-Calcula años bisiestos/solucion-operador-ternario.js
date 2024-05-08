
function isLeapYear(year) {
    return (year >= 0) ?
        ((year % 4 === 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) :
        false
}

