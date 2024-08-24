"use client";

import { useState, useEffect } from "react";

function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");

    const updateTouchDevice = (event: MediaQueryListEvent) => {
      setIsTouchDevice(event.matches);
    };

    setIsTouchDevice(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateTouchDevice);

    return () => mediaQuery.removeEventListener("change", updateTouchDevice);
  }, []);

  return isTouchDevice;
}

export default useIsTouchDevice;
