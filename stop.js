const display =document.getElementById("display")
let timer = null;
let starttime =0;
let elapsedTime =0;
let isRunning = false;

function start(){
    if (!isRunning) {
        isRunning = true;
        starttime = Date.now() - elapsedTime; 
        timer = setInterval(update, 10);   
        console.log("Stopwatch started");
    }
  }
function stop(){
    if (isRunning) {
        isRunning = false;
        elapsedTime = Date.now() - starttime; 
        clearInterval(timer); 
        console.log("Stopwatch stopped");
    }
}
function reset(){
    isRunning = false; 
    starttime = 0;     
    elapsedTime = 0;   
    clearInterval(timer); 
    display.textContent="00:00:00:00" 
    console.log("Stopwatch reset");
}
function update (){
    const currentTime = Date.now() - starttime; 
    const seconds = Math.floor((currentTime / 1000) % 60);
    const minutes = Math.floor((currentTime / (1000 * 60)) % 60);
    const milliseconds = Math.floor((currentTime % 1000) / 10);

display.textContent =`${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}:${milliseconds.toString().padStart(2, 0)}`
}

