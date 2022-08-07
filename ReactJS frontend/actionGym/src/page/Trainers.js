import { useEffect, useState } from "react";
import Footer from "./Footer";
import FreeMem from "./FreeMem";
import Home from "./Home";
import HomeMotivation from "./HomeMotivation";
import Menu from "./Menu";
import Preloader from "./Preloader";

export default function Trainers() {
    const [trainer, setTrainer] = useState([])
    const [busy, setBusy] = useState(true)
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/trainer')
            .then(response => response.json())
            .then(data => setTrainer(data.data))
            .then(() => setBusy(false))

    }, [])
    if (busy) {
        return <Preloader />
    } else {
        return (
            <>



                <header className="section-header">
                    <Menu />
                    <div className="pages-header">
                        <div className="container">
                            <div className="pages-title">
                                <h1>Trainers</h1>
                                <p>Fitness is not a destination it is a way of life.</p>
                            </div>
                        </div>
                    </div>
                </header>

                <section>

                    <div className="container">
                        <div className="row">
                            {
                                trainer.map((d, i) => {
                                    if (i < 6) {
                                        return (
                                            <div className="col-lg-4 profile-card" key={i}>
                                                <div className="team-box">
                                                    <figure className="avatar"><img src={'http://127.0.0.1:8000/photo/trainer/' + d.photo} alt="" /></figure>
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

                    <div className="container">
                        <div className="section-title">
                            <h2>Customer Opinions</h2>
                            <hr className="center" />
                            <p>Always free from repetition repeat predefined chunks injected humour.</p>
                        </div>
                        <div className="main-gallery">
                            <div className="gallery-cell">
                                <div className="testimonial-section">
                                    <div className="author-avatar"><img src="img/images/avatar1.jpg" alt="" /></div>
                                    <h3 className="autor">Julie Belle</h3>
                                    <h5 className="testimonial-title">Wonderful Gym highly recommended!</h5>
                                    <p className="quote">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."</p>
                                </div>
                            </div>
                            <div className="gallery-cell">
                                <div className="testimonial-section">
                                    <div className="author-avatar"><img src="img/images/avatar5.jpg" alt="" /></div>
                                    <h3 className="autor">Carlos Lopez</h3>
                                    <h5 className="testimonial-title">Wonderful Gym highly recommended!</h5>
                                    <p className="quote">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."</p>
                                </div>
                            </div>
                            <div className="gallery-cell">
                                <div className="testimonial-section">
                                    <div className="author-avatar"><img src="img/images/avatar4.jpg" alt="" /></div>
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
                                    <figure className="thumb-preview"><a href="#"><img src="img/images/blogs2.jpg" alt="" /></a></figure>
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
                                    <figure className="thumb-preview"><a href="#"><img src="img/images/blogs1.jpg" alt="" /></a></figure>
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
                                    <figure className="thumb-preview"><a href="#"><img src="img/images/blogs3.jpg" alt="" /></a></figure>
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