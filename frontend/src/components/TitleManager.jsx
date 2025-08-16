import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import titles from "../title";

export default function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    const newTitle = titles[location.pathname] || "Software Technologies";
    document.title = newTitle;
  }, [location]);

  return null; 
}
