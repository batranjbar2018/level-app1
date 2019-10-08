import React from 'react';
import Level3 from './Level3.js'

function Level2(props) {
 const style = {
 
  width: "700px",
  border: "10px solid red",
  padding: "50px",
  margin: "5px",
}
  
  
  return (
         <div style={style}>
           <Level3  str2={props.str1} />

             
         </div>
         );
}

  export default Level2;
