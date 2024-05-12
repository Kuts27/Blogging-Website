import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id , {
            method: 'DELETE'
        })
        .then(() => {
            navigate('/')
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div> Loading...</div>}
            { error && <div> {error} </div>}
            { blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p> Written by {blog.author}</p>
                    <div className="text">{blog.body}</div>
                    <div className="delete-button">
                    <button onClick={handleDelete}>Delete the Blog</button>
                    </div>
                </article>

            )}
        </div>
     );
}
 
export default BlogDetails;