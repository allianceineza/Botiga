import React from "react";
import '../Styles/blog.css';
import image40 from '../assets/image/pic40.webp';
import image41 from '../assets/image/pic41.webp';
import image42 from '../assets/image/pic42.webp';
import image43 from '../assets/image/pic43.webp';
import image44 from '../assets/image/pic44.webp';
import image35 from '../assets/image/pic35.webp';


const blogposts=[
    {
        image:image40,
        date:'July 18, 2021',
        Title:'Sed magna dui, dignissim id felis vitae, consectetur',
        Descrption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]'
    },
   
        {
            image:image41,
            date:'July 18, 2021',
        
            Title:'Sed magna dui, dignissim id felis vitae, consectetur',
            Descrption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]'
        },
    
            {
                image:image41,
                date:'July 18, 2021',
                Title:'Sed magna dui, dignissim id felis vitae, consectetur',
                Descrption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]'
            },
            {
                image:image42,
                date:'July 18, 2021',
                Title:'Sed magna dui, dignissim id felis vitae, consectetur',
                Descrption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]'
            },
            {
                image:image43,
                date:'July 18, 2021',
                Title:'Sed magna dui, dignissim id felis vitae, consectetur',
                Descrption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]'
            },
            {
                image:image35,
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