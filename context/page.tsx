"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CountContextType = {
  Count: number;
  setCount: (val: number) => void;
};

const CountContext = createContext<CountContextType | null>(null);

export function CountProvider({ children }: { children: ReactNode }) {
  const [Count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ Count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  return useContext(CountContext);
}
