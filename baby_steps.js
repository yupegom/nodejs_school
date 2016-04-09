var array = process.argv;
var total = 0;
for (var i = 2; i < array.length; i++) {
    total = total + +array[i];
    //Do something
}
console.log(total);
