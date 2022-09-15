//Variables privadas con Closures: JS por su naturaleza no fomenta el uso de datos privados pero por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.

const person = () => {
	let saveName = 'Name';
	return {
		getName: () => saveName,
		setName: (name) => {
			saveName = name;
		}
	};
};

const newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Isabel');
console.log(newPerson.getName());
newPerson.setName('Cristian');
console.log(newPerson.getName());

