import axios from 'axios';

const MEMBER_API_BASE_URL = 'http://localhost:8080/gym/getallmembers';
const MEMBERBYID_API_BASE_URL = 'http://localhost:8080/gym/getmemberbyid';



class MemberService {

    fetchAllMembersByTrainerId(trainerId) {
        return axios.get(MEMBER_API_BASE_URL + '/' + trainerId);
    }
    fetchMemberById(memberId) {
        return axios.get(MEMBERBYID_API_BASE_URL + '/' + memberId);
    }

}
export default new MemberService();