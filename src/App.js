import React from 'react'; 
import Level1 from './Level1.js';

function App() { 
  const str="HELLO WORLD" ;
     
  return (
          <React.Fragment>
          {
           <Level1  str={str} />
                  
          }  
            
          </React.Fragment>
         );
  }

export default App;
