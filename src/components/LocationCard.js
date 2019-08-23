import React from "react";
import {Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react'


export default function LocationCard(props) {


  return(

  <div className="loc-card "key={props.name}>
<Card>

<img  src={props.image} />
<Card.Content header={props.name} />
    <Card.Content header={props.type} />
    <Card.Content header={props.dimension} />
    <Card.Content header={props.residents} />
    
   </Card>



 </div>
  );
}