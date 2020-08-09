const work = document.querySelector('#work');
const body = document.querySelector('body');
const darkButton = document.querySelector('#dark');
const yellowButton = document.querySelector('#yellow');
const cyanButton = document.querySelector('#cyan');
const reco = document.querySelector('#recog')
const rec = new webkitSpeechRecognition()
const answer = confirm("ovoz orqali To Do Listga qo'shish uchun rec tugmasini bosing")
rec.lang = 'uz-UZ'
console.log(answer)
rec.onend = function () {

   console.log('Aloqa Tugadi.')
}

rec.onresult = function (events) {

  const buyruq = events.results[0][0].transcript
  console.log(buyruq)

  const newLi = document.createElement("LI")
  newLi.textContent = events.results[0][0].transcript
  const newBtn = document.createElement("Button")
  newBtn.textContent = "Done"
  newBtn.classList.add('done')
user.appendChild(newLi)
user.appendChild(newBtn)

work.value = ''

newBtn.onclick = function () {

newLi.remove()
newBtn.remove()
}
}
 

rec.onerror = function () {

  console.log('xatolik yuz berdi.')
}

window.onkeyup = function (events) {

  if (events.keyCode === 192){

    rec.start()
  }
}
reco.onclick = function (events) {
  rec.start()
}

work.onkeyup = function (event) {
  

  if (event.keyCode === 13) {
    const newLi = document.createElement("LI")
    newLi.textContent = work.value
    const newBtn = document.createElement("Button")
    newBtn.textContent = "Done"
     newBtn.classList.add('done')
  user.appendChild(newLi)
  user.appendChild(newBtn)

  work.value = ''

  newBtn.onclick = function () {

  newLi.remove()
  newBtn.remove()
  }
  }
}

darkButton.onclick = function () {
  body.classList.remove('yellow');
  body.classList.remove('cyan');
  body.classList.add('dark');
}
yellowButton.onclick = function () {
  body.classList.remove('cyan');
  body.classList.remove('dark');
  body.classList.add('yellow');
}
cyanButton.onclick = function () {
  body.classList.remove('yellow');
  body.classList.remove('dark');
  body.classList.add('cyan');
}