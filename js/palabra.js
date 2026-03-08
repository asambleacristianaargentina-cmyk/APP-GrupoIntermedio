const audio = document.getElementById("audio")

const play = document.getElementById("play")
const back = document.getElementById("back")
const forward = document.getElementById("forward")

const progress = document.getElementById("progress")

const current = document.getElementById("current")
const duration = document.getElementById("duration")

function formatTime(sec){

const minutes = Math.floor(sec/60)
const seconds = Math.floor(sec%60)

return minutes + ":" + (seconds<10 ? "0"+seconds : seconds)

}

audio.addEventListener("loadedmetadata",()=>{

duration.textContent = formatTime(audio.duration)

progress.max = audio.duration

})

play.addEventListener("click",()=>{

if(audio.paused){

audio.play()
play.textContent="⏸"

}else{

audio.pause()
play.textContent="▶"

}

})

audio.addEventListener("timeupdate",()=>{

progress.value = audio.currentTime

current.textContent = formatTime(audio.currentTime)

})

progress.addEventListener("input",()=>{

audio.currentTime = progress.value

})

forward.addEventListener("click",()=>{

audio.currentTime += 10

})

back.addEventListener("click",()=>{

audio.currentTime -= 10

})
