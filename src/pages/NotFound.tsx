
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary px-6 text-white">
      <div className="text-center max-w-xl animate-fade-in">
        <h1 className="text-8xl font-bold mb-6">404</h1>
        <p className="text-2xl mb-8 font-light">Oops! We couldn't find this page.</p>
        <p className="text-lg mb-10 text-white/80">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 rounded-md bg-white text-primary font-semibold transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
