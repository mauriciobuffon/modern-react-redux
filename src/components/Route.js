import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = (event) => {
      setRoute(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return route === path ? children : null;
};

export default Route;
