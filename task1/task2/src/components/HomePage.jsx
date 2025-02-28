import React from "react"
import '../Styles/home.css';
import image8 from '../assets/image/pic8.webp'
import image9 from '../assets/image/pic9.webp'
import image10 from '../assets/image/pic10.webp'
import image26 from '../assets/image/image.webp'
import image46 from '../assets/image/pic46.webp'
import image45 from '../assets/image/pic45.webp'
import { useNavigate} from 'react-router-dom';
import { FaStar } from "react-icons/fa";


export const productList=[
    {
        id:1,
        image:image8,
        profileImage:image26,
        cardTitle:'all in one bottle',
        star:'customer review',
        price:'$22.0 - $55.0',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'


    },
    {
        id:2,
        image:image45,
        cardTitle:'oil',

    },
    {
        id:3,
        image:image46,
        cardTitle:'oil',

    },
]

function HomePage(){
    const navigation = useNavigate();

    const handleNavigate = (id) =>{
        navigation(`/singlecard/${id}`)
    }
    return(
        <div>
            {productList.map((item)=>(
                <div>
                <div className="card-item" key={item.id}><img src={item.image}/></div>
                <div>{item.cardTitle}</div>
                 <p><FaStar style={{color:"rgb(224, 150, 11)"}}/>
                        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
                        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
                        <FaStar style={{color:"rgb(202, 202, 201)"}}/>
                        <FaStar style={{color:"rgb(202, 202, 201)"}}/> (3)customer review</p>
                    <div>{item.price}</div>
                    <div>{item.description}</div>
                    <div key={item.id}>{item.profileImage}</div>
                <button type="button" className="button1" 
             onClick={()=>handleNavigate(item.id)}>
                 view</button>
               
                </div>
            ))}

            </div>   
    )

}
 export default HomePage