const audio = document.getElementById("audio")

const playBtn = document.getElementById("play")
const backBtn = document.getElementById("back")
const forwardBtn = document.getElementById("forward")

const progress = document.getElementById("progress")

const current = document.getElementById("current")
const duration = document.getElementById("duration")

/* FORMATEAR TIEMPO */

function formatTime(sec){

if(isNaN(sec)) return "0:00"

const minutes = Math.floor(sec / 60)
const seconds = Math.floor(sec % 60)

return minutes + ":" + (seconds < 10 ? "0"+seconds : seconds)

}

/* CUANDO CARGA EL AUDIO */

audio.addEventListener("loadedmetadata", ()=>{

duration.textContent = formatTime(audio.duration)

progress.max = audio.duration

})

/* PLAY / PAUSE */

playBtn.addEventListener("click", function(){

if (audio.paused) {

audio.play();
playBtn.textContent = "⏸";

} else {

audio.pause();
playBtn.textContent = "▶";

}

});
/* ACTUALIZAR PROGRESO */

audio.addEventListener("timeupdate", ()=>{

progress.value = audio.currentTime
current.textContent = formatTime(audio.currentTime)

})

/* MOVER BARRA */

progress.addEventListener("input", ()=>{

audio.currentTime = progress.value

})

/* ADELANTAR 10s */

forwardBtn.addEventListener("click", ()=>{

audio.currentTime += 10

})

/* RETROCEDER 10s */

backBtn.addEventListener("click", ()=>{

audio.currentTime -= 10

})

/* CUANDO TERMINA */

audio.addEventListener("ended", function(){

playBtn.textContent = "▶";

});






