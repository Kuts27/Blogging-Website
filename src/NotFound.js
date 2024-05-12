import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div>
        <h2>Sorry..Your are on the wrong path</h2>
        <Link to={"/"}> Click to go to Homepage</Link>
        </div>
    );
}
 
export default NotFound
