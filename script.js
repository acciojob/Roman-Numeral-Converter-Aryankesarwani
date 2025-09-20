function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

	let ans = "";

  for (let i = 0; i < obj.length; i++) {
    let [roman, val] = obj[i];

    while (num >= val) {
      ans += roman;
      num -= val;
    }

    if (i % 2 === 0 && i < obj.length - 2) { 
      let next_val = obj[i + 2][1]; 
      if (num >= val - next_val) { 
        ans += obj[i + 2][0] + roman; 
        num -= val - next_val; 
      } 
    } 
    else if (i % 2 === 1 && i < obj.length - 1) { 
      let next_val = obj[i + 1][1]; 
      if (num >= val - next_val) { 
        ans += obj[i + 1][0] + roman; 
        num -= val - next_val; 
      } 
    }
  }

  return ans;
  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
