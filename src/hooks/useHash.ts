"use client";

import { useEffect, useState } from "react";

export const useHash = (): string => {
  const getHash = () => {
    const raw = window.location.hash;

    return raw ? raw : "#";
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
