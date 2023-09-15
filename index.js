// var numberField = document.getElementById("numberField")
// var numberField2 = document.getElementById('numberField2')


// function fola(){
//     if(!numberField.value || !numberField2.value){
//         alert("Please enter a value")
//     }else{
//         var a = parseFloat(numberField.value)
//         var b = parseFloat(numberField2.value)

//         var sum =  a + b
//         alert(sum)
//     }
// }

// let day = "Friday"
// switch (day) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// document.getElementById("demo").innerHTML = "Today is " + day;

///REGEX
// var olu = 'DEEJOFT TECHNOLOGIES';
// var n = olu.search('TECHNOLOGIES')
// console.log(n)

//replace
var olu = 'DEEJOFT TECHNOLOGIES';
var n = olu.replace(/TECHNOLOGIES/i, 'HOUSE')
console.log(n)


// function Abass(){
//   var a = 12

// }

// var b = 22
// console.log(a + b)


//OPERATOR PREDENCE--------PEMDAS------PARENTHESIS, EXPONENTIATION, MUILTPLICATION, DIVISION, ADDITON, SUBTRACTION
console.log((8*2)-(5+5))



// try{
//   addalert(" come here")
// }
// catch(abass){
//   console.log("Our error")
// }

/// try catch and finally
try{
  addalert(" come here")
}
catch(abass){
  console.log("Our error")
}
finally{
  console.log('final')
}

//Reference error
let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  console.log('olu')
}



//
function abass(){
  var a = 5
}
console.log(a)