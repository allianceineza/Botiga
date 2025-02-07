import React from "react";
import Shoppost from "./shoppost";
import '../Styles/shop.css';
import image30 from'../assets/image/shop.webp'




const shopwith=[
{
    image: image30,
}

]

const Shop=()=>{
    
    return(
        <div className="shop1">
        {shopwith.map((post)=>(
          <img src={post.image}/>  
        ))}
    
        <Shoppost/>
        </div>
    )
}
export default Shop
