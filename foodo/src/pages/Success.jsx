import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
import api from "../axios.config";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  
  const clearCart = async () => {
    
    try {
      // Fetch JWT token from localStorage or wherever it's stored
      const jwtToken = localStorage.getItem("token"); // Assuming token is stored in localStorage
  
      if (!jwtToken) {
        // Handle case when token is not available
        console.error("JWT token not found");
        return;
      }
  
      // Include JWT token in request headers
      const config = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
  
      // Make GET request to the /clear-cart endpoint with JWT token in headers
      const res = await api.get("/clear-cart", config);
    
      const data = res.data;
      toast.success(data.message);
    
    } catch (error) {
      console.error("Error while clearing cart:", error);
      // Handle error
    }
  };
  
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been sucessfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
