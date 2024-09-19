import React from "react";
import Layout from "../../Layout/Layout";


function Home() {
    return(
        <div className="App">
            <Layout >
            <div className="untree_co--site-main">
                <div className="owl-carousel owl-hero">

                    <div className="untree_co--site-hero overlay" style={{backgroundImage: "url('/assets/images/slider_2.jpg')"}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-md-8">
                            <div className="site-hero-contents text-center" data-aos="fade-up">
                            <h1 className="hero-heading">LuxuryHotel by Untree.co</h1>
                            <div className="sub-text">
                                <p>Another free awesome templates for Hotels and any kind of website by <a href="https://untree.co/" target="_blank" className="text-white font-weight-bold">Untree.co</a>. See our <a href="https://untree.co/license/" className="text-white font-weight-bold">license page</a> for more usage details</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="untree_co--site-hero overlay"  style={{backgroundImage: "url('/assets/images/slider_1.jpg')"}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-md-7">
                            <div className="site-hero-contents text-center" data-aos="fade-up">
                            <h1 className="hero-heading">Enjoy Your Stay</h1>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="untree_co--site-hero overlay" style={{backgroundImage: "url('/assets/images/room_1_a.jpg')"}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-md-10">
                            <div className="site-hero-contents text-center" data-aos="fade-up">
                            <h1 className="hero-heading">Away from the Hustle and Bustle of City Life</h1>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="untree_co--site-section float-left pb-0 featured-rooms">

                    <div className="container pt-0 pb-5">
                    <div className="row justify-content-center text-center">  
                        <div className="col-lg-6 section-heading" data-aos="fade-up">
                        <h3 className="text-center">Featured Rooms</h3>
                        </div>
                    </div>
                    </div>

                    <div className="container-fluid pt-5">
                    <div className="suite-wrap overlap-image-1">

                        <div className="suite">
                        <div className="image-stack">
                            <div className="image-stack-item image-stack-item-top" data-jarallax-element="-50">
                            <div className="overlay"></div>
                            <img src="/assets/images/room_1_a.jpg" alt="Image" className="img-fluid pic1"/>
                            </div>
                            <div className="image-stack-item image-stack-item-bottom">
                            <div className="overlay"></div>
                            <img src="/assets/images/room_1_b.jpg" alt="Image" className="img-fluid pic2"/>
                            </div>
                        </div>
                        </div> {/* .suite */}

                        <div className="suite-contents" data-jarallax-element="50">
                        <h2 className="suite-title">King Bedroom</h2>
                        <div className="suite-excerpt">
                            <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality mattress in a small room to large suites with bigger.</p>
                            <div><p><a href="#" className="readmore">Room Details</a></p></div>
                        </div>
                        </div>
                    </div>

                    <div className="suite-wrap overlap-image-2">

                        <div className="suite">
                        <div className="image-stack">
                            <div className="image-stack-item image-stack-item-top">
                            <div className="overlay"></div>
                            <img src="/assets/images/room_2_a.jpg" alt="Image" className="img-fluid pic1"/>
                            </div>
                            <div className="image-stack-item image-stack-item-bottom" data-jarallax-element="-50">
                            <div className="overlay"></div>
                            <img src="/assets/images/room_2_b.jpg" alt="Image" className="img-fluid pic2"/>
                            </div>
                        </div>
                        </div>

                        <div className="suite-contents" data-jarallax-element="50">
                        <h2 className="suite-title">Queen &amp; Double Bedroom</h2>
                        <div className="suite-excerpt pr-5">
                            <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality mattress in a small room to large suites with bigger</p>
                            <div><p><a href="#" className="readmore">Room Details</a></p></div>
                        </div>
                        </div>

                    </div>

                    </div>
                </div>

                <div className="untree_co--site-section">
                    <div className="container">
                        <div className="container pt-0 pb-5">
                            <div className="row justify-content-center text-center">  
                                <div className="col-lg-6 section-heading" data-aos="fade-up">
                                <h3 className="text-center">Hotel Amenities</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row custom-row-02192 align-items-stretch">
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                                <div className="media-29191 text-center h-100">
                                    <div className="media-29191-icon">
                                    <img src="/assets/images/svg/parking.svg" alt="Image" className="img-fluid"/>
                                    </div>
                                    <h3>Free Self-Parking</h3>
                                    <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                                    <p><a href="#" className="readmore reverse">Read More</a></p>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
                                <div className="media-29191 text-center h-100">
                                    <div className="media-29191-icon">
                                    <img src="/assets/images/svg/internet.svg" alt="Image" className="img-fluid"/>
                                    </div>
                                    <h3>High speed Internet access</h3>
                                    <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                                    <p><a href="#" className="readmore reverse">Read More</a></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                                <div className="media-29191 text-center h-100">
                                    <div className="media-29191-icon">
                                    <img src="/assets/images/svg/wifi.svg" alt="Image" className="img-fluid"/>
                                    </div>
                                    <h3>Complimentary WiFi in public areas</h3>
                                    <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                                    <p><a href="#" className="readmore reverse">Read More</a></p>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
                                <div className="media-29191 text-center h-100">
                                    <div className="media-29191-icon">
                                    <img src="/assets/images/svg/elevator.svg" alt="Image" className="img-fluid"/>
                                    </div>
                                    <h3>Elevators</h3>
                                    <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                                    <p><a href="#" className="readmore reverse">Read More</a></p>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                                <div className="media-29191 text-center h-100">
                                    <div className="media-29191-icon">
                                    <img src="/assets/images/svg/partners.svg" alt="Image" className="img-fluid"/>
                                    </div>

                                    <h3>Meeting rooms</h3>
                                    <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                                    <p><a href="#" className="readmore reverse">Read More</a></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
                                <div className="media-29191 text-center h-100">
                                    <div className="media-29191-icon">
                                    <img src="/assets/images/svg/washing-machine.svg" alt="Image" className="img-fluid"/>
                                    </div>
                                    <h3>Laundry and Valet service</h3>
                                    <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                                    <p><a href="#" className="readmore reverse">Read More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

            
            

                <div className="untree_co--site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 section-heading" data-aos="fade-up">
                            <h3 className="text-left">News &amp; Events</h3>
                            <div className="w-75">
                                <p>A hotel is an establishment that provides paid lodging on a short-term basis.</p>
                                </div>
                            <p><a href="#" className="readmore">All Posts</a></p>
                            </div>
                            <div className="col-md-4">
                            <div className="post-entry" data-aos="fade-up" data-aos-delay="100">
                                <a href="#" className="thumb"><img src="/assets/images/img_1.jpg" alt="Image" className="img-fluid"/></a>
                                <div className="post-entry-contents">
                                <h3><a href="#">How algorithms shape our world</a></h3>
                                <div className="date">December 20, 2019 &bullet; by <a href="#">Joefrey Mahusay</a></div>
                                <p>A hotel is an establishment that provides paid lodging on a short-term basis.</p>
                                <p><a href="#" className="readmore">Read more</a></p>
                                </div>
                            </div>
                            </div>

                            <div className="col-md-4">
                                <div className="post-entry" data-aos="fade-up" data-aos-delay="200">
                                    <a href="#" className="thumb"><img src="/assets/images/img_3.jpg" alt="Image" className="img-fluid"/></a>
                                    <div className="post-entry-contents">
                                        <h3><a href="#">How algorithms shape our world</a></h3>
                                        <div className="date">December 20, 2019 &bullet; by <a href="#">Joefrey Mahusay</a></div>
                                        <p>A hotel is an establishment that provides paid lodging on a short-term basis.</p>
                                        <p><a href="#" className="readmore">Read more</a></p>
                                    </div>
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


            </div>
            </Layout>
        </div>
    )
}

export default Home;