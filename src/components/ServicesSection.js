import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="bg-linear-to-r from-purple-900 via-indigo-900 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
          Our Services
          <Image src="/service.png" alt="service Icon" width={40} height={40} />
        </h2>

        <p className="text-gray-400 mb-12">
          We provide complete furniture solutions from design to delivery.
        </p>

        {/* Card 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 ">
            Custom Furniture Design
            <Image src="/Furniture.png" alt="Furniture Icon" width={40} height={40} />
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <h4 className="text-red-400 font-semibold mb-2">
                The Problem
              </h4>
              <p className="text-gray-400">
                Market furniture often doesn't match your space or style.
              </p>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-2">
                The Solution
              </h4>
              <p className="text-gray-400">
                We design custom furniture according to your needs and space.
              </p>
            </div>

          </div>

          <a
            href="https://wa.me/919661382988?text=I want custom furniture"
            className="inline-block mt-6 bg-green-500 px-5 py-2 rounded-lg"
          >
            Order Now
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            Furniture Repair 
            <Image src="/repair.png" alt="repair icon" width={30} height={30} />
          </h3>


          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <h4 className="text-red-400 font-semibold mb-2">
                The Problem
              </h4>
              <p className="text-gray-400">
                Old furniture loses strength and looks outdated.
              </p>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-2">
                The Solution
              </h4>
              <p className="text-gray-400">
                We repair and polish furniture to make it look brand new.
              </p>
            </div>

          </div>

          <a
            href="https://wa.me/919661382988?text=I want furniture repair"
            className="inline-block mt-6 bg-green-500 px-5 py-2 rounded-lg"
          >
            Order Now
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            Home Delivery
            <Image src="/delivery.png" alt="delivery icon" width={40} height={40} />
            
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <h4 className="text-red-400 font-semibold mb-2">
                The Problem
              </h4>
              <p className="text-gray-400">
                Transporting furniture safely is difficult.
              </p>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-2">
                The Solution
              </h4>
              <p className="text-gray-400">
                We provide safe and fast home delivery service.
              </p>
            </div>

          </div>

          <a
            href="https://wa.me/919661382988?text=I want home delivery"
            className="inline-block mt-6 bg-green-500 px-5 py-2 rounded-lg"
          >
            Order Now
          </a>
        </div>

        {/* Card 4 */}

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6 relative">

          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            Doors
            <Image src="/dooricon.png" alt="door Icon" width={40} height={40} />
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {/* TEXT */}
            <div>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Plywood Door plain
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Plywood Door with leminated design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  U-PVC Door
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Wood Door
                </li>

              </ul>
            </div>

          </div>

          {/* 📱 MOBILE IMAGE (normal flow) */}
          <div className="mt-6 flex justify-center md:hidden">
            <Image
              src="/doors.jpg"
              alt="Door"
              width={180}
              height={240}
              className="rounded-xl"
            />
          </div>

          {/* 💻 DESKTOP IMAGE */}
          <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2">
            <Image
              src="/doors.jpg"
              alt="Door"
              width={140}
              height={180}
              className="rounded-xl"
              priority
            />
          </div>

          <a
            href="https://wa.me/919661382988?text=I want home delivery"
            className="inline-block mt-6 bg-green-500 px-5 py-2 rounded-lg"
          >
            Order Now
          </a>

        </div>

      </div>
    </section>
  );
}