import React from "react";
import image30 from '../assets/image/pic30.webp'
import image31 from '../assets/image/pic31.webp'
import image32 from '../assets/image/pic32.webp'
import image8 from '../assets/image/pic8.webp'
import image9 from '../assets/image/pic9.webp'
import image10 from '../assets/image/pic10.webp'
import { FaStar } from "react-icons/fa";
 
const exploreproduct=[
      {
            id:4,
            image: image30,
            description: "Head set gamer region",
            price: "$22.0-$55.0",
            star: 4,
        },
        {
            id: 5,
            image: image31,
            description: "Head set gamer region",
            price: "$22.0-$55.0",
            star: 4,
        },
        {
            id: 6,
            image: image32,
            description: "Head set gamer region",
            price: "$22.0-$55.0",
            star: 4,
        },
        {
            id: 7,
            image: image8,
            description: "Head set gamer region",
            price: "$22.0-$55.0",
            star: 4,
        },
        {
            id: 8,
            image: image9,
            description: "Head set gamer region",
            price: "$22.0-$55.0",
            star: 4,
        },
        {
            id: 9,
            image: image10,
            description: "Head set gamer region",
            price: "$22.0-$55.0",
            star: 4,
        },
    ]
        const Exploreproduct=() =>{
            return(
                <div className="new-arrival">
                <div className="gallery-arrival">
              {exploreproduct.map((post) => (
                <div key={post.id} className="allin-one">
                <div className="new-item">
                <img src={post.image} alt={post.description} />
                <button 
              className="quick-view" 
             onClick={() => handleNavigate(post.id)} // Fixed handler
                >
                  Quick View
                </button>
                <button className="select-option">Select Option</button>
                 <div className="heart">❤</div>
                </div>
                 <p>{post.description}</p>
                 <p>{post.price}</p>
                <p>
                 <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                 <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                 <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                <FaStar style={{ color: "rgb(202, 202, 201)" }} />
                <FaStar style={{ color: "rgb(202, 202, 201)" }} />
                </p>
                 </div>
                ))}
                                               </div>
                                           </div>
                
            )
        }

export default Exploreproduct