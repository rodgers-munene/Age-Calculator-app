//getting the elements
// input elements
const daysInput = document.querySelector("#day");
const monthsInput = document.querySelector("#month");
const yearsInput = document.querySelector("#year");
//output elements
const daysOutput= document.querySelector("#DD");
const monthsOutput= document.querySelector("#MM");
const yearsOutput= document.querySelector("#YY");

//button
const button = document.querySelector(".btn");

//error values
const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const dayBorder = document.querySelector("#day")
const monthBorder = document.querySelector("#month")
const yearBorder = document.querySelector("#year")
//global variables

const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthsOfYear = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nov', 'December'];

// validator
function validate(){
  let validator = true;
  
  if(daysInput.value > 31 || daysInput.value == ""){
    dayError.style.display = 'block';
    dayError.innerText = 'Must be a valid date';
    dayBorder.style.border = "1px solid red";
    validator = false
  }
  else if(monthsInput.value > 12 || monthsInput.value == ""){
    monthError.style.display = 'block';
    monthError.innerText = 'Must be a valid month';
    monthBorder.style.border = "1px solid red";
    validator = false
  }
  else if(yearsInput.value > 2023 || yearsInput.value == ""){
    yearError.style.display = 'block';
    yearError.innerText = 'Must be a valid year';
    yearBorder.style.border = "1px solid red";
    validator = false
  }else {
    dayBorder.style.border = "1px solid lightgrey";
    monthBorder.style.border = "1px solid lightgrey";
    yearBorder.style.border = "1px solid lightgrey";
    dayError.style.display = 'none';
    monthError.style.display = 'none';
    yearError.style.display = 'none';
    validator = true
  }

  return validator;
};

//event listeners
button.addEventListener('click', (event) =>{
  event.preventDefault();
  //months of the year
 
  if(validate()){
    let birthMonth = monthsOfYear[monthsInput.value - 1];
  // main variables
  const birthDate = `${daysInput.value} ${birthMonth} ${yearsInput.value}`;
  const dateOfBirth = new Date(birthDate);
  const currentDate = new Date();
  
 
  //get years
  var years = currentDate.getYear() - dateOfBirth.getYear();

  // get months
  if(currentDate.getMonth() >= dateOfBirth.getMonth()){
      months = currentDate.getMonth() - dateOfBirth.getMonth() 
  }else{
      // get months when the current month is not greater
      years--;
      months = 12 + currentDate.getMonth() - dateOfBirth.getMonth() 
  }

  //get days
  if (currentDate.getDate() >= dateOfBirth.getDate()){  
    //get days when the current date is greater  
    var days = currentDate.getDate() - dateOfBirth.getDate();
  }else {  
    months--;  
    var days = daysInMonths[monthsInput.value - 1] + currentDate.getDate() - dateOfBirth.getDate();  

    if (months < 0) {  
      months = 11;  
      years--;  
    }  
  } 
    daysOutput.innerHTML = timeFormat(days);
    monthsOutput.innerHTML = timeFormat(months);
    yearsOutput.innerHTML = timeFormat(years);
  }
})
 




function timeFormat(time){
    return time < 10? (`0${time}`): time;
}


// check on the span element it might be the one causing 
//the bugs;