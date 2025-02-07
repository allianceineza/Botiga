import React from "react";
import '../Styles/blog.css';
import image1 from '../assets/image/pic5.webp';
import image2 from '../assets/image/pic6.webp';
import image3 from '../assets/image/pic7.webp';


const blogposts=[
    {
        image:image1,
        date:'July 18, 2021',
        Title:'Sed magna dui, dignissim id felis vitae, consectetur',
        Descrption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]'
    },
   
        {
            image:image2,
            date:'July 18, 2021',
        
            Title:'Sed magna dui, dignissim id felis vitae, consectetur',
            Descrption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]'
        },
    
            {
                image:image3,
                date:'July 18, 2021',
                Title:'Sed magna dui, dignissim id felis vitae, consectetur',
                Descrption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]'
            },
]


const Blog=()=>{

    return(
        <>
        <h1 className='blog-title'>Blog</h1>
        <div className="blog-container">
            {blogposts.map((post)=>(
                    <div className="blog-card">
                    <img src={post.image}/>
                    <div className="blog-content">
                        <p>{post.date}</p>
                        <h3 >{post.Title}</h3>
                        <p>{post.Descrption}</p>
                        </div>
                        </div>
                )
            )
            }
        </div>

        <div className="blog-container">
            {blogposts.map((post)=>(
                    <div className="blog-card">
                    <img src={post.image}/>
                    <div className="blog-content">
                        <p>{post.date}</p>
                        <h3 >{post.Title}</h3>
                        <p>{post.Descrption}</p>
                        </div>
                        </div>
                )
            )
            }
        </div>
        </>
    )

}
export default Blog;