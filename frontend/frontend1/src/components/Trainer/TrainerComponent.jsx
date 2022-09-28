import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
import MemberService from '../../services/Member/MemberService';
import WorkoutplanService from '../../services/Workoutplan/WorkoutplanService';
class TrainerComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            memberName:'',
            memberContact:'',
            memberAge:'',
            gender:'',
            members:[],
            
        }
        this.reloadUserList = this.reloadUserList.bind(this);
        this.addWorkoutplan = this.addWorkoutplan.bind(this);
        this.logout = this.logout.bind(this);
        this.deleteWorkoutplan = this.deleteWorkoutplan.bind(this);
        
    }
    componentDidMount() {
        this.reloadUserList();
        MemberService.fetchMemberById().then((res) => {
            this.setState({
                members: res.data
            });
        });
    }
    reloadUserList() {
        var tid = window.localStorage.getItem("tId");
        console.log({tid})
        MemberService.fetchAllMembersByTrainerId(tid)
            .then((res) => {
                this.setState({members: res.data.result})
                console.log(this.state.members);
            });
    }
    addWorkoutplan=(id)=>{
        window.localStorage.setItem("memberId", id);
        this.props.history.push('/addwoplan');
    }
    deleteWorkoutplan=(id)=>{
        WorkoutplanService.deleteWorkoutplan(id)
           .then(res => {
               this.setState({message : res.data.message});
               if(res.data.message==='Workoutplans details deleted'){
                swal("Success!",res.data.message , "success");
               }
              else{
                swal("Wrong!","Workoutplan not added", "error");
              }
               //this.setState({members: this.state.members.filter(member => member.id !== id)});
           })

    }
    
    logout=(e)=>{
        window.localStorage.removeItem("memberId");
        window.localStorage.removeItem("mtId");
        this.props.history.push('/');
    }

    render() {
        return (
            <div class="trainer table">
            <div class="trainerpage">
                <h2 className="text-center" style={{fontSize:60,fontFamily:'fantasy',color:'white'}}>GYM TRAINER</h2>
            <h2 className="text-center" style={{fontSize:30,fontFamily:'fantasy',color:'white'}}>My Members</h2>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}><button className="btn btn-success" onClick={this.logout}>Logout</button></div>
                <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* <th className="hidden">Id</th>
                            <th><h5>Id</h5></th> */}
                            <th><h5>FullName</h5></th>
                            <th><h5>Contact</h5></th>
                            <th><h5>Age</h5></th>
                            <th><h5>Gender</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.members.map(
                        member =>
                                    <tr key={member.id}>
                                        <td>{member.id}</td>
                                        <td>{member.memberName}</td>
                                        <td>{member.memberContact}</td>
                                        <td>{member.memberAge}</td>
                                        <td>{member.gender}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.addWorkoutplan(member.id)}> Add WorkoutPlan</button>
                                            <button className="btn btn-success" onClick={() => this.deleteWorkoutplan(member.id)} style={{marginLeft: '20px'}}> Delete WorkoutPlan</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
                

      
              
            </div>
            

            </div>
        );
    }

}
export default TrainerComponent;