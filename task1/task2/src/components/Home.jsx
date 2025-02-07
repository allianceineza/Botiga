import React from "react";
import'../Styles/home.css'
import Popular from "./Popular"
import { CiStar } from "react-icons/ci";
import Newarrival from "./Newarrival";
import Vendor from "./Vendor";
import Follow from "./follow";
import Exploreproduct from "./Exploreproduct";
import { FaCarSide } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";



function Home(){
    return(
        <>
        <div className="home">
            <div className="one">
                <div className="first">
                    <ul >
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Computer Gadget</a></li>
                <li><a href="#">Fashion</a></li>
                <li><a href="#">Body Lotion</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Human clothes</a></li>
                <li><a href="#">Choes</a></li>
                <li><a href="#">Watches</a></li>
                </ul>
                </div>
                <div className="second">
                    <h1 className="header">Explore our latest and greatest Electronics</h1>
                    <button className="button">shop now</button>
                </div>
            </div></div>
<Popular />
            {/* <div className="two">
                <h1>popular categories</h1>
                <div className="popular">
                <div className="third">
                     <img src={pic2} alt="pic2"></img>
                     <p>body lotion</p>
                </div>
                <div className="sports">
                     <img src={pic3} alt="pic3"></img>
                     <p>sports</p>
                </div>
                <div className="Computer Gadget">
                     <img src={pic4} alt="pic4"></img>
                     <p>Computer Gadget</p>
                </div>
                <div className="electronics">
                     <img src={pic5} alt="pic5"></img>
                     <p>electronics</p>
                </div>
                <div className="wacth">
                     <img src={pic6} alt="pic6"></img>
                     <p>Watch</p>
                </div>
                <div className="women clothes">
                     <img src={pic7} alt="pic7"></img>
                     <p>Women clothes</p>
                </div>
                </div>
            </div> */}


            {/* <div className="three">
                <h1>new arrival product</h1>
                <div className="new-arrival">

                    <div className="allin-one">
                    <img src={pic8} alt="pic8"></img>
                    <p>all in one bottle</p>
                    <p>$22.00-$55.00</p>
                    < div className="star">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    </div>
                    </div>

                     <div className="allin-one">
                    <img src={pic9} alt="pic9"></img>
                 
                    <p>Amazon Alexa</p>
                    <p>$22.00-$55.00</p>
                    < div className="star">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    </div>
                    
                     </div>
                 <div className="allin-one">
                    <img src={pic10} alt="pic10"></img>
                    <p>Headset Gamer Legion</p>
                    <p>$22.00-$55.00</p>
                    < div className="star">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    </div>
                    </div> 
    
                </div>
                
            </div>*/}
            <Newarrival/>
            <center> 
            <button className="buttonb">shop now</button></center>

            {/* <div className="four">
                <h1>our vendor list</h1>
                <div className="vendor">
                    <div className="santa">
                    <img src={pic11} alt="pic11"></img>
                        <p>santa monica's<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>
                    <div className="santa">
                    <img src={pic12} alt="pic12"></img>
                        <p>Josh Doe's<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>
                    <div className="santa">
                    <img src={pic13} alt="pic13"></img>
                        <p>Digital Good's<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>
                </div>
            </div>
            <div className="five">
                
            <div className="santa">
                    <img src={pic14} alt="pic14"></img>
                        <p>Jesca's<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>

                    <div className="santa">
                    <img src={PIC15} alt="PIC15"></img>
                        <p>The Glass<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>
                    <div className="santa">
                    <img src={pic16} alt="pic16"></img>
                        <p>John Doe's<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>
                     </div>*/}
                     <Vendor/>
                     <center> 
           
           <button className="buttonb">see all vendors</button></center>
           
           <div className="choose-us">
            <h2>Why People Choose Us</h2>
            <div className="choose-container">
            <div className="choose-item">
  <div className="icon-container">
    <FaExchangeAlt />
  </div>
  
  <p className="title">Easy Returns</p>
  <p className="description">Our return policy is simple and that is why customers love our shop.</p>
</div>

<div className="choose-item">
  <div className="icon-container">
  <FaCarSide />
  </div>
  <p className="title">Customer Service</p>
  <p className="description">Our return policy is simple and that is why customers love our shop.</p>
</div>

<div className="choose-item">
  <div className="icon-container">
    <FaExchangeAlt />
  </div>
  <p className="title">High Quality</p>
  <p className="description">Our return policy is simple and that is why customers love our shop.</p>
</div>
</div> </div>
           {/* <div className="new-arrival">

<div className="allin-one">
<img src={pic8} alt="pic8"></img>
<p>all in one bottle</p>
<p>$22.00-$55.00</p>
< div className="star">
<CiStar />
<CiStar />
<CiStar />
<CiStar />
</div>
</div>

 <div className="allin-one">
<img src={pic9} alt="pic9"></img>
<p>Amazon Alexa</p>
<p>$22.00-$55.00</p>
< div className="star">
<CiStar />
<CiStar />
<CiStar />
<CiStar />
</div>
 </div>
<div className="allin-one">
<img src={pic10} alt="pic10"></img>
<p>Headset Gamer Legion</p>
<p>$22.00-$55.00</p>
< div className="star">
<CiStar />
<CiStar />
<CiStar />
<CiStar />
</div>
</div> 

</div>
    */}
    <Exploreproduct/>
    <Follow/>            
</>             
        
        
    )
}
export default Home

