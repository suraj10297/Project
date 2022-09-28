/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import TrainerService from "../../services/Trainer/TrainerService";
import MembershipsService from "../../services/Memberships/MembershipsService";
import { Link } from 'react-router-dom'


class SignupComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            memberName:'',
            memberAddress:'',
            memberContact:'',
            memberEmail:'',
            memberPassword:'',
            memberAge:'',
            gender:'',
            selectedTrainer:{id:''},            
            trainers:[],
            joiningDate:'',
            endOfMembershipDate:'',
            membershipId:'',
            memberships:[],
            message:null,
            isLoggedIn:'',
            result:''
        }
        this.onValueChange=this.onValueChange.bind(this);
        this.reloadTrainerList = this.reloadTrainerList.bind(this);
        this.reloadMembershipsList = this.reloadMembershipsList.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleDropdownChangeTrainer = this.handleDropdownChangeTrainer.bind(this);
        this.valid=this.valid.bind(this);
    }
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
        
    onValueChange(event) {
            this.setState({
              gender: event.target.value
            });
          }
    handleDropdownChange(e) {
            this.setState({ membershipId: e.target.value });
          }
    handleDropdownChangeTrainer(e) {
            const newstate = {...this.state.selectedTrainer,id:e.target.value}
            this.setState({ selectedTrainer: newstate });
            
          }
    componentDidMount() {
            this.reloadTrainerList();
            this.reloadMembershipsList();
        }
    
        reloadTrainerList() {
            TrainerService.fetchTrainers()
                .then((res) => {
                    this.setState({trainers: res.data})
                    console.log(this.state.trainers);
                });
        }
        reloadMembershipsList() {
            MembershipsService.fetchMemberships()
                .then((res) => {
                    this.setState({memberships: res.data})
                    console.log(this.state.memberships);
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
            else if(this.state.memberEmail.length<3)
            {
                swal("Email!","is required" , "error");
            }
            
            else if(this.state.memberPassword.length<2)
            {
                swal("Password!","is required" , "error");
            }
            else if(this.state.memberAge.length!==2)
            {
                swal("Age!","is required" , "error");
            }
            else if(this.state.membershipId===0)
            {
                swal("membership!","is required" , "error");
            }
            
            else if(this.state.selectedTrainer.id===0)
            {
                swal("Trainer!","select trainer" , "error");
            }
            else if(this.state.gender!=='M' && this.state.gender!=='F' && this.state.gender!=='O')
            {
                swal("Gender!","select gender" , "error");
            }
            else if(this.state.joiningDate===0)
            {
                swal("joiningDate!","select joiningDate" , "error");
            }
            else if(this.state.endOfMembershipDate===0){
               swal("endOfMembershipDate", "select endOfMembershipDate","error");
            }
           
            else{
                return true;
            }
        }

        onsignUp =(e) => {
            e.preventDefault();
            if(this.valid()){
            axios.post('http://localhost:8080/gym/signup',this.state)
            .then((res)=>{
             this.setState({result:res.data.result})
             console.log(res.response)
             if(res.data.result==='Email already exists'){
                swal("Wrong!",res.data.result , "error");
             }
              else if(res.data.result==='Welcome to Metal Muscle'){
                 swal("Success!",res.data.result , "success");
              }
            })

            .catch((err)=>{
                this.setState({result:err.data.result})
             console.log(err.response)
              swal("Wrong!",err.data.result , "error");
               
            });
            }
            
 }


    render(){
        return(
            <div>
                <footer class="container-fluid bg-dark my-0 py-3 text-light">
                    <br></br>
                    <h1><b>The Metal Muscle</b></h1>
                   
                
                
                <div class="container col-md-8 mt-8 ">
                    <p class="mb-5 ">
                    <button> <b><Link to="/home">  Home </Link></b></button>
               <button><b><Link to="/login">  Login Here </Link></b></button>
               <button><b><Link to="/signup">  Register Here  </Link></b></button>
               <button><b><Link to="/about">   About Us  </Link> </b>   </button>
                    </p>
                </div>
                </footer>
            <div class="signup"><br/><h2 className="text-center">SIGNUP</h2><br/>
            <container>
                 <form>
                 <div className="form-group" >
                    <label>FullName:</label>
                    <input type="text" placeholder="MemberName" name="memberName"  className="form-control" value={this.state.memberName} onChange={this.onChange} required="required"/>
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" placeholder="MemberAddress" name="memberAddress" className="form-control" value={this.state.memberAddress} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Contact:</label>
                    <input type="text" placeholder="MemberContact" name="memberContact" className="form-control" value={this.state.memberContact} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="MemberEmail" name="memberEmail" className="form-control" value={this.state.memberEmail} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="MemberPassword" name="memberPassword" className="form-control" value={this.state.memberPassword} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" placeholder="memberAge" name="memberAge" className="form-control" value={this.state.memberAge} onChange={this.onChange}/>
                </div>
                <div className="drop-down">
                <label>Select Membership</label><br/>
                <select onChange={this.handleDropdownChange}>
                    {
                        this.state.memberships.map(ms=><option value={ms.id}>{ms.membershipName}</option>)
                    }
                </select>
                </div><br/>
                
                <div className="drop-down">
                <label>Select Trainer</label><br/>
                <select onChange={this.handleDropdownChangeTrainer}>
                    {
                        this.state.trainers.map(ms=><option value={ms.id}>Name : {ms.trainerName}, Gender: {ms.trainerGender}</option>)
                    }
                </select>
                </div><br/>
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
                <div className="form-group">
                    <label>Joining Date:</label>
                    <input type="date" placeholder="joiningDate" name="joiningDate" className="form-control" value={this.state.joiningDate} onChange={this.onChange}/>
                </div>
                <div>

                <div className="form-group">
                    <label>end Of Membership Date:</label>
                    <input type="date" placeholder="endOfMembershipDate" name="endOfMembershipDate" className="form-control" value={this.state.endOfMembershipDate} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.onsignUp}>Submit</button>
                <div className="col-md-12 ">
                          <div className="form-group">
                             Already have an account?<span className="text-center"> <Link to='/login'>SignIn here</Link></span>
                        </div>
                       </div>

            </div>
                
            </form><br/><br/><br/>
            
             </container>
            
                        </div>
                        {/* <FooterComponent />  */}
                       </div >
             
        );
    }
}
export default SignupComponent;