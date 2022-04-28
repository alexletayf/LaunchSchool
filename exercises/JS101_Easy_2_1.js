let arr = ['Alejandro', 'Muñoz', 'Letayf'];
let obj = {title: "B.A.", occupation: 'Project Manager'};

function greeting(arr, obj) {
	let name = arr.join(' ');
	console.log(`Hello, ${name}! Nice to have a` +
		` ${obj.title} ${obj.occupation} around.`);
}

greeting(arr, obj);