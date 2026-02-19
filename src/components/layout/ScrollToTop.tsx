import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Force window to top-left instantly on route or search param change
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}