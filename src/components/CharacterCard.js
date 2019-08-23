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
    <Card.Content header={props.status} />
    <Card.Content header={props.species} />
    <Card.Content header={props.gender} />
    <Card.Content header={props.type} />
   </Card>



 </div>
  );
}
