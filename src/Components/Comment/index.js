import React from 'react';

export default function Comment (props){
  
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState(''); 
    const [comment,setComment] = React.useState('');

    
    const handleChangeInput1 =e => setName (e.target.value);
    const handleChangeInput2 =e => setEmail (e.target.value);
    const handleChangeInput3 =e => setComment (e.target.value);

                           
  const handleSubmit= e => {
         const { onFormSubmit } = props;
         e.preventDefault();
         onFormSubmit(name,email,comment);
         setName(''); 
         setEmail(''); 
         setComment(''); 

                   }
     
          
        return(
            <>
            <h1>Contact Us Form</h1>
            <form>
              <div> <input value={name}  onChange={handleChangeInput1}/></div> 
              <div> <input type="email"  value={email}  onChange={handleChangeInput2}/></div>
              <div>  <textarea rows="10" cols="30" name="comment" value={comment}  onChange={handleChangeInput3}></textarea></div>
               <button onClick={handleSubmit}>Submit</button>
            </form>
            </>
        )
    
}