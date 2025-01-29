//no.2
	var firstName = prompt();
	var lastName = prompt();
	var birthYear = prompt();

	var age = 2025 - birthYear;

	let answer = document.getElementById("answer").innerHTML = "Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";