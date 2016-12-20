var data = [{name: "Tizio", age: 28}, {name: "Caio", age: 29}, {name: "Marco", age: 23}, {name: "Ele", age: 22}];

function compare(propr){
	if(propr == "name"){
		return cName;
	} else{
		return cAge;
	}
}

function cName(v1, v2){
	if(v1.name < v2.name){
		return -1;
	} else if(v1.name > v2.name){
		return 1;
	} else{
		return 0;
	}
}

function cAge(v1, v2){
	if(v1.age < v2.age){
		return -1;
	} else if(v1.age > v2.age){
		return 1;
	} else{
		return 0;
	}
}

data.sort(compare("name"));