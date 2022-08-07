import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
export default function Menu() {
    const [general, setGeneral] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/generalData')
          .then(response => response.json())
          .then(data => setGeneral(data.data))
    
      }, [])
    return (
        <>
              
           <div className="top-header">
               <div className="container">
                   <div className="leftside">
                       <div className="email-top"><p>{general.email}</p></div>
                       <div className="phone-top"><p>{general.phone}</p></div>
                       <div className="address-top"><p>{general.address}</p></div>
                   </div>
                   <div className="rightside">
                       <div className="social-items"><p><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></p></div>
                       <div className="social-items"><p><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></p></div>
                       <div className="social-items"><p><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></p></div>
                   </div>
               </div>
           </div>
            <nav>
               <div className="container">
                   <hr className="top"/>
                   <nav className="navbar navbar-expand-lg">
                     <a className="navbar-brand" href=""><div className="logo-brand"><img src={'http://127.0.0.1:8000/photo/'+general.logo} alt=""/></div></a>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbar1">
                       <ul className="navbar-nav ml-auto"> 
                           <li className="nav-item">
                               <Link to="/" className="nav-link">Home</Link>
                           </li>
                           <li className="nav-item">
                           <Link to="/about" className="nav-link">About</Link>
                           </li>
                           <li className="nav-item">
                           <Link to="/classess" className="nav-link">Classess</Link>
                           </li>
                           <li className="nav-item">
                           <Link to="/packages" className="nav-link">Packages</Link>
                           </li>
                           <li className="nav-item">
                           <Link to="/trainers" className="nav-link">Trainers</Link>
                           </li>
                           <li className="nav-item active dropdown">
                               <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">PAGES <span className="caret-drop"></span></a>
                               <ul className="dropdown-menu">
                                 <li className="divider-top"></li>
                                 <li><a className="dropdown-item" href="blog-left-side.html">Blog Leftside</a></li>
                                 <li className="divider"></li>
                                 <li><a className="dropdown-item" href="blog-right-side.html">Blog Rightside</a></li>
                                 <li className="divider"></li>
                                 <li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
                                 <li className="divider"></li>
                                 <li><a className="dropdown-item" href="faq.html">Faq</a></li>
                                 <li className="divider"></li>
                                 <li><a className="dropdown-item" href="gallery.html">Gallery</a></li>
                                 <li className="divider"></li>
                                 <li><a className="dropdown-item" href="trainers.html">Trainers</a></li>
                                 <li className="divider"></li>
                                 <li><a className="dropdown-item" href="404-error-page.html">404 Error Page</a></li>
                               </ul>
                           </li>
                           <li className="nav-item">
                           <Link to="/contact" className="nav-link">Contact</Link>
                           </li>
                       </ul>
                     </div>
                   </nav>
               </div>
           </nav>


        </>

    )

}