var person = {
	name: "Nick",
	age: 29,
	jobs: ["Designer", "Tester"],
	sayName: function(){
		console.log(this.name);
	},
	sayJobs: function(){
		console.log(this.jobs.toString())
	}
}