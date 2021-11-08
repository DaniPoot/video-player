const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $rewind = document.querySelector('#rewind')
const $foward = document.querySelector('#foward')
const $video = document.querySelector('#video')
const $progress = document.querySelector('#progress')

$progress.max = $video.duration

$video.addEventListener('timeupdate', () => {
  $progress.value = $video.currentTime
})

$video.addEventListener('ended', () => {
  $progress.value = 0
  toggleActions()
})

$play.addEventListener('click', () => {
  $video.play()
  toggleActions()
})

$pause.addEventListener('click', () => {
  $video.pause()
  toggleActions()
})

$rewind.addEventListener('click', () => {
  $video.currentTime = $video.currentTime - 10
})

$foward.addEventListener('click', () => {
  $video.currentTime = $video.currentTime + 10
})


function toggleActions() {
  $play.classList.toggle('hidden-button')
  $pause.classList.toggle('hidden-button')
  $rewind.classList.toggle('hidden-button')
  $foward.classList.toggle('hidden-button')
}