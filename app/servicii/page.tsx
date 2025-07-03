import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function Servicii() {
  const services = [
    {
      title: "Site Web de Prezentare",
      description:
        "Site-uri elegante și profesionale pentru prezentarea afacerii tale. Perfecte pentru companii, freelanceri și profesioniști.",
      features: ["Design responsive", "Optimizare SEO", "Formular de contact", "Galerie foto"],
      image: "/images/site-prezentare.png",
    },
    {
      title: "Magazin Online",
      description: "Soluții complete de e-commerce pentru vânzarea online. Platforme sigure și ușor de administrat.",
      features: ["Catalog produse", "Coș de cumpărături", "Plăți online", "Administrare comenzi"],
      image: "/images/magazin-online.png",
    },
    {
      title: "Aplicații Web",
      description: "Dezvoltăm aplicații web personalizate pentru nevoile specifice ale afacerii tale.",
      features: ["Funcționalități custom", "Baze de date", "Panouri admin", "Integrări API"],
      image: "/images/aplicatii-web.png",
    },
    {
      title: "Redesign Website",
      description: "Modernizăm și optimizăm site-urile existente pentru o experiență mai bună a utilizatorilor.",
      features: ["Design modern", "Optimizare viteză", "Mobile-friendly", "Migrare conținut"],
      image: "/images/redesign-website.png",
    },
    {
      title: "Mentenanță și Suport",
      description: "Servicii complete de mentenanță, actualizări și suport tehnic pentru site-ul tău.",
      features: ["Backup-uri regulate", "Actualizări securitate", "Suport tehnic", "Monitorizare 24/7"],
      image: "/images/mentenanta-suport.png",
    },
    {
      title: "Optimizare SEO",
      description: "Îmbunătățim vizibilitatea site-ului tău în motoarele de căutare pentru mai mulți vizitatori.",
      features: ["Audit SEO", "Optimizare conținut", "Link building", "Rapoarte lunare"],
      image: "/images/seo-optimization.png",
    },
  ]

  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "80px" }}>
        {/* Header Section */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-4 fw-bold mb-3">Serviciile Noastre</h1>
                <p className="lead">
                  Oferim o gamă completă de servicii web pentru a-ți dezvolta prezența online și a-ți crește afacerea.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container">
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="card service-card h-100">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={350}
                      height={250}
                      className="card-img-top"
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{service.title}</h5>
                      <p className="card-text text-muted mb-3">{service.description}</p>

                      <ul className="list-unstyled mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="mb-1">
                            <i className="fas fa-check text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto">
                        <Link href="/contact" className="btn btn-primary w-100">
                          Solicită Ofertă
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-primary text-white">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-8 mx-auto">
                <h2 className="display-5 fw-bold mb-3">Ai nevoie de o soluție personalizată?</h2>
                <p className="lead mb-4">
                  Contactează-ne pentru a discuta despre proiectul tău. Oferim consultații gratuite și oferte
                  personalizate.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/contact" className="btn btn-light btn-lg">
                    <i className="fas fa-envelope me-2"></i>
                    Trimite Mesaj
                  </Link>
                  <a href="tel:+40752367977" className="btn btn-outline-light btn-lg">
                    <i className="fas fa-phone me-2"></i>
                    Sună Acum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
