/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import AppFooter from "../components/Layouts/AppFooter";
import AppHeader from "../components/Layouts/AppHeader";
import BGHome from "../assets/img/bgHome.jpeg"
import Book from "../assets/img/book.png"
import Heart from "../assets/img/heart.jpg"
import Facebook from "../assets/img/facebook.png"
import Maplocation from "../assets/img/map.jpg"



export default function Homepage() {
  return <div>
    <AppHeader/>    
  
  {/* <!-- Carousel Start --> */}
  <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <img className="w-100" src={BGHome} alt="BgHomeImage"/>
                  <div className="carousel-caption">
                      <div className="container">
                          <div className="row justify-content-center">
                              <div className="col-lg-7">
                                  <h3 className="display-4 text-light mb-5 animated slideInDown">Affordable Driver Training Hobart</h3>
                                  <p className="text-light mb-5 animated slideInDown">journey to confident and safe driving begins...</p>
                                  <a href="" className="btn btn-primary py-sm-3 px-sm-5"   style={{ backgroundColor: "#bd1515", borderColor: "#bd1515" }}>Book Now</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
             <div className="carousel-item">
                  <img className="w-100" src={Book} alt="Image"/>
                  <div className="carousel-caption">
                      <div className="container">
                          <div className="row justify-content-center">
                              <div className="col-lg-7">
                                  <h1 className="display-2 text-light mb-5 animated slideInDown">Safe Driving Is Our Top Priority</h1>
                                  <a href="" className="btn btn-primary py-sm-3 px-sm-5">Learn More</a>
                                  <a href="" className="btn btn-light py-sm-3 px-sm-5 ms-3">Our Courses</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div> 
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button> 
      </div>
  </div>
  {/* <!-- Carousel End --> */}


  {/* <!-- Facts Start --> */}
  <div className="container-fluid facts py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="bg-white shadow d-flex align-items-center h-100 p-4"  style={{ minHeight: '150px' }}>
                      <div className="d-flex">
                          <div className="flex-shrink-0">
                              <img className="w-100" src={Book} alt="Image"/>
                          </div>
                          <div className="ps-4">
                              <h5>We provide Certfied Instructors</h5>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                  <div className="bg-white shadow d-flex align-items-center h-100 p-4"  style={{ minHeight: '150px' }}>
                      <div className="d-flex">
                          <div className="flex-shrink-0">
                              <img className="w-100" src={Heart} alt="Image"/>
                          </div>
                          <div className="ps-4">
                              <h5>We specialize in assisting nervous or anxious drivers</h5>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                  <div className="bg-white shadow d-flex align-items-center h-100 p-4"  style={{ minHeight: '150px' }}>
                      <div className="d-flex">
                          <div className="flex-shrink-0">
                              <img className="w-100" src={Facebook} alt="Image"/>
                          </div>
                          <div className="ps-4">
                              <h5>Our students rate us 10/10</h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  {/* <!-- Facts End --> */}


  {/* <!-- Courses Start --> */}
  <div className="container-xxl courses my-6 py-6 pb-0">
      <div className="container">
         
          <div className="row g-4 justify-content-center">
              <div className="col-lg-2"></div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                      <div className="text-center p-4 pt-0">
                      <div
  className="d-inline-block text-white fs-5 py-1 px-4 mb-4"
  style={{ backgroundColor: "#bd1515" }}
>
  $65
</div>

                          <h5 className="mb-3">Single Lesson 
                          </h5>
                          <p>Single Lessons: Ideal for beginners seeking an introductory session or experienced
                              drivers desiring a refresher.</p>
                              <p>Easy Booking: Schedule online with immediate confirmation.</p>
                          
                      </div>
                      <div className="position-relative mt-auto">
                          <img className="img-fluid" src={BGHome}alt=""/>
                          <div className="courses-overlay">
                              <a className="btn btn-outline-primary border-2" href="" >Book Now</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                      <div className="text-center p-4 pt-0">
                          <div   className="d-inline-block text-white fs-5 py-1 px-4 mb-4"
  style={{ backgroundColor: "#bd1515" }}></div>
                          <h5 className="mb-3">Package lesson</h5>
                          <p>For exceptional value, explore our lesson packages:</p>
                          <p>Package Options: Choose from 3,5, 7, or 10 lessons, each designed to offer significant
                              savings.</p>
                              <p>Ideal Gifts: Our lesson packages make thoughtful presents. Digital gift cards are available
                                  for all services.</p>
                            
                         
                      </div>
                      <div className="position-relative mt-auto">
                          <img className="img-fluid" src={BGHome}alt=""/>
                          <div className="courses-overlay">
                              <a className="btn btn-outline-primary border-2" href="">Packages</a>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <div className="col-lg-2"></div>
               <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                      <div className="text-center p-4 pt-0">
                          <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">$135</div>
                          <h5 className="mb-3">P1 Assessments</h5>
                          <p>If it's time to get your full Licence, take your test with Us!</p>
                          <p>We are accredited P1 Assessors working on behalf of State Growth and we're servicing the North Hobart, Glenorchy, Kingston, Bellerive, Moonah, Huonville, Sorell and New Norfolk Assessment Routes.</p>
                              <p>Please visit our P1 Assessment page for more information.</p>
                       
                      </div>
                      <div className="position-relative mt-auto">
                          <img className="img-fluid" src={BGHome}alt=""/>
                          <div className="courses-overlay">
                              <a className="btn btn-outline-primary border-2" href="">P1 Assessments</a>
                          </div>
                      </div>
                  </div>
              </div> */}
          </div>
      </div>
  </div>
  {/* <!-- Courses End --> */}


  {/* <!-- Features Start --> */}
  <div className="container-xxl py-6">
      <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"  style={{ minHeight: '150px' }}>
              <h1 className="display-6 mb-4">Servicing</h1>
          </div>
          <div className="row g-5">
             
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                      <img className="" src={Maplocation}alt="" />
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                 
                  <h5>We undertake Driving Lessons in the following Tasmanian suburbs:</h5>
                  <p>Derwent Park, Glebe, Glenorchy, Goodwood, Hobart CBD, Lenah Valley, Lutana, Montagu Bay,
                      Montrose, Moonah, Mount Stuart, New Town, North Hobart, Rose Bay, Rosny, West Hobart.</p>
                  <p>We also service Kingston and surrounding suburbs from a designated drop-off & pick-up location.
                  </p>
                  <p>For suburbs not listed, please call us to see if we can make alternative arrangements.</p>
                  <a className="btn btn-outline-primary border-2" href="" >Book Now</a>
              </div>
          </div>
      </div>
  </div><AppFooter/></div>;
}
