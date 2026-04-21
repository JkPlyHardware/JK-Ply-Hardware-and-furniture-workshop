export default function Hero() {
  return (
    <section className="min-h-screen relative text-white flex items-center px-6 overflow-hidden">

      {/* Bg Image */}
      <div className="absolute inset-0">
        <img
          src="/shop.jpg"
          alt="JK Ply Hardware Shop"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">

  
        <p className="text-yellow-400 mb-4 tracking-wide font-medium">
          TRUSTED FURNITURE SHOP IN PATNA
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
          Premium Quality <br />
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
            Furniture & Plywood
          </span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl text-lg">
          Durable, stylish, and affordable furniture solutions for your home and office.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow-md"
          >
            Order Now
          </a>

          <a
            href="/services"
            className="border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Explore Services
          </a>
        </div>

      </div>
    </section>
  );
}
