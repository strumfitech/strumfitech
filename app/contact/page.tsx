"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    nume: "",
    email: "",
    telefon: "",
    subiect: "",
    mesaj: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulare trimitere formular
    setTimeout(() => {
      setSubmitMessage("Mulțumim pentru mesaj! Vă vom contacta în cel mai scurt timp.")
      setIsSubmitting(false)
      setFormData({
        nume: "",
        email: "",
        telefon: "",
        subiect: "",
        mesaj: "",
      })
    }, 1000)
  }

  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "80px" }}>
        {/* Header Section */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-4 fw-bold mb-3">Contactează-ne</h1>
                <p className="lead">
                  Suntem aici să te ajutăm! Contactează-ne pentru orice întrebare sau pentru a începe un proiect nou.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container">
            <div className="row g-5">
              {/* Contact Form */}
              <div className="col-lg-8">
                <div className="card shadow">
                  <div className="card-body p-5">
                    <h3 className="fw-bold mb-4">Trimite-ne un mesaj</h3>

                    {submitMessage && (
                      <div className="alert alert-success" role="alert">
                        {submitMessage}
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="nume" className="form-label">
                            Nume complet *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="nume"
                            name="nume"
                            value={formData.nume}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label">
                            Email *
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="telefon" className="form-label">
                            Telefon
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="telefon"
                            name="telefon"
                            value={formData.telefon}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="subiect" className="form-label">
                            Subiect *
                          </label>
                          <select
                            className="form-select"
                            id="subiect"
                            name="subiect"
                            value={formData.subiect}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Selectează subiectul</option>
                            <option value="site-prezentare">Site de prezentare</option>
                            <option value="magazin-online">Magazin online</option>
                            <option value="aplicatie-web">Aplicație web</option>
                            <option value="redesign">Redesign website</option>
                            <option value="mentenanta">Mentenanță și suport</option>
                            <option value="seo">Optimizare SEO</option>
                            <option value="altele">Altele</option>
                          </select>
                        </div>

                        <div className="col-12">
                          <label htmlFor="mesaj" className="form-label">
                            Mesaj *
                          </label>
                          <textarea
                            className="form-control"
                            id="mesaj"
                            name="mesaj"
                            rows={5}
                            value={formData.mesaj}
                            onChange={handleChange}
                            placeholder="Descrie-ne proiectul tău sau întrebarea ta..."
                            required
                          ></textarea>
                        </div>

                        <div className="col-12">
                          <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Se trimite...
                              </>
                            ) : (
                              <>
                                <i className="fas fa-paper-plane me-2"></i>
                                Trimite Mesajul
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-4">
                <div className="card shadow h-100">
                  <div className="card-body p-4">
                    <h3 className="fw-bold mb-4">Informații de Contact</h3>

                    <div className="contact-info">
                      <div className="d-flex align-items-start mb-4">
                        <div className="flex-shrink-0">
                          <div
                            className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: "50px", height: "50px" }}
                          >
                            <i className="fas fa-phone"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="fw-bold">Telefon</h5>
                          <p className="text-muted mb-0">
                            <a href="tel:+40752367977" className="text-decoration-none">
                              +40 752 367 977
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="d-flex align-items-start mb-4">
                        <div className="flex-shrink-0">
                          <div
                            className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: "50px", height: "50px" }}
                          >
                            <i className="fas fa-envelope"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="fw-bold">Email</h5>
                          <p className="text-muted mb-0">
                            <a href="mailto:strumfitech@gmail.com" className="text-decoration-none">
                              strumfitech@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Details */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h3 className="fw-bold mb-4">Detalii Companie</h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card border-0 bg-transparent">
                      <div className="card-body">
                        <h5 className="fw-bold">Denumire</h5>
                        <p className="text-muted">STRUMFI TECH SRL</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0 bg-transparent">
                      <div className="card-body">
                        <h5 className="fw-bold">CUI</h5>
                        <p className="text-muted">RO12345678</p>
                      </div>
                    </div>
                  </div>
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
