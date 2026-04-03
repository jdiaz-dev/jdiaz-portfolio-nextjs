"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useWorkStreamAudit } from "../../hooks/useWorkStreamAudit";

const theme = createTheme();

export default function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  useWorkStreamAudit(locale);
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </AppRouterCacheProvider>
  );
}
