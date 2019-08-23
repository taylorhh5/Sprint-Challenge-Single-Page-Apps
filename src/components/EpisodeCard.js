import React from "react";
import {Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react'


export default function EpisodeCard (props) {


  return(

  <div className="epi-card "key={props.name}>
<Card>

<img  src={props.image} />
<Card.Content header={props.name} />
    
    <Card.Content header={props.air_date} />
    <Card.Content header={props.episode} />
    
   </Card>



 </div>
  );
}