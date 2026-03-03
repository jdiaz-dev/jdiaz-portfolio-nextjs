"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      {/* AppRouterCacheProvider it allow to use "tss-react" package */}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </AppRouterCacheProvider>
  );
}
