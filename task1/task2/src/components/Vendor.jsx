import React from "react";
import image11 from '../assets/image/pic11.webp'
import image12 from '../assets/image/pic12.webp'
import image13 from '../assets/image/pic13.webp'
// import image14 from '../assets/image/pic14.webp'
// import image15 from '../assets/image/PIC15.webp'
// import image16 from '../assets/image/pic16.webp'
import { FaChevronCircleRight } from "react-icons/fa";

const ourvendor=[
    {
        image:image11,
        title: "santa ",
        name:"monica",
        shop: "store",
        description: "New York, NY"
    },

    {
        image:image12,
        title:"josh ",
        name:"joe",
        shop: "store",
        description: "New York, NY"
    },

    {
        image:image13,
        title:"Digital ",
        name:"Good",
        shop: "store",
        description: "New York, NY"
    },

    

]

const Vendor=()=>{
    return(
        <>
        <h1 className="popularhead">our vendor list</h1>
        <div className="vendor">
        {ourvendor.map((post)=>(
             <div className="santa">
                    <img src={post.image}/>
                   <div className="vendor-disc">
                   <div className="posts">
                    <h2>{post.title}</h2>
                    <h2>{post.name}</h2>
                    <h2>{post.shop}</h2>
                    <p>{post.description}</p></div>
                   <div className="vendor-icon"> 
                 <div class="chevron">
                    {/* <FaChevronCircleRight /> */}
                 </div>
                 
                   </div>
                    </div>
        </div>
        ))}
        </div>
        <div>
        <div className="vendor">
        {ourvendor.map((post)=>(
             <div className="santa">
                    <img src={post.image}/>
                    <div className="vendor-disc">
                    <div className="posts">
                    <h2>{post.title}</h2>
                    <h2>{post.name}</h2>
                    <h2>{post.shop}</h2>
                    <p>{post.description}</p></div>
                    <div className="vendor-icon"> 
                 <div class="chevron">
                
                 </div>
                 
                   </div>
                    {/* <FaChevronCircleRight /> */}
        </div></div>
        ))}
        </div>
        </div>

        
        </>
    )
}
export default Vendor