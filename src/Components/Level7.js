import React from 'react';
import {MyName} from '../App';


function Level7(props) {
 
  return (
         <MyName.Consumer>
              { ({name,email,comment}) =>( <p id="p1">this is IN LEVEL7: {email} </p>) } 
         </MyName.Consumer>
         );
                        }

  export default Level7;
