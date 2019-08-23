import React from "react";
import {Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react'


export default function LocationCard(props) {


  return(

  <div className="loc-card "key={props.name}>
<Card>
<h1>Location:</h1>

<Card.Content header={props.name} />
<h3>Type: {props.type}</h3>
    
    <h3>Dimension: {props.dimension}</h3>

    <h3>Residents: {props.residents.length}</h3>
    
    
   </Card>



 </div>
  );
}