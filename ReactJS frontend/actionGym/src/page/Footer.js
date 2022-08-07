import { useEffect, useState } from "react";
export default function Footer(){
    const [general, setGeneral] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/generalData')
          .then(response => response.json())
          .then(data => setGeneral(data.data))
    
      }, [])
    return(
        <>
        <footer>
        <div className="container">
            <div className="row">
              <div className="col-lg-5"> 
                <figure className="footer-logo"><img src={'http://127.0.0.1:8000/photo/'+general.logo} alt=""/></figure>
                <div className="footer-about">
                    <p>{general.footer_text}</p>
                </div>
                <hr className="footer"/>
                <div className="social-footer">
                    <div className="social-items"><p><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></p></div>
                    <div className="social-items"><p><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></p></div>
                    <div className="social-items"><p><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></p></div>
                </div>
              </div>
              <div className="col-lg-3 footer-center-col">
                <div className="popular-sites">
                    <h4>POPULAR SITES</h4> 
                    <div className="left-side">
                        <p><a href="about.html"><i className="fa fa-angle-right" aria-hidden="true"></i>&nbsp; About</a></p> 
                        <p><a href="classes.html"><i className="fa fa-angle-right" aria-hidden="true"></i>&nbsp; Classes</a></p> 
                        <p><a href="packages.html"><i className="fa fa-angle-right" aria-hidden="true"></i>&nbsp; Packages</a> </p> 
                        <p><a href="trainers.html"><i className="fa fa-angle-right" aria-hidden="true"></i>&nbsp; Trainers</a></p>
                          
                    </div>
                    <div className="right-side">
                        <p><a href="faq.html"><i className="fa fa-angle-right" aria-hidden="true"></i>&nbsp; Faq</a> </p>   
                        <p><a href="blog-left-side.html"><i className="fa fa-angle-right" aria-hidden="true"></i>&nbsp; Blogs</a></p>
                        <p><a href="gallery.html"><i className="fa fa-angle-right" aria-hidden="true"></i>&nbsp; Gallery</a> </p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="grid-bottom-gallery">
                    <h4>GALLERY</h4> 
                    <div className="row">
                      <div className="col-6 col-sm-4 col-md-4 grid-thumb"><a href="#"><img src="/assets/img/images/grid1.jpg" alt=""/></a></div>
                      <div className="col-6 col-sm-4 col-md-4 grid-thumb"><a href="#"><img src="/assets/img/images/grid2.jpg" alt=""/></a></div>
                      <div className="col-6 col-sm-4 col-md-4 grid-thumb"><a href="#"><img src="/assets/img/images/grid3.jpg" alt=""/></a></div>
                      <div className="col-6 col-sm-4 col-md-4 grid-thumb"><a href="#"><img src="/assets/img/images/grid4.jpg" alt=""/></a></div>
                      <div className="col-6 col-sm-4 col-md-4 grid-thumb"><a href="#"><img src="/assets/img/images/grid5.jpg" alt=""/></a></div>
                      <div className="col-6 col-sm-4 col-md-4 grid-thumb"><a href="#"><img src="/assets/img/images/grid6.jpg" alt=""/></a></div>
                    </div>  
                  </div>
              </div>
            </div>
        </div>
        <div className="bottom-footer">
            <p>© 2018 ActionGym, Gym & Fitness HTML Template</p>
        </div>
    </footer>
        </>
    )
}