"use client";

import { useEffect, useState } from "react";

export const useHash = (): string => {
  const getHash = () => {
    return window.location.hash;
  };

  const [hash, setHash] = useState(() =>
    typeof window !== "undefined" ? getHash() : "#home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setHash(getHash());
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return hash;
};
