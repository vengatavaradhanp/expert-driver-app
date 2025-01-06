import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ProtectedRoute from "./ProtectedRoute";
import Homepage from "../pages/Homepage";
import LessonPackages from "../pages/LessonPackages";
import Booking from "../pages/Booking";
import GiftCard from "../pages/GiftCard";
import Loginpage from "../pages/Loginpage";
import ContacUs from "../pages/ContacUs";
import Calendar from "../pages/Calendar";
import Payment from "../pages/Payment";
function AppRoute() {
  const options = {
    clientId: "test",
    currency: "USD", 
    intent: "capture", 
    vault:true
  };
  return (
    <PayPalScriptProvider options={options}>
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/home" element={<Homepage />} /> */}
          <Route path="/lessons" element={<LessonPackages />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/giftcard" element={<GiftCard />} />
          <Route path="/contact" element={<ContacUs />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
    </PayPalScriptProvider>
  );
}

export default AppRoute;
