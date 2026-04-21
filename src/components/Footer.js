import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        <div>
          <h3 className="text-white font-bold">JK Ply Hardware</h3>
          <p> & Furniture Workshop</p>
        </div>

        <div className="flex flex-col gap-2 ">
          <Link className="hover:text-blue-500" href="#home">Home</Link>
          <Link className="hover:text-blue-500" href="/services">Services</Link>
          <Link className="hover:text-blue-500" href="/contact">Contact</Link>
        </div>

        <div>
          <p>Phone: +91 9661382988</p>
          <p> Lekha Nagar Khagual Road, <br />
            Near Holy Cross International School <br />
            Patna - 801105 , Bihar India
          </p>
        </div>

      </div>
      <div>
        <p className="text-center mt-2 text-sm">
          Developed by{" "}
          <span className="text-white font-medium">Ankit Kumar</span> 
          {" | "}
          Email:{" "}
          <a
            href="mailto:ankit8597286@gmail.com"
            className="text-white underline hover:text-blue-500"
          >
            ankit8597286@gmail.com
          </a>
        </p>
      </div>

      <p className="text-center mt-6 text-sm">
        © 2026 JK Ply. All rights reserved.
      </p>
    </footer>
  );
}

