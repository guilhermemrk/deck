// File for testing purposes

var mArray = [1]
var template = [1]

function repeat(array, n){
    var out = [];
    for(var i = 0; i < n; i++) {
        out = out.concat(array);
    }
    return out;
}

var deck = repeat(mArray, 5)

console.log(deck)
