
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeComponent from "./components/Home/HomeComponent"
import LoginComponent from "./components/Login/LoginComponent"
import SignupComponent from "./components/Signup/SignupComponent"
import AdminComponent from "./components/Admin/AdminComponent"
import AddTrainerComponent from "./components/AddTrainer/AddTrainerComponent"
import AddMembershipComponent from "./components/AddMembership/AddMembershipComponent"
import TrainerComponent from "./components/Trainer/TrainerComponent"
// import AddWorkoutplanComponent from "./components/AddWorkoutplan/AddWorkoutplanComponent"
// import PaymentComponent from './components/Payment/PaymentComponent';
import MemberComponent from './components/Member/MemberComponent';
import MemberEditProfileComponent from './components/MemberEditProfile/MemberEditProfileComponent';
import ListOfMembershipsComponent from './components/ListOfMemberships/ListOfMembershipsComponent';
import ListOfTrainersComponent from './components/ListOfTrainers/ListOfTrainersComponent';
import TrainerEditProfileComponent from './components/TrainerEditProfile/TrainerEditProfileComponent';
import FooterComponent from './components/Footer/FooterComponent';
import CardComponent from './components/Card/CardComponent';
import AboutScreen from './screens/About/AboutScreen';

function App() {
  return (
    <div className="container">
      
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/signup" component={SignupComponent} />
            <Route path="/admin" component={AdminComponent} />
            <Route path="/addTrainer" component={AddTrainerComponent} />
            <Route path="/addMembership" component={AddMembershipComponent} />
            <Route path="/trainer" component={TrainerComponent} />
            {/* <Route path="/addwoplan" component={AddWorkoutplanComponent} /> */}
            {/* <Route path="/payment" component={PaymentComponent} /> */}
            <Route path="/member" component={MemberComponent} />
            <Route path="/editprofile" component={MemberEditProfileComponent} />
            <Route path="/listofmemberships" component={ListOfMembershipsComponent} />
            <Route path="/listoftrainers" component={ListOfTrainersComponent} />
            <Route path="/edittrainer" component={TrainerEditProfileComponent} />
            <Route path="/footer" component={FooterComponent} />
            <Route path="/card" component={CardComponent} /> 
            <Route path="/aboutus" component={AboutScreen} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
