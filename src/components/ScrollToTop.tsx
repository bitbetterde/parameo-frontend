import { useEffect } from "react";
import { useLocation } from "wouter";
import { useUtilStore } from "@stores";

const ScrollToTop = () => {
  const [pathname] = useLocation();
  const skipNextScrollToTop = useUtilStore(
    (state) => state.skipNextScrollToTop
  );
  const setSkipNextScrollToTop = useUtilStore(
    (state) => state.setSkipNextScrollToTop
  );

  useEffect(() => {
    if (skipNextScrollToTop) {
      setSkipNextScrollToTop(false);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
