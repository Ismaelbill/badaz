
let array = [25, 10, 5, 2, 1];
let number = 305;

function change(){

     //this is the minimal number of coins
     let MNOC = 0;

     //this is to keep the loop looping
     let condition = false;

     //this purenumber just to keep the first number pure (without change it) 
     let purenumber = number;

     // now the condition will start
     while ( condition == false) {

          purenumber = Math.min(...array.map(elm=>purenumber-elm).filter(elm=>elm >= 0));
          ++MNOC;
          if(purenumber==0){
               condition = true;
          }
     }

     console.log(MNOC);
     
      
}
change();