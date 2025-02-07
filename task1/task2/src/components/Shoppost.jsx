import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";
import '../Styles/shop.css';
import image8 from '../assets/image/pic8.webp'
import image9 from '../assets/image/pic9.webp'
import image10 from '../assets/image/pic10.webp'
import image30 from '../assets/image/pic30.webp'
import image31 from '../assets/image/pic31.webp'
import image32 from '../assets/image/pic32.webp'
import image33 from '../assets/image/pic33.webp'
import image34 from '../assets/image/pic34.webp'
import image35 from '../assets/image/pic35.webp'
import { FaStar } from "react-icons/fa";

const shopposts=[
    {
           id: 1,
           image: image8,
           description: "all in one bottle",
           price: "$22.0-$55.0",
       },
       {
           id: 2,
           image: image9,
           description: "Amazon Alexa",
           price: "$22.0-$55.0",
       },
       {
           id: 3,
           image: image10,
           description: "Head set gamer region",
           price: "$22.0-$55.0",
           star: 4,
       },
       {
        id: 4,
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
        image: image33,
        description: "Head set gamer region",
        price: "$22.0-$55.0",
        star: 4,
    },
    {
        id: 8,
        image: image34,
        description: "Head set gamer region",
        price: "$22.0-$55.0",
        star: 4,
    },
    {
        id: 9,
        image: image35,
        description: "Head set gamer region",
        price: "$22.0-$55.0",
        star: 4,
    },
]

const Shoppost=()=>{
    return(
        <div className="shop2">
            <div className="links">
                <h3>categories</h3>
            <a href="#">Body Location1(1)</a>
            <a href="#">Computer Gadget(3)</a>
            <a href="#">Electronics(5)</a>
            <a href="#">Fashion(3)</a>
            <a href="#">General(1)</a>
            <a href="#">Shoes(2)</a>
            <a href="#">Sorts(3)</a>
            <a href="#">Watch(1)</a>
            <a href="#">Woman clothes(3)</a>
            <div className="color-shop">
                <hr/>
                <p>Color</p>
                <div className="color-selection">
          {/* <span>Color</span> */}
          <div className="color-option color-1 selected"></div>
          <div className="color-option color-2"></div>
          <div className="color-option color-3 disabled"></div>
          <div className="color-option color-4 disabled"></div>
        </div>
        <hr/>
            </div>
            <div className="shop-star">
                <p>Rating</p>
               <p> <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                <FaStar style={{ color: "rgb(202, 202, 201)" }} />
                <FaStar style={{ color: "rgb(202, 202, 201)" }} />(8)</p>

                <p><FaStar style={{ color: "rgb(224, 150, 11)" }} />
                <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                <FaStar style={{ color: "rgb(202, 202, 201)" }} />
                <FaStar style={{ color: "rgb(202, 202, 201)" }} />(4)</p>

               <p> <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                <FaStar style={{ color: "rgb(224, 150, 11)" }} />
                <FaStar style={{ color: "rgb(202, 202, 201)" }} />
                <FaStar style={{ color: "rgb(202, 202, 201)" }} />(1)</p>
               <hr/>
            </div>
            <div>
                <p>price</p>

            </div>
            </div>
            <div className="showing">
            <div class="sorting-wrapper">
    <div class="results-count">Showing 1-9 of 13 results</div>
    <div class="sorting-container">
        <select>
            <option value="rating">Sort by average rating</option>
            <option value="popularity">Sort by popularity</option>
            <option value="price-low">Sort by price: low to high</option>
            <option value="price-high">Sort by price: high to low</option>
        </select>
        <div class="sorting-icons">
            <i class="fa fa-list"><TfiMenuAlt /></i>
            <i class="fa fa-th active"><CgMenuGridR /></i>
        </div>
    </div>
</div>

           
                   
                   
                 
               
              
                           <div className="new-arrival">
                               <div className="gallery-arrival">
                                   {shopposts.map((post) => (
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

                




                    {/* {shopposts.map((post)=>(
                  <div className="shopposts">
                    <img src={post.image}/>
                    </div>
                    ))} */}
                </div>
           
        </div>
    )
}
export default Shoppost