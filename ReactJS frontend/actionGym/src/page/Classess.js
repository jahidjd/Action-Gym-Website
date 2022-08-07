import { useEffect, useState } from "react";
import Footer from "./Footer";
import FreeMem from "./FreeMem";
import HomeMotivation from "./HomeMotivation";
import Menu from "./Menu";
import Preloader from "./Preloader";

export default function Classess() {
  const [classess, setClassess] = useState([])
  const [busy, setBusy] = useState(true)
  const [general, setGeneral] = useState([])
  useEffect(() => {
      fetch('http://127.0.0.1:8000/api/generalData')
        .then(response => response.json())
        .then(data => setGeneral(data.data))
  
    }, [])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/classess')
      .then(response => response.json())
      .then(data => setClassess(data.data))
      .then(() => setBusy(false))
  }, [])
  if (busy) {
    return <Preloader />
} else {
  return (
    <>



      <header class="section-header">
        <Menu />

        <div class="pages-header">
          <div class="container">
            <div class="pages-title">
              <h1>Classes</h1>
              <p>{general.classess_bennar_text}</p>
            </div>
          </div>
        </div>
      </header>

      <section>

        <div class="container">
          <div class="row hover-effects image-hover">
            {
              classess.map((d, i) => {
                if (i < 6) {
                  return (
                    <div class="col-lg-4 image-box classes">
                      <figure><img src={'http://127.0.0.1:8000/photo/classess/'+d.photo} alt="" /></figure>
                      <div class="caption">
                        <div class="caption-icon"><img src={'http://127.0.0.1:8000/photo/classess/icon/'+d.icon} alt="" /></div>
                        <div class="caption-label">
                          <h5>{d.title}</h5>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }


          </div>
        </div>

        <HomeMotivation/>

        <div class="container">
          <div class="section-title">
            <h2>Customer Opinions</h2>
            <hr class="center" />
            <p>Always free from repetition repeat predefined chunks injected humour.</p>
          </div>
          <div class="main-gallery">
            <div class="gallery-cell">
              <div class="testimonial-section">
                <div class="author-avatar"><img src="img/images/avatar1.jpg" alt="" /></div>
                <h3 class="autor">Julie Belle</h3>
                <h5 class="testimonial-title">Wonderful Gym highly recommended!</h5>
                <p class="quote">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."</p>
              </div>
            </div>
            <div class="gallery-cell">
              <div class="testimonial-section">
                <div class="author-avatar"><img src="img/images/avatar5.jpg" alt="" /></div>
                <h3 class="autor">Carlos Lopez</h3>
                <h5 class="testimonial-title">Wonderful Gym highly recommended!</h5>
                <p class="quote">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."</p>
              </div>
            </div>
            <div class="gallery-cell">
              <div class="testimonial-section">
                <div class="author-avatar"><img src="img/images/avatar4.jpg" alt="" /></div>
                <h3 class="autor">Robert Luke</h3>
                <h5 class="testimonial-title">Wonderful Gym highly recommended!</h5>
                <p class="quote">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."</p>
              </div>
            </div>
          </div>
        </div>

       <FreeMem/>

        <div class="container">
          <div class="section-title">
            <h2>Latest News</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <hr class="center" />
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="blog-preview">
                <figure class="thumb-preview"><a href="#"><img src="img/images/blogs2.jpg" alt="" /></a></figure>
                <div class="fig-caption">
                  <h3><a href="#">How To build muscle</a></h3>
                  <p>Explorer of the truth the master-builder of human happiness with no one rejects, because those who. </p>
                  <hr />
                  <div class="preview-post-detalils">
                    <div class="post-categorie-left">
                      <p class="categorie">Yoga</p>
                    </div>
                    <div class="post-stats-right">
                      <p class="comment">212</p>
                      <p class="share">89</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4  center-box">
              <div class="blog-preview">
                <figure class="thumb-preview"><a href="#"><img src="img/images/blogs1.jpg" alt="" /></a></figure>
                <div class="fig-caption">
                  <h3><a href="#">Exersicing your body</a></h3>
                  <p>Randomised words which don't look even slightly believable, versions have evolved over the years. </p>
                  <hr />
                  <div class="preview-post-detalils">
                    <div class="post-categorie-left">
                      <p class="categorie">Cardio</p>
                    </div>
                    <div class="post-stats-right">
                      <p class="comment">77</p>
                      <p class="share">133</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog-preview">
                <figure class="thumb-preview"><a href="#"><img src="img/images/blogs3.jpg" alt="" /></a></figure>
                <div class="fig-caption">
                  <h3><a href="#">Best Yoga poses</a></h3>
                  <p>Page editors now use Lorem Ipsum as their default model text, established fact that a reader for all. </p>
                  <hr />
                  <div class="preview-post-detalils">
                    <div class="post-categorie-left">
                      <p class="categorie">Muscle</p>
                    </div>
                    <div class="post-stats-right">
                      <p class="comment">111</p>
                      <p class="share">193</p>
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