import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import Preloader from "./Preloader";

export default function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [general, setGeneral] = useState([])
    const [busy, setBusy] = useState(true)
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/generalData')
          .then(response => response.json())
          .then(data => setGeneral(data.data))
          .then(() => setBusy(false))
    
      }, [])
    
    const onSubmit = (e) => {
        e.preventDefault();
        
      };
    const sendMessage=()=>{
        axios.post('http://127.0.0.1:8000/api/contactMessage', {
            name: name,
            email: email,
            message: message,
          })
          .then(function (response) {
            setName('')
            setEmail('') 
            setMessage('') 
            
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    if (busy) {
      return <Preloader />
  } else {

    return(
        <>
 
    
    <header className="section-header">
       <Menu/>
        
        <div className="pages-header">
            <div className="container">
                <div className="pages-title">
                    <h1>Contact us</h1>
                    <p>{general.contact_bennar_text}</p>
                </div>
            </div>
        </div>
    </header>
    
    <section>
        <div className="container">
            <div className="section-title">
                <h2>Get in Touch</h2>
                <p>{general.contact_text}</p>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 contact-col">
                <div className="contact-box">
                  <figure className="contact-icon"><img src="assets/img/master/location.png" alt=""/></figure>
                  <h3>Visit Us</h3>
                  <hr className="center"/>
                  <p>{general.address}</p>
                  <h6>{general.address}</h6>
                 
                </div>
              </div>
              <div className="col-md-6 col-lg-3 contact-col">
                <div className="contact-box">
                  <figure className="contact-icon"><img src="assets/img/master/email.png" alt=""/></figure>
                  <h3>Email Us</h3>
                  <hr className="center"/>
                  <p>{general.email}</p>
                  <h6>{general.address}</h6>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 contact-col">
                <div className="contact-box">
                  <figure className="contact-icon"><img src="assets/img/master/phone2.png" alt=""/></figure>
                  <h3>Call Us</h3>
                  <hr className="center"/>
                  <p>{general.phone}</p>
                  <h6>{general.address}</h6>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 contact-col">
                <div className="contact-box">
                  <figure className="contact-icon"><img src="assets/img/master/clock.png" alt=""/></figure>
                  <h3>Online Support</h3>
                  <hr className="center"/>
                  <p>{general.email}</p>
                  <h6>{general.address}</h6>
                </div>
              </div>
            </div>
        </div>
        <div className="container">
            <div className="section-title">
                <h3>Send Us a Message</h3>
                <p>Always free from repetition repeat predefined chunks injected humour</p>
            </div>
            <div className="contact-form">
              <form id="contact-form" method="post" action="" onSubmit={onSubmit}>
                    <div className="messages"></div>
                    <div className="controls">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input id="form_name" type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name} className="form-control custome-form" placeholder="Name" required="required" data-error="Firstname is required."/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input id="form_email" type="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control custome-form" placeholder="Email address" required="required" data-error="Valid email is required."/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea id="form_message" name="message" onChange={(e)=>setMessage(e.target.value)} className="form-control custome-form" placeholder="Your message" rows="3" required="required" data-error="Please,leave us a message." value={message}></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-send"><p><button  onClick={sendMessage} class="btn btn-custom btn-custom-small">SEND MESSAGE</button></p></div>
                    </div>
                    {/*  */}
                </form>
            </div> 
        </div>
        {/* <div className="maps"><iframe src="https://snazzymaps.com/embed/113777" width="100%" height="500px" style="border:none;"></iframe></div> */}
    </section>
    
<Footer/>
        </>
    )
}
}