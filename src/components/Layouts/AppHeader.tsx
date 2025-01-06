import Logo from "../../assets/img/logo.webp"
import {NavLink } from "react-router-dom";

export default function AppHeader() {
  return <div><nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
  <div className="container p-0">
  <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
     <img className="logoImage" src={Logo} alt="" />
     {/* <div className="display: flex; flex-direction: column;">
  <div>Affordable Driver</div>
  <div>Training</div>
</div> */}

  </a>
  <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
      <NavLink
        to="/"
        className="nav-item nav-link"
        style={({ isActive }) => ({
          color: isActive ? "#bd1515" : "#000", // Change the colors as needed
        })}
      >
        home
      </NavLink>
      {/* <NavLink
        to="/home"
        className="nav-item nav-link"
        style={({ isActive }) => ({
          color: isActive ? "#bd1515" : "#000", // Change the colors as needed
        })}
      >
        
      </NavLink> */}
      <NavLink
        to="/lessons"
        className="nav-item nav-link"
        style={({ isActive }) => ({
          color: isActive ? "#bd1515" : "#000",
        })}
      >
        LESSON PACKAGES
      </NavLink>
      <NavLink
        to="/booking"
        className="nav-item nav-link"
        style={({ isActive }) => ({
          color: isActive ? "#bd1515" : "#000",
        })}
      >
        BOOK ONLINE
      </NavLink>
      <NavLink
        to="/giftcard"
        className="nav-item nav-link"
        style={({ isActive }) => ({
          color: isActive ? "r#bd1515ed" : "#000",
        })}
      >
        GIFT CARD
      </NavLink>
      <NavLink
        to="/contact"
        className="nav-item nav-link"
        style={({ isActive }) => ({
          color: isActive ? "#bd1515" : "#000",
        })}
      >
        CONTACT US
      </NavLink>
      </div>
      <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
        style={{ backgroundColor: "#bd1515", borderColor: "#bd1515" }}
      ><i className="fa fa-user-circle"></i> Log In</a>
  </div>
</div>
</nav></div>;
}
