import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data:blogs, error, isPending} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            
            {error && <div>{error}</div>}
            {isPending && <div> Loading...</div> }
            {blogs && <BlogList  blogs={blogs} title="All Blogs!" />}
            {/* Conditional templating */}

            {/* <BlogList  blogs={blogs.filter((blog)=>(blog.author.toLowerCase() === 'sachin'))} title="Sachin's Blogs!" handleDelete={handleDelete}/>
              we can use resuable comonent as customised to our needs */}
        </div>
     );
}
 
export default Home;