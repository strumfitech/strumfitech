import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Creăm site-uri web personalizate pentru afacerea ta</h1>
              <p className="lead mb-4">
                STRUMFI TECH SRL este specializată în dezvoltarea de soluții web moderne și eficiente. Transformăm ideile tale în
                realitate digitală cu design atractiv și funcționalitate optimă.
              </p>
              <div className="d-flex gap-3">
                <Link href="/servicii" className="btn btn-primary btn-lg">
                  Vezi Serviciile
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg">
                  Contactează-ne
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/images/hero-web-development.png"
                alt="Dezvoltare web"
                width={500}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">De ce să alegi STRUMFI TECH SRL?</h2>
              <p className="lead text-muted">Oferim soluții complete și personalizate pentru prezența ta online</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <div className="feature-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h4>Design Modern</h4>
                <p className="text-muted">
                  Creăm site-uri cu design modern, responsive și optimizate pentru toate dispozitivele.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center">
                <div className="feature-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4>Performanță Optimă</h4>
                <p className="text-muted">
                  Site-urile noastre sunt optimizate pentru viteză și performanță maximă în motoarele de căutare.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center">
                <div className="feature-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h4>Suport Dedicat</h4>
                <p className="text-muted">
                  Oferim suport tehnic complet și mentenanță pentru toate proiectele realizate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Gata să îți dezvolți prezența online?</h2>
              <p className="lead mb-4">
                Contactează-ne astăzi pentru o consultație gratuită și să discutăm despre proiectul tău.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Începe Proiectul
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
