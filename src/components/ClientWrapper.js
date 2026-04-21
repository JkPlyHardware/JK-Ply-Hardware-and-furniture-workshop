// components/ClientWrapper.js
"use client";

import useOnlineStatus from "@/hooks/useOnlineStatus";
import NoInternet from "@/components/NoInternet";

export default function ClientWrapper({ children }) {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <NoInternet />;
  }

  return <>{children}</>;
}