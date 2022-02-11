var timeTakenToClick = new Date().getTime()

console.log(timeTakenToClick)

function reshowShape(){
    
    timeTakenToClick = new Date().getTime()
    
    var newColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    
    document.getElementById("shape").style.top = Math.floor(Math.random() * 400) + "px"
    
    document.getElementById("shape").style.left = Math.floor(Math.random() * 400) + "px"
    
    document.getElementById("shape").style.backgroundColor = newColor
    
    document.getElementById("shape").style.display = "block"
    
}

function startUpShape(){
    
    setTimeout(reshowShape, 2000)
    
}

// setTimeout(reshowShape, 2000)

startUpShape()

var highestScoreArray = []

document.getElementById("shape").onclick = function(){
    
    document.getElementById("shape").style.display = "none"
    
    var timeTakenToFinishClick = new Date().getTime()
    
    var totalSeconds = (timeTakenToFinishClick - timeTakenToClick) / 1000
    
    highestScoreArray.push(totalSeconds)
    
    console.log(highestScoreArray)
    
    document.getElementById("timeTaken").innerHTML = "The Time Taken to click was : " + totalSeconds + "s"
    
    document.getElementById("highScore").innerHTML = "Your Highest time is : " + highestScoreArray.sort()[0] + "s"
    
    console.log(totalSeconds)
    
    startUpShape()
    
}