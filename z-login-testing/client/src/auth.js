const bcrypt = require('bcryptjs');

class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        this.authenticated = true;
        localStorage.setItem("234123jsfjodifisjf232304", this.authenticated);
        cb();
    }
    
    logout(cb) {
        this.authenticated = false;
        localStorage.setItem("234123jsfjodifisjf232304", this.authenticated);
        cb();
    }
    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();