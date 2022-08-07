import { useEffect, useState } from "react";
export default function HomeMotivation(){
    const [homeMotiv, setHomeMotiv] = useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/homeMotivation')
    .then(response=>response.json())
    .then(data=>setHomeMotiv(data.data))
    
  })
    return(
        <>
             <div className="container-fluid parallax">
            <div className="container">
              <div className="inner-parallax">
                <h5>{homeMotiv.title}</h5>
                <h2>PUSH YOURSELF</h2>
                <p>{homeMotiv.description}</p>
                <div className="counter-facts">
                  <div className="inner-facts">
                    <figure className="counter-icon"><img src="/assets/img/master/trainer.png" alt="" /></figure>
                    <div className="counter"><h3>{homeMotiv.total_staff}</h3></div>
                    <p>QUALIFIED STAFF</p>
                  </div>
                  <div className="inner-facts">
                    <figure className="counter-icon"><img src="/assets/img/master/kg.png" alt="" /></figure>
                    <div className="counter"><h3>{homeMotiv.calories_burn}</h3></div>
                    <p>CALORIES BURNED</p>
                  </div>
                  <div className="inner-facts">
                    <figure className="counter-icon"><img src="/assets/img/master/smile.png" alt="" /></figure>
                    <div className="counter"><h3>{homeMotiv.happy_customer}</h3></div>
                    <p>HAPPY CUSTOMERS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}