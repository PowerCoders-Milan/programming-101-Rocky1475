//insert your pseudocode below
/*
give any date we need to find which number of the year that date 
example: 18th feb is equal to 31 + 18 
we have 3 variables 
the first variable is the number of the month 
second variable name of the month
find that how many days are there before name of the month 
third variable is  how many days are there before name of the month 
we need to add number of the month to the days of the months before
print the result. 
*/

//Insert your code below
var numbers;

function listsGetSortCompare(type, direction) {
    var compareFuncs = {
        "NUMERIC": function (a, b) {
            return Number(a) - Number(b);
        },
        "TEXT": function (a, b) {
            return a.toString() > b.toString() ? 1 : -1;
        },
        "IGNORE_CASE": function (a, b) {
            return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1;
        },
    };
    var compare = compareFuncs[type];
    return function (a, b) { return compare(a, b) * direction; }
}


numbers = [3, 1, 5];
window.alert(numbers.slice().sort(listsGetSortCompare("NUMERIC", 1)));