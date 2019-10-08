import React from 'react';
import Level5 from './Level5.js'

function Level4(props) {
 const style = {
 
  width: "500px",
  border: "10px solid blue",
  padding: "50px",
  margin: "5px",
}
  
  return (
         <div style={style} >
                  <Level5  str4={props.str3} />

             
         </div>
         );
}

  export default Level4;
