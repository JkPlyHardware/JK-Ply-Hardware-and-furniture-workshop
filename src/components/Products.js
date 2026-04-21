import Image from "next/image";

const products = [
  { name: "Wooden Doors", img: "/door.gif" },
  { name: "Tables", img: "/Table.jpg" },
  { name: "Beds", img: "/bed.gif" },
  { name: "Bed Tables", img: "/bed-table.jpg" },
  { name: "Wooden Mandirs", img: "/mandir.gif" },
];

export default function Products() {
  return (
    <section className="py-16 bg-linear-to-r from-blue-500 to-purple-600 text-white">
      <h2 className="text-center text-3xl font-bold mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
        {products.map((item, i) => (
          <div
            key={i}
            className="bg-white text-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <div className="relative h-48">
              <Image
                src={item.img}
                fill
                alt={item.name}
                className="object-cover"
              />
            </div>
            <h3 className="p-4 text-center font-semibold">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
