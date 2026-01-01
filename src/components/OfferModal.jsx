import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function OfferModal({ show, onClose }) {
  const [enableConfetti, setEnableConfetti] = useState(false);

  useEffect(() => {
    // 🔒 Auto-disable after 7 Jan 2026
    const expiryDate = new Date("2026-01-07T23:59:59");
    const today = new Date();

    if (today > expiryDate) return;

    if (!show) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    setEnableConfetti(true);

    // ⏱ Stop confetti after 4 seconds
    const confettiTimer = setTimeout(() => {
      setEnableConfetti(false);
    }, 4000);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      clearTimeout(confettiTimer);
    };
  }, [show, onClose]);

  const expiryDate = new Date("2026-01-07T23:59:59");
  if (new Date() > expiryDate) return null;

  if (!show) return null;

  return (
    <>
      {enableConfetti && <Confetti recycle={false} numberOfPieces={250} />}

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
          <h2 id="offer-title">
            🎉 <strong>JK Ply Hardware & Furniture Workshop</strong>
            <br />
            wishes you a Happy New Year 2026! ✨
          </h2>

          <p>
            Thank 🙏 you for trusting us.
            <br />
            We look forward to serving you again. 😊
          </p>

          <button className="close-btn" type="button" onClick={onClose}>
            ❌ Close
          </button>
        </div>
      </div>
    </>
  );
}
