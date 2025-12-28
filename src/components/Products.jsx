import door from "../assets/door.gif";
import bed from "../assets/bed.gif";
import table from "../assets/table.jpg";
import bedTable from "../assets/bed-table.jpg";
import mandir from "../assets/mandir.gif";

const products = [
  { img: door, title: "Wooden Doors", priority: true },
  { img: table, title: "Tables", priority: false },
  { img: bed, title: "Beds", priority: false },
  { img: bedTable, title: "Bed Tables", priority: false },
  { img: mandir, title: "Wooden Mandirs", priority: false },
];

export default function Products() {
  return (
    <section
      id="products"
      className="products-section"
      role="region"
      aria-labelledby="products-heading"
    >
      <h2 id="products-heading">Our Products</h2>

      <div className="products-grid">
        {products.map((p, i) => (
          <article className="product-card-fixed" key={p.title}>
            <div className="product-img-box">
              <img
                src={p.img}
                alt={`${p.title} by JK Ply Hardware & Furniture Workshop`}
                loading={p.priority ? "eager" : "lazy"}
                fetchpriority={p.priority ? "high" : "auto"}
                decoding="async"
                width="300"
                height="220"
              />
            </div>
            <h3>{p.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
