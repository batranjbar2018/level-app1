import React from 'react';
import Level2 from './/Level2.js'
function Level1(props) {

const style = {
 
  width: "800px",
  border: "10px solid green",
  padding: "50px",
  margin: "20px",
}
  
  return (
         <div style={style}>
          <Level2  str1={props.str} />
             
         </div>
         );
}

  export default Level1;
