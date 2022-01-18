
const args = process.argv.slice(2);
//slice the first two (0,1) items out of the string as they are node and file name

const timer = function(string) {

  for(let j = 0; j < string.length; j++) {
   const timerHold = Number(string[j]) * 1000;
   //we have to make the string into numbers
   //*multiply be cause of milliseconds, the original string is seconds
  //  console.log(timerHold);
   if (timerHold <= 0 || Number.isNaN(timerHold)) {
     //Number.isNaN() asks if it is a number
     console.log("if statement has been hit");
   } else {
    setTimeout(() => {
      process.stdout.write(".");
    }, timerHold);
   }
  }
};

timer(args);
//*multiply be cause of milliseconds
