import React from 'react'

// const Info =({title,text})=>{
//     return(
//         <div>
//             <h1>{title}</h1>
//             <p>{text}</p>
//         </div>
//     )
// }

const Info = props =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Info