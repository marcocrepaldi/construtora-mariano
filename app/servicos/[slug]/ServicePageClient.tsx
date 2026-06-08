"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ServiceInfo } from "../servicesData";

interface ServicePageClientProps {
  service: ServiceInfo;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const message = [
      `Olá Construtora Mariano! Gostaria de um orçamento para o serviço de *${service.title}*.`,
      "",
      `*Nome:* ${data.get("nome") || ""}`,
      `*Email:* ${data.get("email") || ""}`,
      `*WhatsApp:* ${data.get("whatsapp") || ""}`,
      `*Cidade:* ${data.get("cidade") || ""}`,
      `*Sobre a Obra:* ${data.get("descricaoObra") || ""}`,
      "",
      `Estou buscando um serviço premium para um projeto estimado na faixa de grande porte/alto padrão.`
    ].join("\n");

    window.open(
      `https://wa.me/5511981321663?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="service-page-wrapper">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Construtora Mariano">
          <img
            src="/logo-mariano.png"
            alt="Construtora Mariano e Cia"
          />
        </Link>

        <nav className={`nav ${menuOpen ? "open" : ""}`} id="nav">
          <Link href="/" onClick={() => setMenuOpen(false)}>INÍCIO</Link>
          <Link href="/#sobre" onClick={() => setMenuOpen(false)}>SOBRE</Link>
          <Link href="/#servicos" onClick={() => setMenuOpen(false)}>SERVIÇOS</Link>
          <Link href="/#galeria" onClick={() => setMenuOpen(false)}>GALERIA</Link>
          <Link href="/#contato" onClick={() => setMenuOpen(false)}>CONTATO</Link>
        </nav>

        <div className="social">
          <a
            href="https://www.instagram.com/construtoramarianoecia"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path d="M7.9 2h8.2A5.9 5.9 0 0 1 22 7.9v8.2a5.9 5.9 0 0 1-5.9 5.9H7.9A5.9 5.9 0 0 1 2 16.1V7.9A5.9 5.9 0 0 1 7.9 2Zm0 2A3.9 3.9 0 0 0 4 7.9v8.2A3.9 3.9 0 0 0 7.9 20h8.2a3.9 3.9 0 0 0 3.9-3.9V7.9A3.9 3.9 0 0 0 16.1 4H7.9Zm8.6 2.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" />
            </svg>
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-controls="nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        {/* Service Hero Section */}
        <section 
          className="service-hero" 
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.6), rgba(18, 18, 18, 0.95)), url('${service.heroImage}')` }}
        >
          <div className="container">
            <span className="premium-badge">Mariano Construtora & Engenharia</span>
            <h1>{service.title}</h1>
            <p className="lead">{service.tagline}</p>
            <a 
              href="#orcamento-servico" 
              className="btn-primary"
            >
              Solicitar Orçamento Premium
            </a>
          </div>
        </section>

        {/* Overview Section */}
        <section className="service-overview">
          <div className="container service-overview-grid">
            <div className="overview-main">
              <h2>Apresentação do Serviço</h2>
              <p className="highlight-text">{service.description}</p>
              <p>{service.longDescription}</p>
              
              {service.heroImage && (
                <div className="service-showcase-image" style={{ margin: "32px 0", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border-muted)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                  <img src={service.heroImage} alt={service.title} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                </div>
              )}
              
              <div className="service-features-list">
                <h3>O que está incluído no escopo:</h3>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <span className="bullet-gold">✦</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Detalhes Operacionais</h3>
                <div className="meta-item">
                  <span className="meta-label">Foco do Serviço</span>
                  <span className="meta-value">{service.budgetTarget}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Padrão de Entrega</span>
                  <span className="meta-value">Alta Fidelidade / Turnkey</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Garantia Estrutural</span>
                  <span className="meta-value">5 Anos de Suporte Ativo</span>
                </div>
                <hr className="sidebar-divider" />
                <p className="sidebar-note">
                  Especializados em viabilizar e executar projetos residenciais e corporativos de grande porte.
                </p>
                <a 
                  href={`https://wa.me/5511981321663?text=${encodeURIComponent(`Olá, gostaria de falar com um engenheiro sobre o serviço de ${service.title} para uma obra de grande porte.`)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-gold-outline"
                >
                  Falar com Engenheiro no WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* Timeline Process Section */}
        <section className="service-process-section">
          <div className="container">
            <h2>Nosso Processo de Execução</h2>
            <p className="section-subtitle">Garantia de conformidade técnica e cumprimento rigoroso de prazos</p>
            
            <div className="process-timeline">
              {service.process.map((step, index) => {
                const [title, desc] = step.split(": ");
                return (
                  <div key={index} className="process-step">
                    <div className="step-number">0{index + 1}</div>
                    <div className="step-content">
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="service-benefits">
          <div className="container">
            <h2>Por que escolher a Construtora Mariano?</h2>
            <p className="section-subtitle">Diferenciais que garantem a segurança e valorização do seu investimento patrimonial</p>
            
            <div className="benefits-grid">
              {service.benefits.map((benefit, index) => (
                <article key={index} className="benefit-card">
                  <div className="benefit-icon">✔</div>
                  <p>{benefit}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Landing Section */}
        <section id="orcamento-servico" className="service-contact-section">
          <div className="container">
            <div className="contact-box-grid">
              <div className="contact-info-panel">
                <h2>Inicie Seu Projeto Premium</h2>
                <p>
                  Estamos prontos para analisar seus projetos arquitetônicos e estruturais ou desenvolver sua ideia do zero. Insira seus dados ao lado para detalhar sua obra de grande porte.
                </p>
                
                <div className="contact-details">
                  <div className="detail-item">
                    <span className="detail-icon">✉</span>
                    <div>
                      <h5>E-mail Comercial</h5>
                      <p>marianoeciacomercial@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <span className="detail-icon">☏</span>
                    <div>
                      <h5>WhatsApp</h5>
                      <p>(11) 98132-1663</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <span className="detail-icon">⌂</span>
                    <div>
                      <h5>Sede Executiva</h5>
                      <p>R. Aguanos, 250 - Jaguaré, São Paulo - SP</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-panel">
                <h3>Detalhes da Solicitação</h3>
                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="form-group">
                    <input type="text" name="nome" placeholder="Nome Completo" required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <input type="email" name="email" placeholder="E-mail" required />
                    </div>
                    <div className="form-group">
                      <input type="tel" name="whatsapp" placeholder="WhatsApp / Telefone" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" name="cidade" placeholder="Cidade / Estado da Obra" required />
                  </div>
                  <div className="form-group">
                    <textarea 
                      name="descricaoObra" 
                      placeholder="Descreva detalhes da obra (Ex: Construção de casa com 500m² em condomínio fechado, reforma de galpão industrial, metragem estimada, etc.)" 
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary btn-block">
                    Enviar e Falar no WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <img src="/logo-mariano.png" alt="Logo Construtora Mariano" />
            <p>Rigor técnico, sofisticação e transparência na execução de obras residenciais e corporativas de alto padrão.</p>
          </div>
          <div className="footer-links">
            <h4>Navegação</h4>
            <Link href="/">Início</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#galeria">Galeria</Link>
          </div>
          <div className="footer-social-section">
            <h4>Redes Sociais</h4>
            <a href="https://www.instagram.com/construtoramarianoecia" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Mariano Construtora & Engenharia. Todos os direitos reservados. CNPJ: 28.583.565/0001-38</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        className="whatsapp-float"
        href={`https://wa.me/5511981321663?text=${encodeURIComponent(`Olá, gostaria de falar sobre o serviço de ${service.title} para minha obra.`)}`}
        aria-label="Conversar pelo WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
          <path d="M16.04 3.5c-6.87 0-12.46 5.48-12.46 12.22 0 2.15.58 4.25 1.68 6.09L3.5 28.5l6.92-1.74a12.67 12.67 0 0 0 5.62 1.31c6.87 0 12.46-5.48 12.46-12.22S22.91 3.5 16.04 3.5Zm0 22.49c-1.82 0-3.6-.47-5.15-1.36l-.37-.22-4.11 1.04 1.09-3.92-.25-.4a10 10 0 0 1-1.58-5.41c0-5.59 4.65-10.14 10.37-10.14s10.37 4.55 10.37 10.14-4.65 10.27-10.37 10.27Zm5.68-7.69c-.31-.15-1.84-.89-2.12-.99-.28-.1-.49-.15-.7.15-.2.3-.8.99-.98 1.19-.18.2-.36.22-.67.07-.31-.15-1.31-.47-2.49-1.51-.92-.8-1.54-1.79-1.72-2.09-.18-.3-.02-.46.14-.61.14-.14.31-.36.47-.53.16-.18.2-.3.31-.5.1-.2.05-.37-.03-.52-.08-.15-.7-1.65-.95-2.26-.25-.59-.51-.51-.7-.52h-.6c-.2 0-.52.07-.8.37-.28.3-1.05 1.01-1.05 2.46 0 1.45 1.08 2.86 1.23 3.06.15.2 2.13 3.2 5.16 4.49.72.31 1.28.49 1.72.63.72.22 1.38.19 1.9.12.58-.08 1.84-.74 2.1-1.45.26-.72.26-1.33.18-1.45-.08-.13-.28-.2-.59-.35Z" />
        </svg>
      </a>
    </div>
  );
}
