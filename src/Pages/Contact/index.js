import React from "react";
import Layout from "../../Layout/Layout";


function Contact() {
    return(
        <div className="App">
            <Layout >
            <main className="untree_co--site-main">
        

        <div className="untree_co--site-hero inner-page bg-light" style={{backgroundColor: '#000'}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-9">
                <div className="site-hero-contents" data-aos="fade-up">
                  <h1 className="hero-heading">Contact Us</h1>
                  <div className="sub-text w-75">
                    <p>Facilities provided may range from a modest-quality mattress in a small room to large suites with bigger.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="untree_co--site-section">
          <div className="container">
            
              <div className="row">
                <div className="col-12" data-aos="fade-up">
                  <h2 className="display-4 mb-5">Fill the form</h2>
                </div>
                <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                  
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email2">Your Email *</label>
                      <input type="text" className="form-control" id="email2"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" className="form-control" id="subject"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea name="message" className="form-control" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Send" className="btn btn-black px-5 text-white"/>
                    </div>
                  </form>
                </div>
                <div className="col-md-4 ml-auto"  data-aos="fade-up" data-aos-delay="200">
                  <div className="media-29190">
                    <span className="label">Email</span>
                    <p><a href="#">info@Untree.co</a></p>
                  </div>
                  <div className="media-29190">
                    <span className="label">Phone</span>
                    <p><a href="#">+30 931 3829 399</a></p>
                  </div>
                  <div className="media-29190">
                    <span className="label">Address</span>
                    <p>273 South Riverview Rd. New York, NY 10011</p>
                  </div>
                  <div className="media-29190">
                    <span className="label">Social</span>
                    <ul className="icons-top icons-dark">
                      <li>
                        <a href="#"><span className="icon-facebook"></span></a>
                      </li>
                      <li>
                        <a href="#"><span className="icon-twitter"></span></a>
                      </li>
                      <li>
                        <a href="#"><span className="icon-instagram"></span></a>
                      </li>
                      <li>
                        <a href="#"><span className="icon-tripadvisor"></span></a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            
          </div>
        </div>

        <div className="untree_co--site-section py-5 bg-body-darker cta">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h3 className="m-0 p-0">If you have any special requests, please feel free to call us. <a href="tel://+123456789012">+12.345.678.9012</a></h3>
              </div>
            </div>
          </div>
        </div>

      </main>
            </Layout>
        </div>
    )
}

export default Contact;