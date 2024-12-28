import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Bookmarks } from "./Bookmarks";
import { StyledWrapper } from "./StyledWrappers/StyledWrapper";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { LightTogglerWrapper } from "./StyledWrappers/LightTogglerWrapper";

const queryClient = new QueryClient();

export const App = () => {

  const [isLigth, setIsLight] = useState(true);

  const light = {

    colors: {

      primary: '#007bff',
      textPrimary: '#212529',
      background: '#f8f9fa',
      textBackground: '#ffffff'
    }
  }

  const dark = {

    colors: {

      primary: '#6f42c5',
      textPrimary: '#f8f9fa',
      background: '#212529',
      textBackground: '#343a40'
    }
  }

  const handleLightToggler = () => {

    setIsLight(prev => !prev)
  };

  return <>
    <ThemeProvider theme={isLigth ? light : dark}>
      <QueryClientProvider client={queryClient}>
        <StyledWrapper>
          <Bookmarks />
          <LightTogglerWrapper>
            <span onClick={handleLightToggler}>💡</span>
          </LightTogglerWrapper>
        </StyledWrapper>
      </QueryClientProvider>
    </ThemeProvider>
  </>
};