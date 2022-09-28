import axios from 'axios';


const PAYMENT_API_BASE_URL = 'http://localhost:8080/payment/addpayment';

class PaymentService {

    
    addPayment() {
        return axios.post(PAYMENT_API_BASE_URL);
    }
}
export default new PaymentService();