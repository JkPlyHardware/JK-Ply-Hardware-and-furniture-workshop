export default function Hero() {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" role="region" aria-labelledby="hero-heading">
      <h1 id="hero-heading">
        JK Ply Hardware & Furniture Workshop
      </h1>

      <p>
        Premium plywood, hardware fittings, and durable furniture solutions in Patna.
      </p>

      <button
        type="button"
        onClick={scrollToProducts}
        aria-label="Explore our products"
      >
        Explore Products
      </button>
    </section>
  );
}
