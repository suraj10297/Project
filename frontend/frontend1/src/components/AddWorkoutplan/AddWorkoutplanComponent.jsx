import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import FooterComponent from '../Footer/FooterComponent';

class AddWorkoutplanComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            workoutDate:'',
            workoutTime:'',
            workoutName:'',
            memberId:'',
            message:''
        }
        this.addWorkoutplan = this.addWorkoutplan.bind(this);
        this.valid = this.valid.bind(this);
        this.trainer = this.trainer.bind(this);
        this.memberId = this.memberId.bind(this);
    }
    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });
    
    valid=(e)=>{
        if(this.state.workoutDate.length===0)
        {
            swal("Date!","is required" , "error");
        }
        else if(this.state.workoutTime.length===0)
        {
            swal("Time!","is required" , "error");
        }
        else if(this.state.workoutName.length<3)
        {
            swal("Name!","is required" , "error");
        }
        else if(this.state.memberId.length<1)
        {
            swal("Id!","is required" ,"error");
        }
        else{
            return true;
        }
    }
    trainer=(e)=>{
        this.props.history.push('/trainer');
    }

    componentDidMount() {
        this.memberId();
    }
    memberId=(e)=>{
        var tid = window.localStorage.getItem("memberId");
        this.setState({memberId:tid})
    }
    addWorkoutplan =(e) => {
    
        e.preventDefault();
        if(this.valid())
        {
            axios.post('http://localhost:8080/gym/addwoplan',this.state)
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
            <div class="addworkout">
            <div><br/>
               <h2 className="text-center">ADD WORKOUTPLAN</h2>
               <form>
                 <div className="form-group" >
                    <label>Date:</label>
                    <input type="text" placeholder="Date" name="workoutDate"  className="form-control" value={this.state.workoutDate} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label>Time:</label>
                    <input type="text" placeholder="Time" name="workoutTime" className="form-control" value={this.state.workoutTime} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Workout Name:</label>
                    <input type="text" placeholder="WorkoutName" name="workoutName" className="form-control" value={this.state.workoutName} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>MemberId:</label>
                    <input type="number" placeholder={this.state.memberId} name="memberId" className="form-control" value={this.state.memberId} onChange={this.onChange} readOnly/>
                </div>
        <button className="btn btn-success" onClick={this.addWorkoutplan}>Submit</button><br/><br/><br/>
      </form>
      <button className="btn btn-success" onClick={this.trainer}>Back</button><br/><br/><br/>
  </div>
  </div>
  <FooterComponent />
  </div>
        )
    }
}
export default AddWorkoutplanComponent;