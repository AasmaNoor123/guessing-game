let randomNumeber = Math.floor(Math.random()*100) + 1 ;
// document.write(randomNumeber);
const guessInput = document.getElementById("guessInput");

const checkButton = document.getElementById("checkButton");

const result = document.getElementById("result");

const restartButton = document.getElementById("restartButton");
// = () => its arrow function syntax :
checkButton.onclick = () => {

//(guess) declear new variable for storing data :
//(.value) using for get value from html id :
const guess = Number(guessInput.value);

if (guess < 1 || guess >100 ) {
    result.textContent = "Enter a number between 1 to 100.";
result.style.color = "red";

}
else if (guess === randomNumeber){
    result.textContent = "Congrats !! You Win....🤞"
    result.style.color = "green"; 
    // 1st "checkButton.disabled" then working of" restatButton".
    checkButton.disabled = true; //now (checkButton)is not workable.
    restartButton.style.display = "block";
    checkButton.style.display = "none";
}
//Using ternary operater bcz need (applying condition )
else{
//" < Condition"," ? If", " : Else"
    result.textContent = guess < randomNumeber ? "Too Low Try Again!!": "Too Hight Try Again!! ";
    result.style.color = " orange";
}
//when i am win (guessInput refresh automatically)
guessInput.value = ""; // Clear input

//click chekButton (automatically focus "guessInput")
guessInput.focus();   // Refocus input
};
//Method : 1
// Function to restart the game
restartButton.onclick = () => {
randomNumber = Math.floor(Math.random() * 100) + 1;
result.textContent = "";
checkButton.disabled = false;
restartButton.style.display = "none";
guessInput.focus();
};
// Method : 2
// restartButton.onclick = () => {
//     location.reload()
// }


