import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
import MemberService from '../../services/Member/MemberService';
import MembershipService from '../../services/Memberships/MembershipsService';
class PaymentComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            paymentAmount:'',
            paymentDate:'',
            memberId:'',
            member:'',
            membershipId:'2',
            membership:'',
            message:'',

        }
        this.memberId = this.memberId.bind(this);
        this.addPayment = this.addPayment.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
        this.back = this.back.bind(this);
        this.logout = this.logout.bind(this);
        this.fetchMembershipAmount = this.fetchMembershipAmount.bind(this);
        this.getData = this.getData.bind(this);
    }
    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });
    
    componentDidMount() {
        this.memberId();
        this.reloadUserList();
        this.getData();
       // this.timer = setInterval(() => { fetchMembershipAmount(this.state.membershipId)}, 5000);
        //setTimeout(this.fetchMembershipAmount(this.state.membershipId),5000)
       // this.fetchMembershipAmount(this.state.membershipId);
            swal({
              title: "Red Alert!",
              text: "Redirecting To Payment Page In 5 Seconds",
              timer: 5000,
              showConfirmButton: false
            });
    }
    getData(){
        setTimeout(this.fetchMembershipAmount(this.state.membershipId),5000)
    }
    fetchMembershipAmount=(membershipId)=>{
        MembershipService.fetchMembershipAmount(membershipId)
            .then((res) => {
            this.setState({membership: res.data, paymentAmount: res.data.membershipAmount})
            console.log(this.state.membership);
            console.log(this.state.membershipId);
            
        });
    }
    reloadUserList() {
        var tid = window.localStorage.getItem("mtId");
        console.log({tid})
        MemberService.fetchMemberById(tid)
            .then((res) => {
                this.setState({member: res.data,membershipId:res.data.membershipId})
                //console.log(this.state.member);
                console.log(this.state.membershipId);
                
            });
    }
    memberId=(e)=>{
        var tid = window.localStorage.getItem("mtId");
        this.setState({memberId:tid})
    }
    back=(e)=>{
        this.props.history.push('/member');
    }
    logout=(e)=>{
        this.props.history.push('/');
    }
    valid=(e)=>{
        if(this.state.paymentDate.length===0)
        {
            swal("Date!","is required" , "error");
        }
        else{
            return true;
        }
    }
    addPayment =(e) => {
    
        e.preventDefault();
        if(this.valid())
        {
            axios.post('http://localhost:8080/payment/addpayment',this.state)
            .then((res)=>{
             this.setState({message:res.data.message})
             console.log(res.response)
            swal("Success!",res.data.message , "success");             
            })
            .catch((err)=>{
                this.setState({message:err.data.message})
             console.log(err.response)
              swal("Wrong!",err.data.message , "error");
               
            })
        }
            
 }
    render(){
        return(
            <div class="payment"><br/>
            <h2 className="text-center">PAYMENT</h2>
            <form>
              <div className="form-group" >
                 <label>Amount:</label>
                 <input type="number" placeholder={this.state.membershipAmount} name="paymentAmount"  className="form-control" value={this.state.paymentAmount} onChange={this.onChange} readOnly/>
             </div>
             <div className="form-group">
                 <label>Date:</label>
                 <input type="text" placeholder="Date" name="paymentDate" className="form-control" value={this.state.paymentDate} onChange={this.onChange}/>
             </div>
             <div className="form-group">
                 <label>MemberId:</label>
                 <input type="number" placeholder={this.state.memberId} name="memberId" className="form-control" value={this.state.memberId} onChange={this.onChange} readOnly/>
             </div>
     <button className="btn btn-success" onClick={this.addPayment}>Submit</button><br/><br/><br/>
     <button className="btn btn-success" onClick={this.back}>Back</button><br/><br/><br/>
   </form>
</div>
            
        )
    }

}
export default PaymentComponent;
