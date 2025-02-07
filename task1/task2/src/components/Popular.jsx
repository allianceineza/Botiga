
import React from "react";

import image2 from'../assets/image/pic2.webp'
import image3 from'../assets/image/pic3.webp'
import image4 from'../assets/image/pic4.webp'
import image5 from'../assets/image/pic5.webp'
import image6 from'../assets/image/pic6.webp'
import image7 from'../assets/image/pic7.webp'

const Homepopular=[
    {
image:image2,
descripution: 'body lotion'
    },
    {
        image:image3,
        descripution: 'sports'
            },
            {
                image:image4,
                descripution: 'computer budget'
                    },
                    {
                   image:image5,
                descripution:'Electronics'
                 },
                 {
                    image:image6,
                    descripution: 'watch'
                        },
                        {
                            image:image7,
                            descripution: 'women clothes'
                                },
                            ]
               const Popular=()=>{
                return(
                    <>
                    <h1 className="popularhead">popular categories</h1>
                    <div className="popular">
                        {Homepopular.map((post)=>(
                <div className="home-card">
                    <img src={post.image}/>
                    <p>{post.descripution}</p>
                  </div>
                ))
               } 
               </div>            
               </>
            )
        }
        export default Popular