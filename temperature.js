"use strict";
function calculate() {
  var result;
  var temp = original.value;

  //Expresion no admite e
  /*var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;*/

  //nueva expresion (si admite e)
  var regexp = /([-+]?\d+(?:\.\d*)?)(?:[eE]([-+]?\d+))?\s*([fFcC])/;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var exp = m[2];
    var type = m[3];

    num = parseFloat(num);
    exp = parseInt(exp);
    if (m[2] !== undefined){
      if (exp<0){
        var div=10;
        exp=-exp;

        for(var i=1; i<exp; i++){
          div=div*10;
        }
        if (div !== 0){
          num=num/div;
        }
      }else {
        var div=10;
        for(var i=1; i<exp; i++){
          div=div*10;
        }
        if (div !== 0){
          num=num*div;
        }
      }
    }


    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Pruebe algo como esto '-4.2C' o '-4.2e15C'";
  }
}
