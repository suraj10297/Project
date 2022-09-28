import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/gym/login';

class LoginService{
      Login(log){
      return axios.post(USER_API_BASE_URL,log);
   }
}

export default new LoginService();