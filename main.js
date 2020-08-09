const work = document.querySelector('#work');
const body = document.querySelector('body');
const darkButton = document.querySelector('#dark');
const yellowButton = document.querySelector('#yellow');
const cyanButton = document.querySelector('#cyan');
const redButton = document.querySelector('#red');
const reco = document.querySelector('#recog')
const rec = new webkitSpeechRecognition()
const answer = confirm("ovoz orqali To Do Listga qo'shish uchun rec tugmasini bosing! va fon rangini o'zgartirish uchun tanlagan rangizga 'rang' so'zini qo'shib ayting hozircha faqat tabloda berilgan ranglar bor :)")
rec.lang = 'uz-UZ'
console.log(answer)
rec.onend = function () {

   console.log('Aloqa Tugadi.')
}

rec.onresult = function (events) {

  const buyruq = events.results[0][0].transcript
  console.log(buyruq)
  
  if (buyruq === 'qizil rang') {
    body.style.backgroundColor = 'red'
  } else if (buyruq === 'sariq rang') {
    body.style.backgroundColor = 'yellow'
  } else if (buyruq === 'qora rang') {
    body.style.backgroundColor = 'black'
  }else if (buyruq === "kok rang") {
    body.style.backgroundColor = 'cyan'
  } else {

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
  

  if (event.keyCode === 13 && work.value.length>0) {
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
  body.style.backgroundColor = 'black'
}
yellowButton.onclick = function () {
  body.style.backgroundColor = 'yellow'
}
cyanButton.onclick = function () {
  body.style.backgroundColor = 'cyan'
}
redButton.onclick = function () {
  body.style.backgroundColor = 'red'
}