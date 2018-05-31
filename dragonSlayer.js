//Attack Button
function myAttack(){
  var youHit = Math.floor(Math.random()*2);
  var damageThisRound = Math.floor(Math.random()*5 + 1);
  var totalDamage = 0;
  var slaying = true;
  while(slaying) {
   if (youHit) {
    totalDamage += damageThisRound;
        document.getElementById("text1").innerHTML = "You hit for " + totalDamage + " damage!";
        if (totalDamage >= 4){
     document.getElementById("text2").innerHTML = "The Big Bad Dragon is mortally wounded, you are the victor!";
     document.getElementById('dragonPicture').src='img/dragondefeat.jpg';
     document.getElementById('heroPicture').src='img/herovictory.jpg';
  }
  else if (totalDamage < 4) {
      document.getElementById("text2").innerHTML = totalDamage + " damage is not enough!";
      document.getElementById("text3").innerHTML = "The Dragon survives and eats you.";
      document.getElementById('heroPicture').src='img/herodefeat.jpg';
      document.getElementById('dragonPicture').src='img/dragonvictory.jpg';
        }
    slaying = false;
} 
else {
  document.getElementById("text1").innerHTML = "You miss!";
  document.getElementById("text2").innerHTML = "";
  document.getElementById("text3").innerHTML = "Oh no! The Big Bad Dragon is furious! He burns you to a crisp!";
  document.getElementById('heroPicture').src='img/herodefeat.jpg';
  document.getElementById('dragonPicture').src='img/dragonvictory.jpg';
  slaying = false;
}}}

//Reset Button
function myReset(){
  document.getElementById("text1").innerHTML = "";
  document.getElementById("text2").innerHTML = "Try again!";
  document.getElementById("text3").innerHTML = "";
  document.getElementById('heroPicture').src='img/hero.jpg';
  document.getElementById('dragonPicture').src='img/dragon.jpg';
}