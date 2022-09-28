import axios from 'axios';


const MEMBERSHIPS_API_BASE_URL = 'http://localhost:8080/gym/getallmemberships';
const MEMBERSHIPAMOUNT_API_BASE_URL = 'http://localhost:8080/gym/getamount';
const DELETEMEMBERSHIP_API_BASE_URL = 'http://localhost:8080/gym/delete';

class MembershipsService {

    
    fetchMemberships() {
        return axios.get(MEMBERSHIPS_API_BASE_URL);
    }
    fetchMembershipAmount(membershipId) {
        return axios.get(MEMBERSHIPAMOUNT_API_BASE_URL + '/' + membershipId);
    }
    deleteMembership(membershipId) {
        return axios.delete(DELETEMEMBERSHIP_API_BASE_URL + '/' + membershipId);
    }

}
export default new MembershipsService();