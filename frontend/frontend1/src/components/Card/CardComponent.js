import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
//import Images from './components/Images'


const CardComponent = (props) => {
  return (
       
       <div>
      <Card className="container col-sm-3">
        <CardImg top width="100%" src="https://wallpaperaccess.com/full/834279.jpg" alt="download" />
        <div class="cardbody">
        <CardBody>
            <CardTitle tag="h5">{props.title}</CardTitle>

          <CardText>{props.text}</CardText>
          <Button>Find In {props.title}</Button>
        </CardBody>
        </div>
      </Card>
    </div>
    

  );
};

export default CardComponent;
