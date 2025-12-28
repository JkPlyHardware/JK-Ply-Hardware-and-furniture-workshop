export default function Services() {
  return (
    <section
      id="services"
      className="services-gradient"
      role="region"
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className="services-title">
        Our Services
      </h2>

      <div className="services-cards">
        <article className="service-glass">
          <span className="service-icon" aria-hidden="true">🛠️</span>
          <h3>Custom Furniture Design</h3>
          <p>
            Custom-designed furniture crafted to match your space, style, and requirements.
          </p>
        </article>

        <article className="service-glass">
          <span className="service-icon" aria-hidden="true">🔧</span>
          <h3>Furniture Repair</h3>
          <p>
            Expert repair services to restore strength, beauty, and durability to your furniture.
          </p>
        </article>

        <article className="service-glass">
          <span className="service-icon" aria-hidden="true">🚚</span>
          <h3>Home Delivery</h3>
          <p>
            Safe and timely home delivery ensuring your furniture reaches you in perfect condition.
          </p>
        </article>
      </div>
    </section>
  );
}
