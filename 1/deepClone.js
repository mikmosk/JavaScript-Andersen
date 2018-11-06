var person = {
	name: 'Misha',
	age: 26,
	isMarried: true,
	children: {
		child1: {
			name: 'Emily',
			sex: 'female',
			age: 1
		}
	},
	pets: {
		pet1: {
			type: 'cat',
			age: 4,
			sex: 'male',
			color: 'black',
			name: 'Plus'
		},
		pet2: {
			type: 'dog',
			age: 3,
			sex: 'female',
			color: 'brown',
			name: 'Jessie'
		}
	}		
	
};

function deepCopy(obj) {	
	var newDeepObj = {};
		
	for (var prop in obj) {
		
		if (typeof(obj[prop]) == 'object') {
			newDeepObj[prop] = deepCopy(obj[prop]);			
		} else {
			newDeepObj[prop] = obj[prop];	
		}
			
	}
	return newDeepObj;
}

personClone = deepCopy(person);
console.log(personClone);


//person.pets.pet2.name = 'Juliet';
//console.log(person.pets.pet2.name);
//console.log(personClone.pets.pet2.name);
