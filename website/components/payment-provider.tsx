"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface PaymentContextType {
  isConnected: boolean;
  setConnected: (connected: boolean) => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Load payment status from localStorage on initial render
    const storedStatus = localStorage.getItem("paymentConnected");
    if (storedStatus) {
      setIsConnected(storedStatus === "true");
    }
  }, []);

  const setConnected = (connected: boolean) => {
    setIsConnected(connected);
    localStorage.setItem("paymentConnected", connected.toString());
  };

  return (
    <PaymentContext.Provider
      value={{ isConnected, setConnected }}
      data-oid="g5v7q87"
    >
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
}
