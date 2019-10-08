import React from 'react';
import Level4 from './Level4.js'

function Level3(props) {
 const style = {
 
  width: "600px",
  border: "10px solid yellow",
  padding: "50px",
  margin: "5px",
}
  
  return (
         <div style={style}>
                    <Level4  str3={props.str2} />

             
         </div>
         );
}

  export default Level3;
