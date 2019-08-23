import React from "react";
import {Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react'


export default function CharacterCard(props) {


  return(

  <div className="char-card "key={props.name}>
<Card>

<img  src={props.image} />
<Card.Content header={props.name} />
<h3>Status:{props.status}</h3>
    
    <h3>Species:{props.species}</h3>
  
    <h3>Gender:{props.gender}</h3>
    
    
   </Card>



 </div>
  );
}
