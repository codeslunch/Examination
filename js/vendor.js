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
		super(firstname);
		this.username = username;
		this.email_verified = email_verified;
	}
}

const vendor = new Profile("codingwithzain", true);
