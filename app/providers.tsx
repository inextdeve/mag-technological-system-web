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

const FullScreenContext = React.createContext({});

export const FullScreenProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const handleScreen = useFullScreenHandle();

  const [isFullScreen, setIsFullScreen] = React.useState(handleScreen.active);

  const reportChange = React.useCallback(
    (state: boolean, handle: FullScreenHandle) => {
      if (handle === handleScreen) {
        setIsFullScreen(handleScreen.active);
      }
    },
    [handleScreen]
  );

  return (
    <FullScreen
      handle={handleScreen}
      onChange={reportChange}
      className="bg-background"
    >
      <FullScreenContext.Provider value={{ handleScreen, isFullScreen }}>
        {children}
      </FullScreenContext.Provider>
    </FullScreen>
  );
};

export const useFullScreen = () => React.useContext(FullScreenContext);

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="dark" attribute="class" {...themeProps}>
        <Provider store={store}>{children}</Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
