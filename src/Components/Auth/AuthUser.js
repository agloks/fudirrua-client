import axios from 'axios';

class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: process.env.REACT_APP_URL,
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
            .then(response => {return response.data})
    }

    login(email, password) {
        return this.service.post('/api/user/login', {
                email,
                password
            })
            .then(response => response.data)
    }

    async logout() {
        this.service.get('/api/user/logout')
        return null
    }
}

export default AuthService;