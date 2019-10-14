import React from 'react'; 
import Header from './Components/Header';
import ContactUs from './Components/ContactUs'
import Comment from './Components/Comment';
import Level1 from './Components/Level1.js';
export const MyName= React.createContext({
  name:'',
  email:'',
  comment:'',
});
function App() { 
  const [name , setName] = React.useState('');
  const [comment , setComment] = React.useState();
  const [email , setEmail] = React.useState();

  const getName=name =>setName(name);
  //const getComment=comment =>setComment(comment);
  //const getEmail=nemail =>setEmail(email);
 const onCommentSubmit=(name,email,comment) =>{ 
          setName(name);
          setComment(comment);
          setEmail(email);
           console.log("name ==> ",name);
           console.log("email ==> ",email);
           console.log("comment==> ",comment);

 };
 // const str="THIS HELLO WORLD COMES FROM APP.JS" ;
 
  return (
           <MyName.Provider value={{name,email,comment}}>
           <Header title={name}  />
               <div> <ContactUs onFormSubmit={getName}/></div>   
               <div><Comment onFormSubmit={onCommentSubmit}/></div>   
              <Level1  />     
            </MyName.Provider>
         );
  }

export default App;