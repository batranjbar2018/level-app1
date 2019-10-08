import React from 'react';

function Level7(props) {
// alert(props.str6);
  const style = {
 
  width: "200px",
  border: "10px solid black",
  padding: "50px",
  margin: "5px",
};
  function showHello(){
    
     document.getElementById("p1").innerHTML=(props.str6);
  }
  return (
         <div style={style}>
         <button onClick={showHello} >CLICK ME</button>
  
          <p id="p1"> </p>

         </div>
         );
}

  export default Level7;
