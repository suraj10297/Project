/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import WorkoutplanService from '../../services/Workoutplan/WorkoutplanService';
import TrainerService from '../../services/Trainer/TrainerService';
import MemberService from '../../services/Member/MemberService';
class MemberComponent extends Component{
    constructor(props){
        
        super(props)
        this.state={
            workoutplan:'',
            workoutTime:'',
            workoutName:'',
            trainerName:'',
            trainerContact:'',
            trainerAge:'',
            memberName:'',
            memberAddress:'',
            memberContact:'',
            memberAge:'',

              
        }
        this.payment = this.payment.bind(this);
        this.logout = this.logout.bind(this);
        this.reloadWorkotplan = this.reloadWorkotplan.bind(this);
        this.reloadFetchTrainer = this.reloadFetchTrainer.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }
    payment =(e) =>{
        this.props.history.push('/payment');
    }
    logout=(e)=>{
        window.localStorage.removeItem("mtId");
        this.props.history.push('/');
    }
    componentDidMount() {
        this.reloadWorkotplan();
        this.reloadFetchTrainer();
       // Member.fetchMemberById().then((res) => {

        //});
    }
    reloadWorkotplan(){
        var memberloginId = window.localStorage.getItem("id");
        console.log({memberloginId})
        WorkoutplanService.fetchWorkoutplan(memberloginId)
        .then((res) => {
            this.setState({workoutTime: res.data.workoutTime, workoutName: res.data.workoutName})
            console.log(this.state.users);
        });
    }
    editProfile=(e)=>{
    this.props.history.push('/editprofile');
    }
    reloadFetchTrainer(){
         var memberId = window.localStorage.getItem("tId");
         console.log({memberId})
         TrainerService.fetchTrainerByMemberId(memberId)
        .then((res) => {
            this.setState({trainerName: res.data.selectedTrainer.trainerName, 
                           trainerContact: res.data.selectedTrainer.trainerContact, 
                           trainerAge:  res.data.selectedTrainer.trainerAge, 
                           memberName: res.data.memberName, 
                           memberAddress: res.data.memberAddress, 
                           memberContact: res.data.memberContact,
                           memberAge: res.data.memberAge})
            console.log(res.data.selectedTrainer.trainerName);
        });
    }

render(){
        return(
            <div><br/>
                 <h2 className="text-center"><b>GYM MEMBER DETAILS</b></h2>
            <br/><br/>
            
            <table >
                    <thead>
                        <tr>
                           
                        
                            <th><button className="btn btn-success" onClick={this.editProfile}>Edit Profile</button></th>&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <th><div style={{ display: 'flex', justifyContent: 'flex-end' }}><button className="btn btn-success" onClick={this.logout}>Logout</button></div></th>

                        </tr>
                    </thead>
                    
                    
                </table>
                <br/><br/><br/>
                    <h2 className="text-center">My Trainer</h2><br/><br/>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                        <th><h5></h5></th>
                        <th><h5></h5></th>
                            <th><h5></h5></th>
                            <th><h5>Name</h5></th>
                            <th><h5>Contact</h5></th>
                            <th><h5>Age</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                    <th><h5></h5></th>
                            <th><h5></h5></th>
                            <th><h5></h5></th>
                            <th><h5>&nbsp;&nbsp;{this.state.trainerName}</h5></th>
                            <th><h5>{this.state.trainerContact}</h5></th>
                            <th><h5>&nbsp;&nbsp;{this.state.trainerAge}</h5></th>
                    </tbody>
                    
                </table>
                <br/><br/><br/>
                    <h2 className="text-center">My Profile</h2><br/><br/>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                        <th><h5></h5></th>
                        <th><h5></h5></th>
                            <th><h5></h5></th>
                            <th><h5>Name</h5></th>
                            <th><h5>Address</h5></th>
                            <th><h5>Contact</h5></th>
                            <th><h5>Age</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                    <th><h5></h5></th>
                            <th><h5></h5></th>
                            <th><h5></h5></th>
                            <th><h5>{this.state.memberName}</h5></th>
                            <th><h5>&nbsp;&nbsp;{this.state.memberAddress}</h5></th>
                            <th><h5>{this.state.memberContact}</h5></th>
                            <th><h5>&nbsp;&nbsp;{this.state.memberAge}</h5></th>
                    </tbody>
                    
                </table><br/><br/>
            </div>
        )
    }
}
export default MemberComponent;