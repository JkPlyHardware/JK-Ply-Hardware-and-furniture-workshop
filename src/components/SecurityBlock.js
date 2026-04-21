"use client";
import { useEffect } from "react";

export default function SecurityBlock() {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();

    const blockKeys = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", blockKeys);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  return null;
}