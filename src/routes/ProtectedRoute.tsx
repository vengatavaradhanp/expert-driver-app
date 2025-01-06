import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}
