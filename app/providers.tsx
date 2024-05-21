"use client";
import * as React from "react";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import store from "@/store";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const FullScreenContext = React.createContext();

export const FullScreenProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const handleScreen = useFullScreenHandle();

  return (
    <FullScreen handle={handleScreen}>
      <FullScreenContext.Provider value={handleScreen}>
        {children}
      </FullScreenContext.Provider>
    </FullScreen>
  );
};

export const useFullScreen = () => React.useContext(FullScreenContext);

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        defaultTheme="light"
        attribute="class"
        {...themeProps}
      >
        <Provider store={store}>{children}</Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
