import react from 'react';
import React from 'react'
import UutisArtikkelit from './UutisArtikkelit.js';

export default function Uutiset(props) {
    
   
          
        
        
   
    console.log(props)
return (
    
    <div>
        
    {
        props.Data.map(element => <UutisArtikkelit img={ element.img } newsclass= { element.newsclass } headline={ element.headline } time={ element.time }/>)
        }
</div>
)
}
