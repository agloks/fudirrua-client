import axios from 'axios';

class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: "http://localhost:3010",
            withCredentials: true
        });
    }

    signup(name, login, email, password) {
        return this.service.post('/api/user/sign', {
                name,
                login,
                email,
                password
            })
            .then(response => response.data)
    }

    loggedin() {
        return this.service.get('/api/user/logged')
            .then(response => response.data)
    }

    login(email, password) {
        return this.service.post('/api/user/login', {
                email,
                password
            })
            .then(response => response.data)
    }

    logout() {
        return this.service.get('/api/user/logout')
            .then(response => response.data)
    }
}

export default AuthService;