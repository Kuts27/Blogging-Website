
import './App.css';
import Nav from './Nav';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Footer from './Footer';


function App() {

  //const title = "welcome to my blog"
  //const link = "https://www.google.com"
  return (

    <Router>
    <div className="App">
        <Nav />
        <div className='component'>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* <h2>{title}</h2> */}
        {/* <p><a href={link}>Google</a></p> */}
    
        </div>
      <div className='foot'>
          <Footer/>
      </div>
    </div>
    </Router>
  );
}

export default App;
