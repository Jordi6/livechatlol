document.getElementById("right").addEventListener("click", function () {
	document.getElementById("ta").focus()
})

const sampleText =
	"fly relate house expert charge interview itself because job consider knowledge color low late hope significant understand business home where entire tonight want heavy such sell way employee by civil hold executive become station successful enough task exactly reflect about fear let perform term always industry spend feeling play federal performance season major buy ability evidence treat wall true like project return popular whether inside especially say size fast really activity final use strategy maintain see add explain conference school line almost economy rise various claim range imagine their central watch art right century scientist thought radio rule call administration light concern pick coach make chair suddenly information show rock pretty ready hang finally music cold join professional later though series head college building career consumer everyone sure area maybe history wear land matter save realize family plan risk compare prepare simply meet last however score rest card also bring begin movement moment material night reduce these live condition yeah food than morning city speak enjoy laugh teacher cell health well summer player interesting might subject movie themselves price trip address anything million get image probably recent why reveal billion write hair may remove car response just"
		.split(" ")
		.map((word) => word + " ")
console.log(sampleText)

for (let i = 0; i < sampleText.length; i++) {
	let word = sampleText[i]
	let span = document.createElement("span")
	span.id = `text-to-type-${i}`
	span.innerHTML = word
	document.getElementById("right").appendChild(span)
}
const input = document.getElementById("ta")
const timerDisplay = document.getElementById("sec")
const accuracyDisplay = document.getElementById("accuracy")
const wpmDisplay = document.getElementById("wpm")
const cpmDisplay = document.getElementById("cpm")

let currentWordIndex = 0
let startTime = 0
let endTime = 0

let typedWords = 0
let typedChars = 0
let totalChars = 0

let timer = null

input.addEventListener("keydown", function (event) {
	if (!timer) {
		startTime = new Date()
		timerDisplay.innerText = "60"
		timer = setInterval(function () {
			let seconds = parseInt(timerDisplay.innerText) - 1
			if (seconds === 0) {
				clearInterval(timer)
				input.disabled = true
				endTime = new Date()
				let elapsedTime = (endTime - startTime) / 1000
				let wpm = Math.round((typedWords / elapsedTime) * 60)
				let cpm = Math.round((typedChars / elapsedTime) * 60)
				let accuracy = Math.round((typedChars / totalChars) * 100)

				wpmDisplay.innerText = `WPM: ${wpm}`
				cpmDisplay.innerText = `CPM: ${cpm}`
				accuracyDisplay.innerText = `Accuracy: ${accuracy}%`
			}
			timerDisplay.innerText = seconds
		}, 1000)
	}

	if (event.code === "Space" || event.code === "Enter") {
		totalChars += sampleText[currentWordIndex].length + 1
		typedChars += input.innerText.length + 1
		typedWords++

		if (input.innerText.trim() === sampleText[currentWordIndex].trim()) {
			const span = document.querySelector(`#text-to-type-${currentWordIndex}`)
			const left = document.getElementById("left")
			const right = document.getElementById("right")

			right.removeChild(span)
			left.appendChild(span)

			currentWordIndex++
			input.innerText = ""
		}
	}

	if (currentWordIndex === sampleText.length) {
		clearInterval(timer)
		input.disabled = true
	}
})
