function calculateScore(){ //The function reads the data directly from the HTML form. 
let oxygen = Number(document.getElementById("oxygen").value);
let consciousness = Number(document.getElementById("consciousness").value);
let respirations = Number(document.getElementById("respirations").value);
let spo2 = Number(document.getElementById("spo2").value);
let temperature = Number(document.getElementById("temperature").value);

//The fuction creates a patient object, with the values obtained from the form.
let patient = {
    oxygen: oxygen,
    consciousness: consciousness,
    respirations: respirations,
    spo2: spo2,
    temperature: temperature
};

let score = 0;
   score+= calculateOxygenScore(patient.oxygen);
   score+= calculateConciousnessScore(patient.consciousness);
   score+= calculateRespirationScore(patient.respirations);
   score+= calculateSp02Score(patient.spo2,patient.oxygen);
   score+= calculateTemperatureScore(patient.temperature);
  
   document.getElementById("result").innerText = "Medi Score: " + score;
   
   return score;

}
//This is the main fuction that calculates the total score by calling the other smaller functions thar focuses on each parameter.

function calculateOxygenScore(oxygen) {
    return oxygen;
    // since the oxygen score is directly given by the patient object(or inputed by the user based on the patients condition) we can directly return the value.
}

function calculateConciousnessScore(consciousness) {
if (consciousness === 0) 
    return 0; // if it is not zero, then add three to the result
    return 3;
    //so basically, if the patient is conscious return 0, otherwise return 3.  istead of another if statement in the funcion, a return is used because if the firat condition is not true it automatically reaches the next line

}
function calculateRespirationScore(respRate) {
  if (respRate <=8) return 3;
  if (respRate <= 11) return 1;
  if (respRate <= 20 ) return 0;
  if (respRate <= 24 ) return 2;
 return 3;
 // The respiration score is calculated based on the respiration rate of the patients. The function uses a series of IF statements to determine the appropriate score based on given renges
 //In the function the IF statements only use the upper limit becaus the ranges follow eachother, it is simpler that writing out the upper and lowe limits of each range. step by step if the code is ran the function checks the first range and if the statement is true the return statement stops the function before it reaches the other conditions.
 // This version removes the unnecessary lower bounds.
}
 function calculateSp02Score(spo2,oxygen) {
    
    if (spo2 <=83) return 3;
    if ( spo2 <= 85) return 2;
    if (spo2 <= 87) return 1;
    if (spo2 <= 92) return 0;
    //This first 4 ranges do not take into account the oxygen levels, so they are socred solely based on the spo2 levels.
    // so, Spo2 <= 92 - same scoring for everyone, Spo2 >= 92 - scoring depends on oxygen 
    // The function checks each if statement in order, so it checks each statements, if it is true it stops the function and returns a value, if it is not true it keeps going.
    if (oxygen === 0 ) return 0;
    // if the oxygen is not 0, it  means the patient is on air, so automatically the score is zero. so the function carries on checking the spo2 levels to determine the score.  
    if (spo2 <= 94) return 1;
    if ( spo2 <=96) return 2;
    return 3;
 }
function calculateTemperatureScore(temp) {
    if (temp <= 35) return 3;
    if (temp <= 36) return 1;
    if (temp <= 38) return 0;
    if (temp <= 39) return 1;
    return 2;
}