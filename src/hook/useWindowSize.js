import { useState, useEffect, useLayoutEffect } from "react";

const useIsomorphicEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const nullDimensions = {
  innerHeight: null,
  innerWidth: null,
  outerHeight: null,
  outerWidth: null,
};

function getDimensions() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window === "undefined") {
      return nullDimensions;
    } else {
      return getDimensions();
    }
  });

  function onResize() {
    setWindowSize(getDimensions());
  }

  // set resize handler once on mount and clean before unmount
  useIsomorphicEffect(() => {
    if (typeof window === "undefined") {
      return () => {};
    } else {
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }
  }, []);

  return windowSize;
}
