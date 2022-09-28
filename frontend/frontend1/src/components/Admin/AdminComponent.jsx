import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
import FooterComponent from '../Footer/FooterComponent';
class AdminComponent extends Component{
    constructor(props){
        super(props)
        this.state={
        
        }
        this.addTrainer=this.addTrainer.bind(this);
        this.addMembership=this.addMembership.bind(this);
        this.listOfMemberships=this.listOfMemberships.bind(this);
        this.listOfTrainers=this.listOfTrainers.bind(this);
    }

    addTrainer =(e) => {
        e.preventDefault();
         this.props.history.push('/addTrainer');
    }
    addMembership =(e) => {
    e.preventDefault();
     this.props.history.push('/addMembership');
    }
    listOfMemberships =(e) => {
        e.preventDefault();
         this.props.history.push('/listofmemberships');
    }
    listOfTrainers =(e) => {
        e.preventDefault();
         this.props.history.push('/listoftrainers');
    }
    logout=(e)=>{
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <footer class="container-fluid bg-dark my-0 py-3 text-light">
                <br></br>
                <h1><b>The Metal Muscle</b></h1>
                <div class="container col-sm-30 mt-30 ">
                    
                    <p class="mb-5 ">
                    <button><Link to="/Home">Home </Link></button>
                    <button><Link to="/login">Login Here </Link></button>
                    <button><Link to="/signup">Register Here</Link></button>
                    <button><Link to="/about">About Us</Link></button>
                    </p>
                </div>
                </footer>
            <div class="admin"><br/>
               <div class ="admin-text">
               
               <h1><b>THE METAL MUSCLE</b></h1>
               <h1>WELCOME</h1>
               <h1>ADMIN!!</h1>
               </div>
               <div class="button">
               <div style={{ display: 'flex', justifyContent: 'flex-end' }}></div>
               
               <button className="btn btn-success" onClick={this.addTrainer}>Add Trainer</button><br/><br/>
               <button className="btn btn-success" onClick={this.listOfTrainers}>List Of Trainers</button><br/><br/>
               <button className="btn btn-success" onClick={this.addMembership}>Add Membership</button><br/><br/>
               <button className="btn btn-success" onClick={this.listOfMemberships}>List Of Memberships</button><br/><br/>
               <button className="btn btn-success" onClick={this.logout}>Logout</button>
               </div>
             </div>
             {/* <FooterComponent /> */}

            </div>
        )
    }

}
export default AdminComponent;