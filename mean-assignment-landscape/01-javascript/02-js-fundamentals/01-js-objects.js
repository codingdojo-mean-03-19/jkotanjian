// Challenge 1
// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for (let student of students) {
    console.log(`name: ${ student.name }, cohort: ${ student.cohort }`)
};


// Challenge 2
// Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
	for (let key in users){
		console.log(key.toUpperCase());
		for (let i=0; i<users[key].length; i++){
			console.log(i + 1 + "-" + users[key][i].last_name.toUpperCase() + "," + users[key][i].first_name.toUpperCase() + "-" + (users[key][i].first_name.length + users[key][i].last_name.length));
			
		}
	}	
