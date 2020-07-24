//task01//

function feetToMile(feet){
    var mile = feet*0.000182939;
    return mile;
}
var result = feetToMile(20000);
console.log(result);

//task02//
function woodCalculator(num1, num2, num3){
    var chair = 1*num1;
    var table = 3*num2;
    var bed = 5*num3;
    var result = chair + table + bed;
    return result;
}
var sum = woodCalculator(14,5,12);
console.log(sum);

//task03//
function brickCalculator(brickNumber){
    var a=0;
    var b = 0;
    var c = 0;
    var sum = 0;
    if(brickNumber>20){
        a = brickNumber-20;
        b = brickNumber-a-10;
        c = brickNumber-10-a;
        sum = sum+(a*10*1000)+(b*12*1000)+(c*15*1000);
        return sum;
    }
    if(brickNumber>10){
        b = brickNumber-10;
        c = brickNumber-b;
        sum = sum+(b*12*1000)+(c*15*1000);
        return sum;
    }
    else{
        c = brickNumber;
        sum = sum+(c*15*1000);
        return sum;
    }
}

var brickResult = brickCalculator(10);
console.log(brickResult);

//task04//
function tinyFriend(name){
    
    var smallName = name[0];
    for(var i = 0; i<name.length; i++){
        var currentName = name[i];
        if(currentName.length<smallName.length){
            smallName=currentName;
        }
    }
    return smallName;
}

var smallName = tinyFriend(["Akash", "Abir", "Dipankar", "Mamum", "Tanmoy"]);
console.log(smallName);