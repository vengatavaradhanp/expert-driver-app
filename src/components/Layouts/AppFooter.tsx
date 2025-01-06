import { data } from "react-router-dom";
import "../../App.scss";
import FaceBook from "../../assets/img/facebooksmall.webp";
import Instagram from "../../assets/img/insta.webp";

export default function AppFooter() {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer my-6 mb-0 py-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <a className="btn btn-link" href="mailto:bookings@expertdrivertraining.com.au"  style={{ textDecoration: 'none' }}>
                bookings@expertdrivertraining.com.au
              </a>
              <a className="btn btn-link" href="tel:0424454338"  style={{ textDecoration: 'none' }}>
                0424 454 338
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex pt-2 justify-content-center">
                <a className="me-1" href="#">
                  <img className="" src={FaceBook} alt="Facebook" />
                </a>
                <a className="me-1" href="#">
                  <img className="" src={Instagram} alt="Instagram" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <a className="btn btn-link" href="#"  style={{ textDecoration: 'none' }}>
                Privacy Policy
              </a>
              <a className="btn btn-link" href="#"  style={{ textDecoration: 'none' }}>
                Code of Conduct
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a className="btn btn-link" href="#"  style={{ textDecoration: 'none' }}>
                Privacy Collection Statement
              </a>
              <a className="btn btn-link" href="#"  style={{ textDecoration: 'none' }}>
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div
        className="container-fluid copyright text-light py-2 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <p className="mb-0">
          &copy;{new Date().getFullYear()} by DataTech Genius. In: 000000000000
          </p>
        </div>
      </div>
      {/* Copyright End */}
    </>
  );
}
