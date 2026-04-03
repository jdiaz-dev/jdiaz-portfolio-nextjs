"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useWorkStreamAudit(locale: string) {
  const pathname = usePathname();
  if (
    pathname.includes("/favicon") ||
    pathname.includes("/_next") ||
    pathname.includes("/api")
  ) {
    return;
  }

  useEffect(() => {
    fetch(`/${locale}/api/workStreamAudit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: pathname,
        locale,
      }),
    });
  }, [pathname]);
}
