import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <div className="navbar">
        <div className="blog-heading"><h1> YourStory</h1></div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
        </div>
     );
}
 
export default Nav;
