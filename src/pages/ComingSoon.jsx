import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const [countdown, setCountdown] = useState(60); // Set initial countdown (in seconds)
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  const handleNavigate = () => {
    navigate("/"); // Navigate to the main site or home page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bg-light text-text-color">
      <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
      <p className="text-lg mb-4">
        We're working hard to launch our website. Stay tuned!
      </p>
      <p className="text-xl mb-4">Time remaining: {countdown} seconds</p>
      <button
        onClick={handleNavigate}
        className="bg-primary-color text-bg-light px-4 py-2 rounded hover:bg-secondary-color transition duration-200"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ComingSoon;
