import React from "react";
import logo from "./logo.svg";
// Bootstrap and Animations
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

// FontAwesome Icons (Optional)
import '@fortawesome/fontawesome-free/css/all.min.css';

// Owl Carousel (If Needed)
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AppRoute from "./routes/AppRoute";

function App() {
  return <AppRoute />;
}

export default App;
