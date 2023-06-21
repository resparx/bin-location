import { AppContext } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const updateContext = (data: any) => {
    setContext({
      ...context,
      ...data,
      updateContext,
    });
  };

  
  const [context, setContext] = useState<any>({
    activeType: null,
    activeIndex: null,
    path: [],
    updateContext
});

  return (
    <AppContext.Provider value={context}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}