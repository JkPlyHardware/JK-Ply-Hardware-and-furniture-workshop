"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!show) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
           className="fixed bottom-20 right-5 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800"
        >
            ↑
        </button>
    );
}