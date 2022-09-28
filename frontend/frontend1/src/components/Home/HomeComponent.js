/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import SliderComponent from '../Slider/SliderComponent';
import CardComponent from '../Card/CardComponent';
import { Carousel } from 'react-bootstrap'
import FooterComponent from '../Footer/FooterComponent';
import { Link } from "react-router-dom";
import HomeService from '../../services/Home/HomeService';
class HomeComponent extends Component{
    constructor(props){
        super(props)
        this.state={

        }
       this.login=this.login.bind(this);
       
       this.signup=this.signup.bind(this);
       
       this.home=this.home.bind(this);
    }
    login(){
        this.props.history.push('/login');
    }
    signup(){
        this.props.history.push('/signup');
    }
    home(){
        this.props.history.push('/home');
    }
    render(){
        return(
            <div className="home">
                
                 
                <footer class="container-fluid bg-dark my-0 py-3 text-light">
                <br></br>
                <br></br>
                <div class="container col-sm-30 mt-30 ">
                    <p class="mb-5 ">
                    <button> <b><Link to="/home">Home |</Link></b></button>
               <button><b><Link to="/login">Login Here |</Link></b></button>
               <button><b><Link to="/signup">Register Here</Link></b></button>
               <button><b><Link to="/about">About Us</Link> </b>   </button>
                    </p>
                </div>
                </footer> 
                 <SliderComponent /> 
             
            {/* <FooterComponent/> */}
            </div>

        )
    }
}
export default HomeComponent;