const searchInput = document.querySelector('#text');
const searchBtn = document.getElementById('search');


document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('form').addEventListener('submit', (e) => {
	 e.preventDefault();
	
   })

const response = fetch('https://exercisedb.p.rapidapi.com/exercises', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': 'd595c4331bmsh78067501c0d5056p1a9a6ajsnc6dd3a85e9a6',
	}
}).then(res => res.json())



const searchItems = () => {
	const parentDiv = document.createElement('div')
	const gifURL = document.createElement('img')
	const workoutName = document.createElement('p')

	response.then(data => data.forEach(element => 
		gifURL.src = element.gifUrl))
	response.then(data => data.forEach(element => 
		workoutName.textContent = `workout : ${element.name}`))

	parentDiv.appendChild(gifURL)
	parentDiv.appendChild(workoutName)	
}
searchItems()

})