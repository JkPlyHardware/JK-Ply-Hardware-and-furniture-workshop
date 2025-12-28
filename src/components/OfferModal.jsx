import { useEffect } from "react";

export default function OfferModal({ show, onClose }) {
  useEffect(() => {
    if (!show) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="offer-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="offer-title"
    >
      <div
        className="offer-box"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="offer-title">🎉 Special Offer</h2>
        <p>Visit today and get the best price.</p>
        <button type="button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}
