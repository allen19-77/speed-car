let speed = 10
let radius = 5
updateSpeed()

document.getElementById('push').onclick = (event) => {
	speed++
	updateSpeed()
}

document.getElementById('break').onclick = (event) => {
	speed /= 2
	updateSpeed()
}

function updateSpeed() {
	const duration = 2 * Math.PI * radius / speed;
	[...document.styleSheets[0].cssRules].find(rule => rule.selectorText == '.wheel').style.animationDuration = duration + 's'
}