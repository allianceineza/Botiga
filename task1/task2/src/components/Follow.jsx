import React from "react";
import image17 from '../assets/image/pic17.webp'
import image18 from '../assets/image/pic18.webp'
import image19 from '../assets/image/pic19.webp'
import image20 from '../assets/image/pic20.webp'
import image21 from '../assets/image/pic19.webp'
import image22 from '../assets/image/pic18.webp'

const followus=[
    {
        image: image17,
    },
    {
        image: image18,
    },
    {
        image: image19,
    },
    {
        image: image20,
    },
    {
        image: image21,
    },
    {
        image: image22,
    },
]
const Follow=()=>{
    return(
        <>
        <h1 className="popularhead">follow us on instagram</h1>
        <div className="pop">
        {followus.map((post)=>(
             <div className="instagram">
            <img src={post.image}/>
             </div>
        ))}
        </div>
        </>
    )
}
export default Follow