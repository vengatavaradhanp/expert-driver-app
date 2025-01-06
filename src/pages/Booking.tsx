import React, { useState } from "react";
import AppHeader from "../components/Layouts/AppHeader";
import AppFooter from "../components/Layouts/AppFooter";

export default function Booking() {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("home");

  // Handle tab click
  const handleTabClick = (tabId: React.SetStateAction<string>) => {
    setActiveTab(tabId); // Update the active tab
  };
  return (
    <div>
      {" "}
      <AppHeader />
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center"></div>
      </div>
      {/* <!-- Page Header End --> */}
      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h1 className="display-6 mb-4">
              Let's begin your driving jorney...
            </h1>
            <p>
              Our online booking tool allows you to select, schedule and
              securely pay for Lessons up to 3 months in advance, with
              confirmation provided immediately over email. 50 Minute Lessons
              can also be purchased in Lesson Packages which you can schedule
              yourself below.
            </p>
            <p>But before we do...we just want to let you know:</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle mx-auto"
                      src="img/testImg1.webp"
                      alt=""
                    />
                  </div>
                  <p className="fs-4">
                    Our leassons are ONLY automatic tansmionplease be aware
                    befor booking.
                  </p>
                  <p className="fs-4">
                    We service Hobart and surrounding suburbs and Kingston from
                    a designated drop-off & pick-up location. For a complete
                    list, please check out our Home page. Servicing Hobart &
                    Kingston
                  </p>
                  <p className="fs-4">
                    All Students must present a valid licence at the
                    commencement of any lesson.
                  </p>
                  <hr className="w-25 mx-auto" />
                </div>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle mx-auto"
                      src="img/testImg2.webp"
                      alt=""
                    />
                  </div>
                  <p className="fs-4">
                    We service Hobart and surrounding suburbs as well as
                    Kingston from a designated drop-off & pick-up location.
                  </p>
                  <p className="fs-4">
                    For a complete list, please check out our Home page.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Servicing Hobart & Kingston</h5>
                </div>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle mx-auto"
                      src="img/testImg3.webp"
                      alt=""
                    />
                  </div>
                  <p className="fs-4">
                    All Students must present a valid licence at the
                    commencement of any lesson or P1 Assessment.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Valid Licence</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center py-5 wow fadeInUp">
          Please also take the time to read our Terms & Conditions, Privacy
          Policy & Privacy Collection Statement
        </p>
      </div>
      <div className="container-fluid py-6 bg-custom">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: "150px" }}
          >
            <h1 className="display-6 mb-4">Select Service Type</h1>
          </div>
          <div className="panel-body">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                  onClick={() => handleTabClick("home")}
                  href="#home"
                >
                  Lessons - Hobart
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "menu1" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("menu1")}
                  href="#menu1"
                >
                  Lessons - North Hobart
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "menu2" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("menu2")}
                  href="#menu2"
                >
                  Lessons - CBD
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "menu3" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("menu3")}
                  href="#menu3"
                >
                  Lessons - Sandy Bay
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "menu4" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("menu4")}
                  href="#menu4"
                >
                  Lessons - Glenorchy
                </a>
              </li>
            </ul>

            {/* Tab panes */}
            <div className="tab-content">
              {/* Tab 1 */}
              {activeTab === "home" && (
                <div className="tab-pane container active p-0" id="home">
                  <ul className="list-group">
                    <li className="list-group-item p-4">
                      <div className="row">
                        <div className="col-lg-7">
                        <h6 className="text-uppercase mb-2" style={{ color: "#bd1515" }}>
                            50 Min Lesson - Auto (Hobart)
                          </h6>
                          <p>
                            Departing your pick-up location (service area) or a
                            designated spot.
                          </p>
                        </div>
                        <div className="col-lg-3">
                          <h1 className="display-6 mb-4">$65</h1>
                        </div>
                        <div className="col-lg-2">
                          <button
                            className="btn btn-primary py-3"
                            type="submit"
                            style={{ backgroundColor: "#bd1515", borderColor: "#bd1515" }}
                          >
                            Book Now
                          </button>
                          <div>
                            <a href="#" style={{color:"#bd1515",textDecoration: 'none'}}>Explore Plans</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item p-4">
                      <div className="row">
                        <div className="col-lg-7">
                        <h6 className="text-uppercase mb-2" style={{ color: "#bd1515" }}>
                            50 Min Lesson - Auto (Hobart)
                          </h6>
                          <p>
                            Departing your pick-up location (service area) or a
                            designated spot.
                          </p>
                        </div>
                        <div className="col-lg-3">
                          <h1 className="display-6 mb-4">$65</h1>
                        </div>
                        <div className="col-lg-2">
                          <button
                            className="btn btn-primary py-3"
                            type="submit"
                            style={{ backgroundColor: "#bd1515", borderColor: "#bd1515" }}
                          >
                            Book Now
                          </button>
                          <div>
                            <a href="#" style={{color:"#bd1515",textDecoration: 'none'}}>Explore Plans</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {/* Tab 2 */}
              {activeTab === "menu1" && (
                <div className="tab-pane container active p-0" id="menu1">
                  <ul className="list-group">
                    <li className="list-group-item p-4">
                      <div className="row">
                        <div className="col-lg-7">
                        <h6 className="text-uppercase mb-2" style={{ color: "#bd1515" }}>
                            50 Min Lesson - Auto (Kingston)
                          </h6>
                          <p>
                            Departing from Kingborough Community Hub, Goshawk
                            Way, Kingston
                          </p>
                        </div>
                        <div className="col-lg-3">
                          <h1 className="display-6 mb-4">$80</h1>
                        </div>
                        <div className="col-lg-2">
                          <button
                            className="btn btn-primary py-3"
                            type="submit"
                            style={{ backgroundColor: "#bd1515", borderColor: "#bd1515" }}
                          >
                            Book Now
                          </button>
                          <div>
                            <a href="#" style={{color:"#bd1515",textDecoration: 'none'}}>Explore Plans</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item p-4">
                      <div className="row">
                        <div className="col-lg-7">
                        <h6 className="text-uppercase mb-2" style={{ color: "#bd1515" }}>
                            50 Min Lesson - Auto (Kingston)
                          </h6>
                          <p>
                            Departing from Kingborough Community Hub, Goshawk
                            Way, Kingston
                          </p>
                        </div>
                        <div className="col-lg-3">
                          <h1 className="display-6 mb-4">$80</h1>
                        </div>
                        <div className="col-lg-2">
                          <button
                            className="btn btn-primary py-3"
                            type="submit"
                            style={{ backgroundColor: "#bd1515", borderColor: "#bd1515" }}
                          >
                            Book Now
                          </button>
                          <div>
                            <a href="#" style={{color:"#bd1515",textDecoration: 'none'}}>Explore Plans</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "menu2" && (
                <div className="tab-pane container active p-0" id="menu2">
                  <ul className="list-group">
                    <li className="list-group-item p-4">
                      <div className="row">
                        <div className="col-lg-7">
                        <h6 className="text-uppercase mb-2" style={{ color: "#bd1515" }}>                            50 Min Night Lesson - Auto (Glenorchy)
                          </h6>
                          <p>Departing from Glenorchy City Council car park</p>
                        </div>
                        <div className="col-lg-3">
                          <h1 className="display-6 mb-4">$80</h1>
                        </div>
                        <div className="col-lg-2">
                          <button
                            className="btn btn-primary py-3"
                            type="submit"
                            style={{ backgroundColor: "#bd1515", borderColor: "#bd1515" }}
                          >
                            Book Now
                          </button>
                          <div>
                            <a href="#" style={{color:"#bd1515",textDecoration: 'none'}}>Explore Plans</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "menu3" && (
                <div className="tab-pane container active p-0" id="menu3">
                  <ul className="list-group">
                    <li className="list-group-item p-4">
                      <div className="row">
                        <div className="col-lg-7">
                        <h6 className="text-uppercase mb-2" style={{ color: "#bd1515" }}>                            50 Min Lesson - Auto (Kingston)
                          </h6>
                          <p>
                            Departing from Kingborough Community Hub, Goshawk
                            Way, Kingston
                          </p>
                        </div>
                        <div className="col-lg-3">
                          <h1 className="display-6 mb-4">$80</h1>
                        </div>
                        <div className="col-lg-2">
                          <button
                            className="btn btn-primary py-3"
                            type="submit"
                            style={{ backgroundColor: "#bd1515", borderColor: "#bd1515" }}
                          >
                            Book Now
                          </button>
                          <div>
                            <a href="#" style={{color:"#bd1515",textDecoration: 'none'}}>Explore Plans</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "menu4" && (
                <div className="tab-pane container active p-0" id="menu4">
                  <ul className="list-group">
                    <li className="list-group-item p-4">
                      <div className="row">
                        <div className="col-lg-7">
                        <h6 className="text-uppercase mb-2" style={{ color: "#bd1515" }}>
  50 Min Night Lesson - Auto (Glenorchy)
</h6>

                          <p>Departing from Glenorchy City Council car park</p>
                        </div>
                        <div className="col-lg-3">
                          <h1 className="display-6 mb-4">$80</h1>
                        </div>
                        <div className="col-lg-2">
                          <button
                            className="btn btn-primary py-3"
                            type="submit"
                            style={{ backgroundColor: "#bd1515", borderColor: "#bd1515" }}
                          >
                            Book Now
                          </button>
                          <div>
                            <a href="#" style={{color:"#bd1515",textDecoration: 'none'}}>Explore Plans</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
