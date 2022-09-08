const response = fetch('https://exercisedb.p.rapidapi.com/exercises', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': 'd595c4331bmsh78067501c0d5056p1a9a6ajsnc6dd3a85e9a6',
	}
}).then(res => res.json())

const searchInput = document.querySelector('#text')
const rootDiv = document.getElementById('root')


document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('form').addEventListener('submit', (e) => {
	 e.preventDefault();
	 searchItems(searchInput.value)
	
   })



const searchItems = (target) => {
	
	response.then(data => data.filter(element => {
		if (element.bodyPart === target) {
			const parentDiv = document.createElement('div')
	    const gifURL = document.createElement('img')
	    const workoutName = document.createElement('p')
		workoutName.style.fontSize = '17px'
		gifURL.src = element.gifUrl
		workoutName.textContent = `workout: ${element.name}`
		parentDiv.appendChild(gifURL)
	    parentDiv.appendChild(workoutName)
	    return rootDiv.appendChild(parentDiv)
	}

	       
	}
	))
	
	}
	
})

const createDivs = () => {
	// const btn = document.getElementsByClassName('bodyParts') 
	fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
			'X-RapidAPI-Key': 'd595c4331bmsh78067501c0d5056p1a9a6ajsnc6dd3a85e9a6',
		}
	}).then(res => res.json())
	.then(data => data.forEach(items => {
		const target = document.createElement('a')
		const main = document.querySelector('#body')
		main.appendChild(target)
		target.textContent = items
		target.style.background = 'grey'
		target.style.padding = '15px'
		target.style.margin = '2px'
	    target.style.width = '300px'
		target.style.cursor = 'pointer'

	} ))
	

}
createDivs()