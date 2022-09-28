/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom'
import FooterComponent from '../../components/Footer/FooterComponent';
class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            umtEmail :'',
            umtPassword :'',
            umtRole :'',
            message:null,
            mtId:'',
            isLoggedIn:'',
            id:''
        }
        this.onLogin=this.onLogin.bind(this);
}
onLogin =(e) => {
           e.preventDefault();
           axios.post('http://localhost:8080/gym/login',this.state)
           .then((res)=>{
            this.setState({umtRole:res.data.umtRole, mtId:res.data.mtId, id:res.data.id})
               if(this.state.umtRole==='MEMBER'){
                window.localStorage.setItem("mtId", this.state.mtId);
                window.localStorage.setItem("id", this.state.id);
                this.props.history.push('/member');
               }
               if(this.state.umtRole==='ADMIN'){
                this.props.history.push('/admin');
               }
               if(this.state.umtRole==='TRAINER'){
                window.localStorage.setItem("mtId", this.state.mtId);
                this.props.history.push('/trainer');
               }
              
               console.log(res.data)
              })
           .catch((err)=>{
               console.log(err.response.data)
              this.setState({message:err.response.data.message, isLoggedIn:'false'})
              swal("Wrong!",err.response.data.message , "error");
           })
}

  

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
        



    render(){
       
      let error='';
        if(this.state.message){
            error=(
                <div className ="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }
        return (  
                
        <div>
            
                <footer class="container-fluid bg-dark my-0 py-3 text-light"> 
               <br></br>
               <h1><b>The Metal Muscle</b></h1>
               <div class="container col-md-30 mt-30 ">
               <p class="mb-10 ">
               <button> <b><Link to="/home">Home |</Link></b></button>
               <button><b><Link to="/login">Login Here |</Link></b></button>
               <button><b><Link to="/signup">Register Here</Link></b></button>
               <button><b><Link to="/about">About Us</Link> </b>   </button>
               </p>
             </div>
             </footer>
            
            <div className ="login">
                <Container>
                        <br/>
                        <h2 className="text-center">Login</h2>
                    <form><br/>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" placeholder="Email" name="umtEmail" className="form-control" value={this.state.umtEmail} onChange={this.onChange}/>
                        </div>

                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" placeholder="Password" name="umtPassword" className="form-control" value={this.state.umtPassword} onChange={this.onChange}/>
                        </div>
                        <button className="btn btn-success" onClick={this.onLogin}>Login</button>
                        <div className="form-group">
                         Don't have account?<span className="text-center"> <Link to="/signup">Sign Up here</Link></span>
                          </div>
                          { <Container>

                          <h3>WELCOME!!!</h3>
                          <h3>WELCOME TO THE METAL MUSCLE</h3>
                          
                          </Container> }
                    </form>
            </Container>
           
               
            
            </div>
            
        </div>
        );
    }
       
} 
 

export default LoginComponent;