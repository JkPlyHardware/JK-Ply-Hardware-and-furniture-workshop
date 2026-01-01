import { useEffect, useState } from "react";
import useOnlineStatus from "./hooks/useOnlineStatus";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import OfferModal from "./components/OfferModal";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import DeveloperBadge from "./components/DeveloperBadge";



import { FESTIVAL_OFFER_ACTIVE } from "./config";

export default function App() {

useEffect(() => {
  if (import.meta.env.DEV) return;

  const disableRightClick = (e) => e.preventDefault();
  document.addEventListener("contextmenu", disableRightClick);

  return () => {
    document.removeEventListener("contextmenu", disableRightClick);
  };
}, []);

useEffect(() => {
  if (import.meta.env.DEV) return;

  const disableKeys = (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
    }
  };

  document.addEventListener("keydown", disableKeys);

  return () => {
    document.removeEventListener("keydown", disableKeys);
  };
}, []);

  const online = useOnlineStatus();
  const [showOffer, setShowOffer] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}, []);


  /*  Offer Modal ( On/Off ) */
  useEffect(() => {
    if (!FESTIVAL_OFFER_ACTIVE) return;

    const t = setTimeout(() => {
      setShowOffer(true);
    }, 3000); 

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!online) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img
        src="/no-internet.png"
        alt="No Internet"
        width="220"
        style={{ marginBottom: "20px" }}
      />

      <h1>No Internet Connection ❌ <br /></h1>
      <p>Please turn on mobile data or Wi-Fi</p>
    </main>
  );
}

  return (
    <div id="connect">
      <Header />
      <Hero />
      <Products />
      <Services />
      <Contact />
      <ScrollTop show={showScroll} />
      <Footer />
      <DeveloperBadge />
      {FESTIVAL_OFFER_ACTIVE && (
        <OfferModal
          show={showOffer}
          onClose={() => setShowOffer(false)}
        />
      )}

    </div>
  );
}
