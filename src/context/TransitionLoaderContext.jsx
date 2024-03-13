import { createContext, useContext, useState } from "react";

const TransitionLoaderContext = createContext();

const TransitionProvider = function ({ children, initialState = false }) {
  const [isLoading, setIsLoading] = useState(initialState);

  return (
    <TransitionLoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </TransitionLoaderContext.Provider>
  );
};

const useTransitionContext = function () {
  const context = useContext(TransitionLoaderContext);
  if (context === undefined)
    throw new Error("This context is used outside of the provider");
  return context;
};

export { useTransitionContext, TransitionProvider };
