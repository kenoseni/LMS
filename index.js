/*XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
exports.XO = function (str) { 
  if (typeof str === 'string') {
    let arr = str.toLowerCase().split('');
    let xcount = 0;
    let ocount = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === 'x'){
        xcount++;
      }
      if(arr[i] === 'o'){
        ocount++;
      }
    }
    if(xcount === 0 && ocount === 0){
      return true;
    }
    if((xcount === 0 && ocount > 0) ||
      (ocount === 0 && xcount > 0)) {
        return false;
    }
    return ocount === xcount;
  }
  return 'The argument supplied is not a string, please insert a string';
}