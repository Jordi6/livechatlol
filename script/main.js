document.getElementById("right").addEventListener("click", function () {
	document.getElementById("ta").focus()
})

const sampleText =
	"final lay had box how see the both listen distant less fly near room head"
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

// working
// const input = document.getElementById("ta")
// let currentWordIndex = 0

// input.addEventListener("keydown", function (event) {
// 	if (event.code === "Space" || event.code === "Enter") {
// 		if (input.innerText.trim() === sampleText[currentWordIndex].trim()) {
// 			console.log("typed: " + input.innerText)
// 			console.log("expected: " + sampleText[currentWordIndex])

// 			// Remove the span
// 			const span = document.querySelector(`#text-to-type-${currentWordIndex}`)
// 			const left = document.getElementById("left")
// 			const right = document.getElementById("right")

// 			right.removeChild(span)
// 			left.appendChild(span)

// 			currentWordIndex++
// 			input.innerText = ""
// 		}
// 	}
// })

let timerStarted = false
let timer

const input = document.getElementById("ta")
let currentWordIndex = 0

input.addEventListener("keydown", function (event) {
	if (!timerStarted) {
		timerStarted = true
		timer = setTimeout(() => {
			alert("Time's up!")
			clearTimeout(timer)
		}, 1000)
	}

	if (event.code === "Space" || event.code === "Enter") {
		if (input.innerText.trim() === sampleText[currentWordIndex].trim()) {
			console.log("typed: " + input.innerText)
			console.log("expected: " + sampleText[currentWordIndex])

			// Remove the span
			const span = document.querySelector(`#text-to-type-${currentWordIndex}`)
			const left = document.getElementById("left")
			const right = document.getElementById("right")

			right.removeChild(span)
			left.appendChild(span)

			currentWordIndex++
			input.innerText = ""
		}
	}
})
