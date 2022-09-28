/* eslint-disable no-undef */
import axios from 'axios';

const ADMIN_API_BASE_URL = 'http://localhost:8080/trainer/getalltrainers';
const MEMBERSHIPS_API_BASE_URL = 'http://localhost:8080/gym/getallmemberships';

class SignupService {

    fetchTrainers() {
        return axios.get(TRAINER_API_BASE_URL);
    }
    fetchMemberships() {
        return axios.get(MEMBERSHIPS_API_BASE_URL);
    }
}
export default new SignupService();