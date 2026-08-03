import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // السكرول الفوري
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);

    // سكرول متأخر بسيط عشان يتزامن مع خروج أنيميشن framer-motion
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default ScrollToTop;