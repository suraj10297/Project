import { Link } from "react-router-dom";
import './Footer.css'

const FooterComponent = (props) => {
  return (

   
    <div class="footer">
      <footer class="container-fluid bg-blue my-0 py-1 text-light">
      
        <br></br>
        <br></br>
        <div class="container col-sm-3 mt-3 ">
          <p class="mb-0 text-center">
            <Link to="/Home">Home |</Link>
            <Link to="/login">Login Here |</Link>
            <Link to="/signup">Register Here</Link>
          </p>
        </div>
      </footer>
    </div>
    
  );
};

export default FooterComponent;
