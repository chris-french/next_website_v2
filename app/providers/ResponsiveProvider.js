'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

const ResponsiveContext = createContext();

export const useResponsive = () => useContext(ResponsiveContext);

export const ResponsiveProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={windowSize}>
      {children}
    </ResponsiveContext.Provider>
  );
};
