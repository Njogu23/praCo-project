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
}).then(data => data.json())



const searchItems = () => {
	const parentDiv = document.createElement('div')
	const gifUrl = document.createElement('img')
	const workoutName = document.createElement('p')

	parentDiv.appendChild(gifUrl)
	parentDiv.appendChild(workoutName)
}
searchItems()

})