import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import qrcode from "../assets/qrcode.png";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="contact-modern"
      role="region"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="contact-title">
        Contact Us
      </h2>

      <div className="contact-layout">
        <address className="contact-info-box">
          <p>
            <FaEnvelope className="icon" aria-hidden="true" />
            <strong>Email:</strong>
            <br />
            <a href="mailto:jkplyhardwareandfurnitureworks@gmail.com">
              jkplyhardwareandfurnitureworks@gmail.com
            </a>
          </p>

          <p>
            <FaPhoneAlt className="icon" aria-hidden="true" />
            <strong>Phone:</strong>{" "}
            <a href="tel:+919661382988">+91 9661382988</a>
          </p>

          <p>
            <FaWhatsapp className="icon whatsapp" aria-hidden="true" />
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/919661382988"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 9661382988
            </a>
          </p>

          <p>
            <FaMapMarkerAlt className="icon map" aria-hidden="true" />
            <strong>Address:</strong>
            <br />
            Lekha Nagar, Khagual Road,
            <br />
            near Holy Cross International School,
            <br />
            Patna – 801105, India
          </p>
        </address>

        <div className="contact-map-qr">
          <div className="contact-map">
            <iframe
              title="JK Ply Hardware & Furniture Workshop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1799.0285769658585!2d85.03706533854894!3d25.603016994362967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5777d1200c7b%3A0x338b2874c5d9442f!2sJK%20PLY%20HARDWARE%20AND%20FURNITURE%20WORKSHOP!5e0!3m2!1sen!2sin!4v1766861620074!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          <div className="contact-qr">
            <img
              src={qrcode}
              alt="QR code to submit review for JK Ply Hardware & Furniture Workshop"
              loading="lazy"
              width="160"
              height="160"
            />
            <p>Scan to share your review 🙏</p>
          </div>
        </div>

        <div className="feedback-card">
          <h3>Share Your Feedback</h3>

          {success && (
            <div className="success-msg" role="status" aria-live="polite">
              <span className="tick">✔</span>
              Feedback submitted successfully
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="b12e1ce7-6772-4495-8920-dfb5996db579"
            />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              aria-label="Full Name"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-label="Email Address"
            />

            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              aria-label="Mobile Number"
            />

            <select name="rating" required aria-label="Rating">
              <option value="">Select a rating</option>
              <option value="⭐">⭐</option>
              <option value="⭐⭐">⭐⭐</option>
              <option value="⭐⭐⭐">⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            </select>

            <textarea
              name="message"
              placeholder="Comments"
              aria-label="Feedback Message"
            ></textarea>

            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </section>
  );
}
