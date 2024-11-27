import React, { useEffect } from "react";
import useAuthStore from "../stores/authStore";

const TestLogin = () => {

  const { user, isAuthenticated } = useAuthStore();
 




  return (
    <div className="TestLogin">
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user ? user.first_name : "Guest"}!</h1>
          <p>Email: {user?.email}</p>
        </div>
      ) : (
        
        <h1>Welcome, Guest!</h1>
      )}


    </div>
  );
};

export default TestLogin;
