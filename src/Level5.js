import React from 'react';
import Level6 from './Level6.js'

function Level5(props) {
 
  const style = {
 
  width: "400px",
  border: "10px solid ligthgreen",
  padding: "50px",
  margin: "5px",
}
  return (
         <div style={style}>
                  <Level6 str5={props.str4} />

             
         </div>
         );
}

  export default Level5;
