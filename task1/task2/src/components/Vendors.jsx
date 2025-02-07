import React from "react";
import '../Styles/vendors.css';
import { FaWindows } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import image25 from '../assets/image/pic25.webp'
import image26 from '../assets/image/pic26.webp'
import image27 from '../assets/image/pic27.webp'
import image12 from '../assets/image/pic12.webp'
import image11 from '../assets/image/pic11.webp'
import image16 from '../assets/image/pic16.webp'



const vend=[
    {
    id: 1,
    name: "John Doe’s Store",
    location: ["Central Park,", "New York,", "New York, United States (US)"],
    rating: 5,
    storeImage: image25 ,
    profileImage: image25,
  },
  {
    id: 2,
    name: "Jane’s Fashion Hub",
    location: ["Times Square,", "New York,", "United States (US)"],
    rating: 4,
    storeImage: image26,
    profileImage: image26,
  },
  {
  id: 3,
  name: "John Doe’s Store",
  location: ["Central Park,", "New York,", "New York, United States (US)"],
  rating: 5,
  storeImage:image27,
  profileImage: image27,
},
{
  id: 4,
  name: "John Doe’s Store",
  location: ["Central Park,", "New York,", "New York, United States (US)"],
  rating: 5,
  storeImage:image12,
  profileImage: image27,
},
{
  id: 5,
  name: "John Doe’s Store",
  location: ["Central Park,", "New York,", "New York, United States (US)"],
  rating: 5,
  storeImage:image11,
  profileImage: image27,
},
{
  id: 6,
  name: "John Doe’s Store",
  location: ["Central Park,", "New York,", "New York, United States (US)"],
  rating: 5,
  storeImage:image16,
  profileImage: image27,
},

]

const Vendors=()=>{
    return(
        <>
        
        <h1><center>store list</center></h1>
        <div className="storeid">
        <div className="store-text">
            Total stores showing: 6</div>
            <div className="storeids">
                <button className="filter" >filter</button>
            Sort by:<button className="most">most Recent</button>
            <FaWindows />
            <IoMenuOutline />
            </div>
        </div>
        <div className="store-container">
        {/* <div className="new-arrival"> */}
        {vend.map((post)=>(
            <div key={post.id} className="store-card">
                  <div className="store-image">
              <img src={post.storeImage} alt={post.name} />
            </div>
            
            <div className="store-info">
            <h2>{post.name}</h2>
            <div className="rating">{"★".repeat(post.rating)}</div>
              {post.location.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
            
            </div>
            <div className="store-footer">
             <div className="profile-image">
                <img src={post.profileImage} alt="Profile" />
              </div> 
              
            </div>
            </div>
        ))}
      </div>
           
    

      {/* <div className="store-container">
        {/* <div className="new-arrival"> 
        {vend.map((post)=>(
            <div key={post.id} className="store-card">
                  <div className="store-image">
              <img src={post.storeImage} alt={post.name} />
            </div>
            
            <div className="store-info">
            <h2>{post.name}</h2>
            <div className="rating">{"★".repeat(post.rating)}</div>
              {post.location.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
            </div>
            <div className="store-footer">
             <div className="profile-image">
                <img src={post.profileImage} alt="Profile" />
              </div> 
            </div>
            <button className="navigate-button">▶</button>
            </div>
        ))}
      </div>  */}
           
        </>
    )
}
export default Vendors




