import React from "react"
//import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Row ,CardGroup, CardTitle, CardBody, CardText, Card} from "reactstrap";


const ActorCard = (props) => {
    console.log(props);
    return(
        <Col xs="6" md="4" xl="2" >
        <CardGroup>
            <Card>
                <CardBody>
                    <CardTitle>Character: {props.name}</CardTitle>
                    <CardText>Height: {props.height}</CardText>
                    <CardText>Birth Year: {props.birth}</CardText>
                    <CardText>Gender: {props.gender}</CardText>
                </CardBody> 
        </Card>
        </CardGroup>  
       </Col>   
    );
};

export default ActorCard;