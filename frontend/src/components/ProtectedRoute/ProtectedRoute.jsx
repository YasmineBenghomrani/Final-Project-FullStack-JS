import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return children;
  }
  return <Navigate to="/Login" />;
}
