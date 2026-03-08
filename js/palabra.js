const audio = document.getElementById("audio")

const playBtn = document.getElementById("play")
const backBtn = document.getElementById("back")
const forwardBtn = document.getElementById("forward")

const progress = document.getElementById("progress")

const current = document.getElementById("current")
const duration = document.getElementById("duration")

let userSeeking = false


function formatTime(sec){

if(isNaN(sec)) return "0:00"

const m = Math.floor(sec/60)
const s = Math.floor(sec%60)

return m + ":" + (s<10 ? "0"+s : s)

}


/* CARGA DEL AUDIO */

audio.addEventListener("loadedmetadata", ()=>{

duration.textContent = formatTime(audio.duration)

progress.max = Math.floor(audio.duration)

})


/* PLAY / PAUSE */

playBtn.addEventListener("click", ()=>{

if(audio.paused){

audio.play()
playBtn.textContent="⏸"

}else{

audio.pause()
playBtn.textContent="▶"

}

})


/* ACTUALIZAR PROGRESO */

audio.addEventListener("timeupdate", ()=>{

if(!userSeeking){

progress.value = Math.floor(audio.currentTime)

}

current.textContent = formatTime(audio.currentTime)

})


/* CUANDO USUARIO MUEVE BARRA */

progress.addEventListener("mousedown", ()=>{

userSeeking = true

})

progress.addEventListener("mouseup", ()=>{

audio.currentTime = progress.value

userSeeking = false

})


/* ADELANTAR */

forwardBtn.addEventListener("click", ()=>{

audio.currentTime += 10

})


/* RETROCEDER */

backBtn.addEventListener("click", ()=>{

audio.currentTime -= 10

})


/* FIN DEL AUDIO */

audio.addEventListener("ended", ()=>{

playBtn.textContent="▶"

})
