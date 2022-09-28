
import SliderComponent from '../../components/Slider/SliderComponent';
import CardComponent from '../../components/Card/CardComponent';
import FooterComponent from '../../components/Footer/FooterComponent';




import { Container } from 'reactstrap';

const AboutScreen=(props)=>{
    return(
        
        <div class ="about">
            <h5>About Us</h5>
           
            <p color = "white">We want to make health and fitness available to everyone, whatever your lifestyle. 
                That’s why we’ve created a gym at a great price that’s always open. 
                We’re making sure the fitness equipment is world class, while saving on fussy extras.
                So what’s the catch? There isn’t one. We’re not charging for any frills: you can expect nice, 
                clean changing rooms – just no sauna or free towel. And our hi-tech entry system lets you get 
                in at any time you like, even during the hours without a staff member around.</p>
            <p>Our Staff, Trainers & Group exercise instructors are committed to offering our members a 
               great fitness experience. Whether you’re a mom looking to get back into shape, 
               a marathon runner trying to shave a few minutes off your personal best or just trying to 
               stay healthy we would love to help you realize your potential and meet your goals!!</p>
            <p>We are an ambitious company and we’re always looking for great people to join our team –
               from personal trainers, group exercise instructors and club managers to our front-of-house teams.
               We’re committed to training, so you’ll be encouraged to improve your existing skills while you develop 
               new ones.</p>

            <FooterComponent/>
        </div>
      
   )
}
export default AboutScreen