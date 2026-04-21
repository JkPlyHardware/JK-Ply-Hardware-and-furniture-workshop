"use client";

import Script from "next/script";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* Left */}
        <div>
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3 ">
            Contact Us
          <Image src="/contact-us.png" alt="Contact icon" width={40} height={40} />
          </h2>

          <p className="text-gray-400 mb-4">
            Visit our shop or contact us directly.
          </p>

          <p>Email: jkplyhardwareandfurnitureworks@gmail.com</p>
          <p>Phone: +91 9661382988</p>
          <p>Location: Patna, Bihar</p>

          {/* ⭐ GOOGLE REVIEWS */}
          <div className="mt-10">

            {/* Title */}
            <h3 className="text-2xl font-bold mb-2">
              Customer Reviews ⭐⭐⭐
            </h3>

            {/* SUBTITLE */}
            <p className="text-white font-semibold text-lg mb-4 text-center text-bold">
              What Our Customers Say About us ?
            </p>

            {/* Widget */}
            <div className="elfsight-app-3e2ff8f7-b276-488d-84ae-80cc4bc55f83"></div>

          </div>
        </div>

        {/* FORM Section */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">

          <form className="w-full"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.target;

              if (!form.checkValidity()) {
                form.reportValidity();
                return;
              }

              const name = form.name.value;
              const email = form.email.value;
              const phone = form.phone.value;
              const message = form.message.value;

              const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

              window.open(`https://wa.me/919661382988?text=${text}`, "_blank");
              form.reset();
            }}
          >

            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full mb-3 p-3 bg-transparent border border-white/20 rounded"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email ID"
              className="w-full mb-3 p-3 bg-transparent border border-white/20 rounded"
            />

            <input
              type="tel"
              name="phone"
              required
              pattern="[6-9]{1}[0-9]{9}"
              title="Enter valid 10 digit Indian phone number"
              placeholder="Phone Number"
              className="w-full mb-3 p-3 bg-transparent border border-white/20 rounded"
            />

            <textarea
              name="message"
              required
              placeholder="Your Requirement"
              className="w-full mb-3 p-3 bg-transparent border border-white/20 rounded"
            />

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-full hover:scale-105 transition"
            >
              Send via WhatsApp →
            </button>

          </form>


        </div>

      </div>

      {/* Script Load */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />
    </section>
  );
}