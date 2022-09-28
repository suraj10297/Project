import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import FooterComponent from '../Footer/FooterComponent';

class AddMembershipComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            membershipName:'',
            membershipAmount:'',
            membershipPeriod:'',
            message:''
        }
        this.addMembership=this.addMembership.bind(this);
        this.valid=this.valid.bind(this);
        this.admin=this.admin.bind(this);
    }
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
        

    valid=(e)=>{
            if(this.state.membershipName.length<3)
            {
                swal("Name!","is required" , "error");
            }
            else if(this.state.membershipAmount<2)
            {
                swal("Amount!","is required" , "error");
            }
            else if(this.state.membershipPeriod.length<3)
            {
                swal("Period!","is required" , "error");
            }
            else{
                return true;
            }
        }
        admin=(e)=>
        {
            this.props.history.push('/admin');
        }
    addMembership =(e) => {
        e.preventDefault();
        if(this.valid())
        {
            axios.post('http://localhost:8080/gym/addmembership',this.state)
            .then((res)=>{
             this.setState({result:res.data.result})
             console.log(res.response)
            swal("Success!",res.data.message ,"success");             
            })
            .catch((err)=>{
                this.setState({result:err.data.message})
             console.log(err.response)
              swal("Wrong!",err.data.message , "error");
            })
        }
            
    }
    render(){
        return(
            <div>
            <div class="addmembership"><br/>
               <h2 className="text-center">ADD MEMBERSHIP</h2>
               <form>
                 <div className="form-group" >
                    <label>Membership Name:</label>
                    <input type="text" placeholder="Name" name="membershipName"  className="form-control" value={this.state.membershipName} onChange={this.onChange} required="required"/>
                </div>
                <div className="form-group">
                    <label>Amount:</label>
                    <input type="number" placeholder="Amount" name="membershipAmount" className="form-control" value={this.state.membershipAmount} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Period:</label>
                    <input type="text" placeholder="Period" name="membershipPeriod" className="form-control" value={this.state.membershipPeriod} onChange={this.onChange}/>
                </div>
        <button className="btn btn-success" onClick={this.addMembership}>Submit</button><br/><br/><br/>
      </form>
      <button className="btn btn-success" onClick={this.admin}>Back</button><br/><br/><br/>
  </div>
   <FooterComponent />
  </div>
        )
    }

}
export default AddMembershipComponent;