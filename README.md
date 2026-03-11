# Medi-Score-Calculator
# Overview
This project is a Medhi Score calculator, which is a simplified patient scoring system based on physiological measurements. It is used to help identify patients who require urgent medical attention by assigning scores to different vital signs.

The final score is calculated by evaluating patient evaluations and summing up the final score

Higher scores indicate higher levels of clinical risk.

This solution implements the Medi score logic using a web-based interface
 
 
 # Technologies Used

1. HTML- to structure the web interface and create the input form
2. CSS - to style the page and improve visual presentation
3. JavaScript - to implement scoring logic and dynamically calculate the Medi score

# Why JavaScript
JavaScript was used because it allows the scoring logic to run directly in the browser, making the application interactive and easy to test.
 Using JavaScript also allows the program to capture user input from the form and display results instantly without refresing the page.

 # How the Application works
 1. The user enters the patient observations into the form.
 2. When the Calculate button is pressed, a JavaScript function is triggered
 3. The program reads the values entered into the form.
 4. A patient object is created in JavaScript containing all the values
 5. The main function, calls several smaller fuction that calculates scores for each observation, oxygen, consciousness, respiration rate, SpO2, temperature and capillary blood glucose. These scores are added together in the main function to produce the final Medi Score.
 6. The result is displayed on the page.

 # Program Structure
 The program is structured using modular functions.
 Instead of writing a large block of code, the calculation is divided into smaller fuctions with a main controller function.

 If statements combined with return statements are used to simplify the logic. Once a condition is met, the function immediately returns the appropriate score, preventing unncecessary checks and reduce complexity.
 Overall This approach, reduces code complexity, improves readability, makes debugging easier and allows for each scoring rule to be tested independently.

 This approach, reduces code complexity, improves readability, makes debugging easier and allows for each scoring rule to be tested independently.

