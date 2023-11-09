"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const IsClientCtx = createContext(false);

export const IsClientCtxProvider: React.FC<Props> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>
  );
};

export function useIsClient() {
  return useContext(IsClientCtx);
}
