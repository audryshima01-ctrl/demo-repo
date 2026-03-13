 function rollDice() {
    const numOfDice=document.getElementById("diceCount").value;
    const diceResults=document.getElementById("Diceresult");
    const diceImages=document.getElementById("diceImages");
    const values =[];
    const images =[];
    for(let i=0;i<numOfDice;i++){
        const value= Math.floor ( Math.random()*6+1);
        console.log(value);
        values.push(value);
        images.push(`<img src="dice images/${value}.png">`);
 }  
 diceResults.textContent = `Dice: ${values.join(", ")}`;
 console.log(values);
 diceImages.innerHTML = images.join("");
}