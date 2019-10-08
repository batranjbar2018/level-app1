import React from 'react';
import Level7 from './Level7.js'

function Level6(props) {
const style = {
 
  width: "300px",
  border: "10px solid purple",
  padding: "50px",
  margin: "5px",
}
  
  return (
         <div style={style}>
                  <Level7  str6={props.str5} />

             
         </div>
         );
}

  export default Level6;
