import React from 'react';
let coment =function Coment(props){
   
  
    const img =0 && props.row.author_details.avatar_path.slice();
    

return(
   <>
        <div>
         <img alt="avatar" src={img}></img> 
         <span>{props.row.author}</span>
    </div>
    <div>{props.row.content}</div> 
   </>

)
}

export default coment;