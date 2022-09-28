import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';


class MemberEditProfileComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            memberName:'',
            memberAddress:'',
            memberContact:'',
            memberPassword:'',
            memberAge:'',
            gender:'',
            message:'',
        }
        this.onValueChange=this.onValueChange.bind(this);
        this.editProfile=this.editProfile.bind(this);
        this.member=this.member.bind(this);
        this.valid=this.valid.bind(this);
    }
    
    member=(e)=>{
        this.props.history.push('/member');
    }
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
        
    onValueChange(event) {
            this.setState({
              gender: event.target.value
            });
          }
    valid=(e)=>{
        if(this.state.memberName.length<3)
        {
            swal("Name!","is required" , "error");
        }
        else if(this.state.memberAddress.length<3)
        {
            swal("Address!","is required" , "error");
        }
        else if(this.state.memberContact<10)
        {
            swal("Contact!","is required" , "error");
        }
        else if(this.state.memberPassword.length<2)
        {
            swal("Password!","is required" , "error");
        }
        else if(this.state.memberAge.length!==2)
        {
            swal("Age!","is required" , "error");
        }
        else if(this.state.gender!=='M' && this.state.gender!=='F' && this.state.gender!=='O')
        {
            swal("Gender!","select gender" , "error");
        }
            else{
                return true;
            }
        }

    editProfile=(e) => {
    
        e.preventDefault();
        if(this.valid())
        {
            var memberId = window.localStorage.getItem("mtId");
            console.log({memberId})
            const EDITPROFILE_API_BASE_URL = 'http://localhost:8080/gym/update';
            axios.put(EDITPROFILE_API_BASE_URL + '/' + memberId, this.state)
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
            <div>
                <br/><h2 className="text-center">EDIT PROFILE</h2>
                <form>
                 <div className="form-group" >
                    <label>Name:</label>
                    <input type="text" placeholder="Name" name="memberName"  className="form-control" value={this.state.memberName} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" placeholder="Address" name="memberAddress" className="form-control" value={this.state.memberAddress} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Contact:</label>
                    <input type="number" placeholder="Contact" name="memberContact" className="form-control" value={this.state.memberContact} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Password" name="memberPassword" className="form-control" value={this.state.memberPassword} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" placeholder="Age" name="memberAge" className="form-control" value={this.state.memberAge} onChange={this.onChange}/>
                </div>
                <label>Choose Gender:</label><br/>
                <div className="radio">
                
          <label>
            <input
              type="radio"
              value="M"
              checked={this.state.gender === "M"}
              onChange={this.onValueChange}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="F"
              checked={this.state.gender === "F"}
              onChange={this.onValueChange}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="O"
              checked={this.state.gender === "O"}
              onChange={this.onValueChange}
            />
            Other
          </label>
        </div>
        <div>
          Selected option is : {this.state.gender}
        </div><br/>
        <button className="btn btn-success" onClick={this.editProfile}>Submit</button><br/><br/><br/>
      </form>
      <button className="btn btn-success" onClick={this.member}>Back</button><br/><br/><br/>

            </div>
        )
    }
}
export default MemberEditProfileComponent;