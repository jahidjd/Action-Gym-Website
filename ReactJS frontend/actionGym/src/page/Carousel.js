import { useEffect, useState } from "react"

export default function Carousel({slider}) {


  


    return (
      <>
        <div className="carousel">
          <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
           
              {
                slider.map((d, i) => {
                  if (i < 1) {
                    return (
                      <div className="carousel-inner" key={i}>
                      <div  className={(i==0)? 'carousel-ite active' : 'carousel-ite'} >
                        <div className="carousel-img-1" style={{backgroundImage:"url(http://127.0.0.1:8000/photo/slider/"+d.photo+")"}}></div>
                        <div className="carousel-caption">
                          <h1 className='animated fadeInLeft' >{d.big_text}</h1>
                          <h5 className="animated fadeInUp">{d.small_text}</h5>
                          <div className="slider-btn">
                            <div className="animated inner-btn fadeInUp"><a href="#" className="btn btn-custom">START NOW</a></div>
                          </div>
                        </div>
                      </div>
                      </div>
                    )
                  }
                })
              }



         
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
       
      </>

    )

  }
