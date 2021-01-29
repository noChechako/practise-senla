import React from 'react'

function Coment(props){
    console.log(props)
    console.log(props.row.author_details.avatar_path)
    
    const img =0 && props.row.author_details.avatar_path.slice();
    console.log(img)

return(
   <React.Fragment>
        <div>
         <img alt="avatar" src={img}></img> 
         <span>{props.row.author}</span>
    </div>
    <div>{props.row.content}</div> 
   </React.Fragment>

)
}

export default Coment;