import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import ActorCards from "./components/Actorcard"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row} from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [actor, setActor] = useState([])
  useEffect(() =>{
    axios.get('https://swapi.co/api/people/')
    .then(response =>{
      console.log(response.data.results);
      setActor(response.data.results);
    })
    .catch(error => {
      console.log("Did not receive data", error);
    })
  }, [])
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    <Container>
      <Row>
          {actor.map((data,index) =>{
            console.log(data);
            return(
              <ActorCards
                key={index}
                name={data.name}
                height={data.height}
                birth={data.birth_year}
                gender={data.gender}
              />
            )
          })}    
      </Row>
    </Container>
  </div>
  );
}

export default App;
