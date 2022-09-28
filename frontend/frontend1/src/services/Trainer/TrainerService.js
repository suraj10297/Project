import axios from 'axios';

const ALLTRAINER_API_BASE_URL = 'http://localhost:8080/trainer/getalltrainers';
const SPECIFIC_TRAINER_API_BASE_URL = 'http://localhost:8080/gym/getmemberbyid';
const DELETE_TRAINER_API_BASE_URL = 'http://localhost:8080/trainer';


class TrainerService {

    fetchTrainers() {
        return axios.get(ALLTRAINER_API_BASE_URL);
    }
    fetchTrainerByMemberId(memberId) {
        return axios.get(SPECIFIC_TRAINER_API_BASE_URL + '/' + memberId);
    }
    deleteTrainer(trainerId) {
        return axios.delete(DELETE_TRAINER_API_BASE_URL + '/' + trainerId);
    }
}
export default new TrainerService();