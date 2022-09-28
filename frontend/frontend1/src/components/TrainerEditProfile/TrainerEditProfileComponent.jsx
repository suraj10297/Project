import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';


class TrainerEditProfileComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            trainerName:'',
            trainerContact:'',
            trainerAddress:'',
            trainerPassword:'',
            trainerAge:'',
            trainerGender:'',
            message:'',
        }
        this.onValueChange=this.onValueChange.bind(this);
        this.editProfile=this.editProfile.bind(this);
        this.trainer=this.trainer.bind(this);
        this.valid=this.valid.bind(this);
    }
    
    trainer=(e)=>{
        this.props.history.push('/listoftrainers');
    }
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
        
    onValueChange(event) {
            this.setState({
                trainerGender: event.target.value
            });
          }
    valid=(e)=>{
        if(this.state.trainerName.length<3)
        {
            swal("Name!","is required" , "error");
        }
        else if(this.state.trainerAddress.length<3)
        {
            swal("Address!","is required" , "error");
        }
        else if(this.state.trainerContact<10)
        {
            swal("Contact!","is required" , "error");
        }
        else if(this.state.trainerPassword.length<2)
        {
            swal("Password!","is required" , "error");
        }
        else if(this.state.trainerAge.length!==2)
        {
            swal("Age!","is required" , "error");
        }
        else if(this.state.trainerGender!=='M' && this.state.trainerGender!=='F' && this.state.trainerGender!=='O')
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
            var trainerId = window.localStorage.getItem("trainerId");
            console.log({trainerId})
            const EDITPROFILE_API_BASE_URL = 'http://localhost:8080/trainer/update';
            axios.put(EDITPROFILE_API_BASE_URL + '/' + trainerId, this.state)
            .then((res)=>{
             this.setState({message:res.data.message})
             console.log(res.response)
            swal("Success !",res.data.message , "success");             
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
                <br/><h2 className="text-center">EDIT TRAINER PROFILE</h2>
                <form>
                 <div className="form-group" >
                    <label>Name:</label>
                    <input type="text" placeholder="Name" name="trainerName"  className="form-control" value={this.state.trainerName} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" placeholder="Address" name="trainerAddress" className="form-control" value={this.state.trainerAddress} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Contact:</label>
                    <input type="number" placeholder="Contact" name="trainerContact" className="form-control" value={this.state.trainerContact} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Password" name="trainerPassword" className="form-control" value={this.state.trainerPassword} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" placeholder="Age" name="trainerAge" className="form-control" value={this.state.trainerAge} onChange={this.onChange}/>
                </div>
                <label>Choose Gender:</label><br/>
                <div className="radio">
                
          <label>
            <input
              type="radio"
              value="M"
              checked={this.state.trainerGender === "M"}
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
              checked={this.state.trainerGender === "F"}
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
              checked={this.state.trainerGender === "O"}
              onChange={this.onValueChange}
            />
            Other
          </label>
        </div>
        <div>
          Selected option is : {this.state.trainerGender}
        </div><br/>
        <button className="btn btn-success" onClick={this.editProfile}>Submit</button><br/><br/><br/>
      </form>
      <button className="btn btn-success" onClick={this.trainer}>Back</button><br/><br/><br/>

            </div>
        )
    }
}
export default TrainerEditProfileComponent;