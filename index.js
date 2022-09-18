const response = fetch('https://exercisedb.p.rapidapi.com/exercises', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': '86332af65amsha50a1827694ecaep1dece6jsnfa56659d3b85',
	}
}).then(res => res.json())

const bodyTargets = fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': '86332af65amsha50a1827694ecaep1dece6jsnfa56659d3b85',
	}
}).then(res => res.json())


const searchInput = document.querySelector('#text')
const rootDiv = document.getElementById('root')
const searchBtn = document.getElementById('search')
const deleteBtn = document.getElementById('delete')


document.addEventListener("DOMContentLoaded", () => {
	const handleApi = () => {
		
		bodyTargets.then(data => data.forEach(items => {
			const target = document.createElement('a')
			const rootDiv = document.createElement('div')
			
			rootDiv.style.display = 'grid'
			rootDiv.style.justifyContent = 'center'
			rootDiv.appendChild(target)
			const main = document.querySelector('#body')
			main.appendChild(rootDiv)
			target.textContent = items
			target.style.background = 'grey'
			target.style.padding = '15px'
			target.style.margin = '2px'
			target.style.width = '300px'
			target.style.cursor = 'pointer'
	
			target.addEventListener('mouseover', () => 
			target.style.background = '#D3D3D3' )
	
			target.addEventListener('mouseout', () => 
			target.style.background = 'gray')

			target.addEventListener('click', () => {
				response.then(data => data.filter(el => {
					if(el.bodyPart === target.textContent) {
						const div = document.createElement('div')

						const gifURL = document.createElement('img')
			            const workoutName = document.createElement('p')
						gifURL.src = el.gifUrl
						workoutName.textContent = `workout : ${el.name}`
						div.appendChild(gifURL)
						div.appendChild(workoutName)
						rootDiv.appendChild(div)

						deleteBtn.addEventListener('click', () =>
                           div.remove())


						return rootDiv
					}
				}))
			})

			
		} ))
		
	
	}
	handleApi()
	
}
)

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('form').addEventListener('submit', (e) => {
	 e.preventDefault();
	 searchItems(searchInput.value)

   })


const searchItems = (target) => {

	response.then(data => data.filter(element => {
		if (element.bodyPart === target.toLowerCase())

		{const parentDiv = document.createElement('div')
	    const gifURL = document.createElement('img')
	    const workoutName = document.createElement('p')
		gifURL.src = element.gifUrl
		workoutName.textContent = `workout: ${element.name}`

		parentDiv.appendChild(gifURL)
	    parentDiv.appendChild(workoutName)
	    rootDiv.appendChild(parentDiv)

		deleteBtn.addEventListener('click', () =>
		rootDiv.remove())
	} else if (element.bodyPart[0] !== target.toLowerCase()) {
		const p = document.createElement('p')
		p.textContent = 'no match'
		rootDiv.appendChild(p)
		
		
	}
    }
	))

	}

})



