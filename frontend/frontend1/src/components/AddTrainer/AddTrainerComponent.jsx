import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import FooterComponent from '../Footer/FooterComponent';

class AddTrainerComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            trainerName:'',
            trainerContact:'',
            trainerAddress:'',
            trainerEmail:'',
            trainerPassword:'',
            trainerAge:'',
            trainerGender:'',
            result:''
        }
        this.onValueChange=this.onValueChange.bind(this);
        this.addTrainer=this.addTrainer.bind(this);
        this.admin=this.admin.bind(this);
        this.valid=this.valid.bind(this);
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
            else if(this.state.trainerContact<10)
            {
                swal("Contact!","is required" , "error");
            }
            else if(this.state.trainerAddress.length<3)
            {
                swal("Address!","is required" , "error");
            }
            else if(this.state.trainerEmail.length<3)
            {
                swal("Email!","is required" , "error");
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
    admin=(e)=>
        {
            this.props.history.push('/admin');
        }
    addTrainer =(e) => {
        e.preventDefault();
        if(this.valid())
        {
            axios.post('http://localhost:8080/trainer/addtrainer',this.state)
            .then((res)=>{
             this.setState({message:res.data.message})
             console.log(res.response)
             if(res.data.result==='Email already exists'){
                swal("Wrong!",res.data.result , "error");
             }
             else if(res.data.result==='Welcome to Metal Muscle'){
                swal("Success!",res.data.message,"success");
             }
            })
            .catch((err)=>{
               this.setState({result:err.data.result})
              console.log(err.response)
              swal("Wrong!",err.data.result , "error");
             })
            
        }
            
    }   
    
    render(){
        return(
            <div>
            <div class="addtrainer"><br/>
               <h2 className="text-center">ADD TRAINER</h2>
               <form>
                 <div className="form-group" >
                    <label>FullName:</label>
                    <input type="text" placeholder="trainerName" name="trainerName"  className="form-control" value={this.state.trainerName} onChange={this.onChange} required="required"/>
                </div>
                <div className="form-group">
                    <label>Contact:</label>
                    <input type="text" placeholder="trainerContact" name="trainerContact" className="form-control" value={this.state.trainerContact} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" placeholder="trainerAddress" name="trainerAddress" className="form-control" value={this.state.trainerAddress} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="trainerEmail" name="trainerEmail" className="form-control" value={this.state.trainerEmail} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="trainerPassword" name="trainerPassword" className="form-control" value={this.state.trainerPassword} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" placeholder="trainerAge" name="trainerAge" className="form-control" value={this.state.trainerAge} onChange={this.onChange}/>
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
        
       
        <button className="btn btn-success" onClick={this.addTrainer}>Submit</button><br/><br/><br/>
      </form>
      <button className="btn btn-success" onClick={this.admin}>Back</button><br/><br/><br/>
  </div>
  <FooterComponent />
  </div>
        )
    }

}
export default AddTrainerComponent;