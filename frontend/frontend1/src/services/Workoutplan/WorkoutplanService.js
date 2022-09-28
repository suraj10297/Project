import axios from 'axios';

const WORKOUTPLAN_DELETE_API_BASE_URL = 'http://localhost:8080/gym/deletewo';
const MEMBERWORKOUTPLAN_DELETE_API_BASE_URL = 'http://localhost:8080/gym/getmywoplan';


class WorkoutplanService {

    deleteWorkoutplan(memberId) {
        return axios.delete(WORKOUTPLAN_DELETE_API_BASE_URL + '/' + memberId);
    }
    fetchWorkoutplan(workoutplanId) {
        return axios.get(MEMBERWORKOUTPLAN_DELETE_API_BASE_URL + '/' + workoutplanId);
    }
}
export default new WorkoutplanService();