
import SliderComponent from '../../components/Slider/SliderComponent';
import CardComponent from '../../components/Card/CardComponent';
import FooterComponent from '../../components/Footer/FooterComponent';




const HomeScreen=(props)=>{
    return(
        <div class="home">
            
            <SliderComponent />
            <CardComponent 
            title="Metal Muscle"
            subtitle="GOLD-Package"
           text="Here is a gold package for GYM lover in which you will get 3 month of
            membership period,
             where you will get 2 time massage  at minimum price of 3000 "
          />
           <FooterComponent/>    
        </div>
        
    );
};
export default HomeScreen;
