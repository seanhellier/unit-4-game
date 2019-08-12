// generate random number for the gamer to play against (between 19 and 120)
// declare vars to apply to the stones (between 1 and 12)
// declare counter vars and initialize to 0
// create functions to register clicks, add numbers to user score, and compare to computer number
// play sound and reset game for next round

// generate random number for the user to play against
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
  
    // attach computer generated random number to the html
    $('#randomNumber').text(Random);
    
    // generate random numbers for the four stones
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
  
    // declare counter vars and initialize to 0
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
  // attach win / loss vars to the html
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  
 //Increments user wins
  function yay(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
//Increments user loses
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
 // the following four functions both log the user totals but also compare the current user score aginst the computer generated number. If the answer is yes, then the user recieves an alert and the game resets. I the user loses, then they are notified of that and the game resets. The number of wins / loses incremets dependimg upon the outcome
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  //sets win/lose conditions
            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 

 //reset the gameboard
 function reset(){
  Random=Math.floor(Math.random()*101+19);
  console.log(Random)
  $('#randomNumber').text(Random);
  num1= Math.floor(Math.random()*11+1);
  num2= Math.floor(Math.random()*11+1);
  num3= Math.floor(Math.random()*11+1);
  num4= Math.floor(Math.random()*11+1);
  userTotal= 0;
  $('#finalTotal').text(userTotal);
  } 