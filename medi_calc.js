function calculateScore(){ //The function reads the data directly from the HTML form then assigns them to variables.
let oxygen = Number(document.getElementById("oxygen").value);
let consciousness = Number(document.getElementById("consciousness").value);
let respirations = Number(document.getElementById("respirations").value);
let spo2 = Number(document.getElementById("spo2").value);
let temperature =Number(document.getElementById("temperature").value);
temperature = Math.round(temperature * 10)/10;   // to round the value of the temperature to the 1 decimal place,, the Math.round() function is used.
let glucose = Number(document.getElementById("glucose").value);
let glucoseType = document.getElementById("glucoseType").value;

//The fuction  then creates a patient object, with the variables obtained from the form as its properties.
//This way easily allows us to pass the patitent object to the smaller functions.
let patient = {
    oxygen: oxygen,
    consciousness: consciousness,
    respirations: respirations,
    spo2: spo2,
    temperature: temperature,
    glucose: glucose,
    glucoseType: glucoseType
};
// The function then initializes a score variable to zero, and then calls the smaller functions to calculate the score for each parameter and then adds them to the total score.

let score = 0;
   score+= calculateOxygenScore(patient.oxygen);
   score+= calculateConciousnessScore(patient.consciousness);
   score+= calculateRespirationScore(patient.respirations);
   score+= calculateSp02Score(patient.spo2,patient.oxygen);
   score+= calculateTemperatureScore(patient.temperature);
   score+= calculateCapillaryScore(patient.glucose, patient.glucoseType);

   //Finally, the function updates the text of the result element in the HTML to display the calculated Medi Score.
  
   document.getElementById("result").innerText = "Medi Score: " + score;
   
   return score;

}
//Function to calculate the oxygen score
function calculateOxygenScore(oxygen) {
    return oxygen;
  // The HTML form already assigns the correct oxygen score (0 or 2), so the function simply returns it
}

//Function to calculate the concsiousness score
function calculateConciousnessScore(consciousness) {
if (consciousness === 0) 
    return 0; // if it is zero, the function stops and returns zero, if not it keeps going and returns 3.
    return 3;
   // Like the oxygen score, the consciousness score is also directly obtained from the form, so the function just checks if it is zero or not and returns the appropraite score.
}

//Function to calculate the respiration score
function calculateRespirationScore(respRate) {
  if (respRate <=8) return 3;
  if (respRate <= 11) return 1;
  if (respRate <= 20 ) return 0;
  if (respRate <= 24 ) return 2;
 return 3;
 // The respiration score is calculated based on the respiration rate of the patients. The function uses a series of IF statements to determine the appropriate score based on given renges
 //In the function the IF statements only use the upper limit because the ranges follow eachother, it is simpler that writing out the upper and lower limits of each range. step by step if the code is ran the function checks the first range and if the statement is true the return statement stops the function before it reaches the other conditions.
 // This version removes the unnecessary lower bounds.
}

//Function to calculate the spo2 score.
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

 //Function to calculate the temperature score
function calculateTemperatureScore(temp) {
    if (temp <= 35) return 3;
    if (temp <= 36) return 1;
    if (temp <= 38) return 0;
    if (temp <= 39) return 1;
    return 2;
}
//Function to calculate Capillary blood glucose score;
function calculateCapillaryScore(glucose, glucoseType){
    if (glucoseType === "fasting"){
        if (glucose <= 3.4) return 3;
        if (glucose <= 3.9) return 2;
        if(glucose <= 5.4) return 0;
        if (glucose <= 5.9) return 2;
        return 3;}
//The fuction first checks the glucose type.
// If the patient is fasting, the fasting glucose ranges are applied.
// Otherwise the function evaluates the glucose value using the ranges for patients who have eaten
    if (glucoseType === "eaten"){
        if (glucose <= 4.5) return 0;
        if (glucose <= 5.8) return 2;
        if (glucose <= 7.8) return 0;
        if (glucose <= 8.9) return 2;
        return 3;
    }
 //Capillary blood sugar depends on whether the patient is fasting
//or has eaten within two hours, different ranges are applied depending on the patient's condition.
}