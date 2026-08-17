export default function LegalPage({ eyebrow, title, intro, updatedAt, children }) {
  return (
    <main>
      <section className="page-hero legal-hero">
        <div className="la-container">
          <span className="eyebrow reveal in-view">{eyebrow}</span>
          <h1 className="display reveal in-view">{title}</h1>
          <p className="lead reveal in-view" data-delay="1">{intro}</p>
          <p className="legal-updated reveal in-view" data-delay="2">
            Última atualização: <time dateTime={updatedAt}>17 de agosto de 2026</time>
          </p>
        </div>
      </section>

      <section className="section-pad-sm legal-content-section">
        <article className="la-container legal-content">
          {children}
        </article>
      </section>
    </main>
  )
}
