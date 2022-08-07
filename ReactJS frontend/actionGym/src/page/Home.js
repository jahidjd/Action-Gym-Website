
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import FreeMem from "./FreeMem";
import HomeMotivation from "./HomeMotivation";
import Menu from "./Menu";
import Preloader from "./Preloader";

export default function Home() {
  const [general, setGeneral] = useState([])
  const [busy, setBusy] = useState(true)
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/generalData')
      .then(response => response.json())
      .then(data => setGeneral(data.data))

  }, [])
  const [category, setcategory] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/category')
      .then(response => response.json())
      .then(data => setcategory(data.data))

  }, [])
  const [trainer, setTrainer] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/trainer')
      .then(response => response.json())
      .then(data => setTrainer(data.data))
     
  }, [])
  const [slider, setSlider] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/slider')
      .then(response => response.json())
      .then(data => setSlider(data.data))
      .then(() => setBusy(false))
  },[])
  
  if (busy) {
    return <Preloader />
  } else {
    return (
      <>

        <header>
          <Menu />



          <Carousel slider={slider}/>
        </header>

        <section>
          <div className="container">
            <div className="section-title">
              <h2>Welcome to ActionGym</h2>
              <hr className="center" />
              <p>Always free from repetition repeat predefined chunks injected humour</p>
            </div>
            <div className="row hover-effects image-hover">
              {
                category.map((d, i) => {
                  if (i < 3) {
                    return (
                      <div className="col-lg-4 image-box">
                        <figure><img src={'http://127.0.0.1:8000/photo/category/' + d.photo} alt="" /></figure>
                        <div className="caption">
                          <div className="caption-icon"><img src={'http://127.0.0.1:8000/photo/category/icon/' + d.icon} alt="" /></div>
                          <div className="caption-label">
                            <h4>{d.title}</h4>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })
              }


            </div>
          </div>

          <div className="container-fluid inner-color">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="aside-left">
                    {
                      category.map((d, i) => {
                        if (i < 3) {
                          return (
                            <div className="icon-lists" key={i}>
                              <div className="icon-circle">
                                <figure className="icon-center"><img src={'http://127.0.0.1:8000/photo/category/icon/' + d.icon} alt="" /></figure>
                              </div>
                              <div className="icon-text">
                                <h3>{d.title}</h3>
                                <p>{d.description}</p>
                              </div>
                            </div>
                          )
                        }
                      })
                    }


                  </div>
                </div>
                <div className="col-lg-4">
                  <figure className="center-pic"><img src={'http://127.0.0.1:8000/photo/' + general.category_photo} alt="" /></figure>
                </div>
                <div className="col-lg-4">
                  <div className="aside-right">
                    {
                      category.map((d, i) => {
                        if (i < 6 && i > 2) {
                          return (
                            <div className="icon-lists" key={i}>
                              <div className="icon-circle">
                                <figure className="icon-center"><img src={'http://127.0.0.1:8000/photo/category/icon/' + d.icon} alt="" /></figure>
                              </div>
                              <div className="icon-text">
                                <h3>{d.title}</h3>
                                <p>{d.description}</p>
                              </div>
                            </div>
                          )
                        }
                      })
                    }


                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="section-title">
              <h2>Our Trainers</h2>
              <hr className="center" />
              <p>Always free from repetition repeat predefined chunks injected humour</p>
            </div>
            <div className="row">
              {
                trainer.map((d, i) => {
                  if (i < 3) {
                    return (
                      <div className="col-lg-4 profile-card" key={i}>
                        <div className="team-box">
                          <figure className="avatar"><img src={'http://127.0.0.1:8000/photo/trainer/'+d.photo} alt="" /></figure>
                          <div className="team-social lineal">
                            <div className="circle-icon">
                              <a href="#"><div className="center-fa"><i className="fa fa-facebook" aria-hidden="true"></i></div></a>
                            </div>
                            <div className="circle-icon">
                              <a href="#"><div className="center-fa"><i className="fa fa-twitter" aria-hidden="true"></i></div></a>
                            </div>
                            <div className="circle-icon">
                              <a href="#"><div className="center-fa"><i className="fa fa-instagram" aria-hidden="true"></i></div></a>
                            </div>
                          </div>
                          <div className="figure-caption">
                            <h4>{d.name}</h4>
                            <h5 className="trainer-tittle">{d.trainer_type}</h5>
                            <p>{d.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })
              }


            </div>
          </div>

         <HomeMotivation />

          <div className="container filterable-portfolio">
            <div className="section-title">
              <h2>Photo Gallery</h2>
              <hr className="center" />
            </div>
            <ul className="nav nav-pills center-pills portfolio-filter">
              <li role="presentation" className="active"><a href="#" data-filter="*">All</a></li>
              <li role="presentation"><a href="#" data-filter=".workout">Workout</a></li>
              <li role="presentation"><a href="#" data-filter=".spinning">Spinning</a></li>
              <li role="presentation"><a href="#" data-filter=".fitness">Fitness</a></li>
            </ul>
            <div className="row portfolio-items">
              <figure className="portfolio-item col-md-4 workout">
                <div className="magnific-img">
                  <a className="image-popup-vertical-fit" href="img/images/gallery1.jpg">
                    <img src="/assets/img/images/gallery1.jpg" alt="" />
                  </a>
                </div>
              </figure>
              <figure className="portfolio-item col-md-4 spinning">
                <div className="magnific-img">
                  <a className="image-popup-vertical-fit" href="img/images/gallery4.jpg">
                    <img src="/assets/img/images/gallery4.jpg" alt="" />
                  </a>
                </div>
              </figure>
              <figure className="portfolio-item col-md-4 spinning">
                <div className="magnific-img">
                  <a className="image-popup-vertical-fit" href="img/images/gallery5.jpg">
                    <img src="/assets/img/images/gallery5.jpg" alt="" />
                  </a>
                </div>
              </figure>
              <figure className="portfolio-item col-md-4 workout">
                <div className="magnific-img">
                  <a className="image-popup-vertical-fit" href="img/images/gallery2.jpg">
                    <img src="/assets/img/images/gallery2.jpg" alt="" />
                  </a>
                </div>
              </figure>
              <figure className="portfolio-item col-md-4 fitness">
                <div className="magnific-img">
                  <a className="image-popup-vertical-fit" href="img/images/gallery7.jpg">
                    <img src="/assets/img/images/gallery7.jpg" alt="" />
                  </a>
                </div>
              </figure>
              <figure className="portfolio-item col-md-4 design fitness">
                <div className="magnific-img">
                  <a className="image-popup-vertical-fit" href="img/images/gallery8.jpg">
                    <img src="/assets/img/images/gallery8.jpg" alt="" />
                  </a>
                </div>
              </figure>
              <figure className="portfolio-item col-md-4 workout">
                <div className="magnific-img">
                  <a className="image-popup-vertical-fit" href="img/images/gallery3.jpg">
                    <img src="/assets/img/images/gallery3.jpg" alt="" />
                  </a>
                </div>
              </figure>
              <figure className="portfolio-item col-md-4 fitness">
                <div className="magnific-img">
                  <a className="image-popup-vertical-fit" href="img/images/gallery9.jpg">
                    <img src="/assets/img/images/gallery9.jpg" alt="" />
                  </a>
                </div>
              </figure>
              <figure className="portfolio-item col-md-4 spinning">
                <div className="magnific-img">
                  <a className="image-popup-vertical-fit" href="img/images/gallery6.jpg">
                    <img src="/assets/img/images/gallery6.jpg" alt="" />
                  </a>
                </div>
              </figure>
            </div>
          </div>

          <div className="container">
            <div className="section-title">
              <h2>Customer Opinions</h2>
              <hr className="center" />
              <p>Always free from repetition repeat predefined chunks injected humour.</p>
            </div>
            <div className="main-gallery">
              <div className="gallery-cell">
                <div className="testimonial-section">
                  <div className="author-avatar"><img src="/assets/img/images/avatar1.jpg" alt="" /></div>
                  <h3 className="autor">Julie Belle</h3>
                  <h5 className="testimonial-title">Wonderful Gym highly recommended!</h5>
                  <p className="quote">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."</p>
                </div>
              </div>
              <div className="gallery-cell">
                <div className="testimonial-section">
                  <div className="author-avatar"><img src="/assets/img/images/avatar5.jpg" alt="" /></div>
                  <h3 className="autor">Carlos Lopez</h3>
                  <h5 className="testimonial-title">Wonderful Gym highly recommended!</h5>
                  <p className="quote">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."</p>
                </div>
              </div>
              <div className="gallery-cell">
                <div className="testimonial-section">
                  <div className="author-avatar"><img src="/assets/img/images/avatar4.jpg" alt="" /></div>
                  <h3 className="autor">Robert Luke</h3>
                  <h5 className="testimonial-title">Wonderful Gym highly recommended!</h5>
                  <p className="quote">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."</p>
                </div>
              </div>
            </div>
          </div>

          <FreeMem/>

          <div className="container">
            <div className="section-title">
              <h2>Latest News</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <hr className="center" />
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="blog-preview">
                  <figure className="thumb-preview"><a href="#"><img src="/assets/img/images/blogs2.jpg" alt="" /></a></figure>
                  <div className="fig-caption">
                    <h3><a href="#">How To build muscle</a></h3>
                    <p>Explorer of the truth the master-builder of human happiness with no one rejects, because those who. </p>
                    <hr />
                    <div className="preview-post-detalils">
                      <div className="post-categorie-left">
                        <p className="categorie">Yoga</p>
                      </div>
                      <div className="post-stats-right">
                        <p className="comment">212</p>
                        <p className="share">89</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  center-box">
                <div className="blog-preview">
                  <figure className="thumb-preview"><a href="#"><img src="/assets/img/images/blogs1.jpg" alt="" /></a></figure>
                  <div className="fig-caption">
                    <h3><a href="#">Exersicing your body</a></h3>
                    <p>Randomised words which don't look even slightly believable, versions have evolved over the years. </p>
                    <hr />
                    <div className="preview-post-detalils">
                      <div className="post-categorie-left">
                        <p className="categorie">Cardio</p>
                      </div>
                      <div className="post-stats-right">
                        <p className="comment">77</p>
                        <p className="share">133</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-preview">
                  <figure className="thumb-preview"><a href="#"><img src="/assets/img/images/blogs3.jpg" alt="" /></a></figure>
                  <div className="fig-caption">
                    <h3><a href="#">Best Yoga poses</a></h3>
                    <p>Page editors now use Lorem Ipsum as their default model text, established fact that a reader for all. </p>
                    <hr />
                    <div className="preview-post-detalils">
                      <div className="post-categorie-left">
                        <p className="categorie">Muscle</p>
                      </div>
                      <div className="post-stats-right">
                        <p className="comment">111</p>
                        <p className="share">193</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <Footer />

      </>

    )

  }

}



