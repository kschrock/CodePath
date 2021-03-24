/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [5, 2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var totalGuess = 0;
var firstbuild = document.getElementById("guessBtn");
firstbuild.style.display = "inline";
// add some text to the button
firstbuild.innerText = "Guess Counter: " + totalGuess

function startGame(){
    //initialize game variables
    totalGuess = 0;
    progress = 0;
    gamePlaying = true;
    pattern = randomSequence(pattern) // this function call randomizes the given array
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    firstbuild.innerText = "Guess Counter: " + totalGuess
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
  
}

function randomSequence(array){
  var i;
  for (i = 0; i < array.length; i++){
    //console.log("original: " + array[i])
    array[i] = Math.floor(Math.random() * 5) + 1;  // returns a random integer from 1 to 5
    //console.log("after: " + array[i])
  }
  return array;
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime  
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!! :)");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if(btn == pattern[guessCounter]){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        clueHoldTime = 1000 // update time to orginal
        winGame();//GAME OVER: WIN!
      }
      else{
        //Pattern correct. Add next segment
        progress++;
        clueHoldTime -= 50 //subtract time every time passed segment
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    totalGuess +=1; //increase guess
    firstbuild.innerText = "Guess Counter: " + totalGuess
    //GAME OVER: LOSE!
    clueHoldTime = 1000 // update time to orginal
    if(totalGuess == 4){
      firstbuild.innerText = "Guess Counter: " + 0 //resets it back to 0
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 250,
  2: 333,
  3: 390,
  4: 456,
  5: 666
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)