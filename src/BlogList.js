import { Link } from "react-router-dom";

const BlogList = ({blogs, title }) => {

   // const blogs = props.blogs
   // const title = props.title
    
    return ( 
        <div className="bloglist">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                    <div className="blog-property" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>Written by {blog.author}</p>
                        </Link>
                        {/* <button onClick={() => (handleDelete(blog.id))}> Delete Blog</button> */}
                    </div>
                ))}
        </div>
     );
}
 
export default BlogList;