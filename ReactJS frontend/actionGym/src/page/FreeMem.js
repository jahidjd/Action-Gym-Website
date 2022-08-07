import { useEffect, useState } from "react"

export default function FreeMem(){
    const [membarship, setMembarship] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/homeCamp')
        .then(response=>response.json())
        .then(data=>setMembarship(data.data))
    })
    return(
        <div className="container-fluid promotion-parallax">
            <div className="container">
              <div className="promo-content">
                <h2>FREE MEMBERSHIP</h2>
                <h4>{membarship.title}</h4>
                <p>{membarship.description}</p>
                <p><a href="#" className="btn btn-custom btn-custom-small">JOIN NOW</a></p>
              </div>
            </div>
          </div>
    )
}