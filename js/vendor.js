class Vendor {
	constructor(id, userId, firstname, lastname, email, phonenumber, username) {
		this.id = id;
		this.userId = userId;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.phonenumber = phonenumber;
		this.username = username;
	}
}

class Profile extends Vendor {
	constructor(username, email_verified) {
		this.username = username;
		this.email_verified;
	}
}

const person = new Vendor(1, 6755577, "Mike", "Solana");
console.log(person);
