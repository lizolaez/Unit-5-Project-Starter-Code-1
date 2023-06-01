// 1. Store each input as a variable (there should be two input boxes - one for each answer) [ ]
// 2. Store the button as a variable (there should be ONE button) [ ]
// 3. Create a click handler [ ]
// 4. Use the .value property to store user input [ ]
// 5. Add console.log to test if the code is being stored [ ]
// 6. Write a conditional statement with else-if to include all 4 possible results [ ]
// 7. Write a compound conditional statement that uses input from both questions to provide the user with a result [ ]
// 8. Write a sentence using string concatenation using the data stored in the user input variables [ ]
// 9. Add a next level feature! [ ]

let submitButton=document.querySelector(".submitButton");
let result=document.querySelector(".result");
let sixtymeterHurdles=document.querySelector(".sixtymeterHurdles");
let threehundredHurdles=document.querySelector(".threehundredHurdles");
let throwersRelay=document.querySelector(".throwersRelay");
let longRun=document.querySelector(".longRun");
let title= document.querySelector(".title");


submitButton.onclick=function(){
let input1=document.querySelector(".input1").value;
let input2=document.querySelector(".input2").value;

  
if ((input1 === "short distance") && input2==="jump"){
  title.style.display="none";
  result.innerHTML="Because you picked " + input1 + " and " + input2 + " you would run the 60 meter hurdles.";
  sixtymeterHurdles.style.display="block";
  submitButton.style.display="none";
  title.style.display="none";
} 
else if ((input1 === "long distance") && input2==="jump") {
  result.innerHTML="Because you picked " + input1 + " and " + input2 + " you would run the 300 meter hurdles.";
  threehundredHurdles.style.display="block";
  title.style.display="none";
   submitButton.style.display="none";
}
else if ((input1 === "short distance") && input2==="throw"){
  result.innerHTML="Because you picked " + input1 + " and " + input2 + " you would run the 4x100 throwers relay.";
  throwersRelay.style.display="block";
  title.style.display="none";
   submitButton.style.display="none";
}

else if ((input1 === "long distance") && input2==="throw"){
  result.innerHTML="Because you picked " + input1 + " and " + input2 + " you would run the 1600 meter.";
  longRun.style.display="block";
  title.style.display="none";
   submitButton.style.display="none";
}

  
};