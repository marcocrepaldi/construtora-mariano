"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

const slides = ["slide-4.jpg", "slide-3.jpg", "slide-2.jpg", "slide-1.jpg"];

const instagramImages = [
  "img-galeria-.jpg",
  "img-galeria-2-1.jpg",
  "img-galeria-3.jpg",
  "img-galeria-4.jpg",
  "img-galeria-5.jpg",
  "img-galeria-6-1.jpg",
];

const valueItems = [
  {
    image: "icon-missao.png",
    title: "Missão",
    description:
      "Garantir máxima segurança estrutural, previsibilidade de custos e excelência executiva, superando as expectativas em cada projeto de alta complexidade.",
  },
  {
    image: "icon-visao.png",
    title: "Visão",
    description:
      "Consolidar-se como a principal construtora de alto padrão e engenharia estrutural do estado de São Paulo, reconhecida por obras monumentais e sustentáveis.",
  },
  {
    image: "icon-valores.png",
    title: "Valores",
    description:
      "Comprometimento técnico - Buscar a precisão em cada centímetro construído;\nRespeito e Ética - Relações transparentes com investidores, parceiros e colaboradores;\nPrevisibilidade Financeira - Planejamento rigoroso com desvio orçamentário zero;\nSegurança - Rigor absoluto nas normas técnicas de engenharia (ABNT/NRs).",
  },
];

const homeServices = [
  {
    slug: "elaboracao-de-projetos",
    icon: "project",
    title: "Elaboração de Projetos Executivos",
    summary: "Arquitetura e engenharias integradas em BIM. Eliminamos incompatibilidades no digital para garantir uma execução física sem atrasos ou surpresas financeiras."
  },
  {
    slug: "execucao-de-obras",
    icon: "infra",
    title: "Execução de Obras & Infraestrutura",
    summary: "Gerenciamento completo (Turnkey) de edificações residenciais de luxo e galpões comerciais de grande porte, com controle tecnológico rigoroso."
  },
  {
    slug: "reformas-em-geral",
    icon: "reform",
    title: "Reformas de Alto Padrão & Retrofit",
    summary: "Modernização estrutural e estética de alto nível para residências de luxo e sedes corporativas, unindo agilidade de cronograma e acabamento impecável."
  },
  {
    slug: "pintura-e-fachadas",
    icon: "paint",
    title: "Pinturas Premium & Fachadas",
    summary: "Impermeabilização técnica e pintura de alto desempenho para fachadas comerciais, condomínios verticais e residências de alto valor."
  },
  {
    slug: "orcamentos-e-planejamento",
    icon: "plan",
    title: "Orçamentos e Planejamento",
    summary: "Engenharia de custos analítica. Planejamos a evolução física e financeira de sua obra para assegurar conformidade de orçamento do início ao fim."
  },
  {
    slug: "serralheria",
    icon: "metal",
    title: "Serralheria Artística & Estrutural",
    summary: "Estruturas metálicas de grande porte, mezaninos industriais robustos e serralheria fina de design sob medida com alta durabilidade."
  },
  {
    slug: "pisos-e-revestimentos",
    icon: "floor",
    title: "Pisos e Revestimentos Industriais",
    summary: "Pisos de concreto polido e aplicação técnica de revestimentos monolíticos em Epóxi e Poliuretano (PU) para alta capacidade de tráfego."
  }
];

const galleryRows = [
  [
    "img-galeria-.jpg",
    "img-galeria-2-1.jpg",
    "img-galeria-3.jpg",
    "img-galeria-4.jpg",
  ],
  [
    "img-galeria-5.jpg",
    "img-galeria-6-1.jpg",
    "img-galeria-7.jpg",
    "img-galeria-8.jpg",
  ],
  [
    "img-galeria-acabamento-em-granito.jpg",
    "img-galeria-casa-no-mato-grosso.jpg",
    "img-galeria-predio-5-andares.jpg",
    "img-galeria-serra-da-cantaneira.jpg",
  ],
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ["INÍCIO", "inicio"],
    ["SOBRE", "sobre"],
    ["SERVIÇOS", "servicos"],
    ["GALERIA", "galeria"],
    ["CONTATO", "contato"],
  ] as const;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const message = [
      "Olá Construtora Mariano! Gostaria de solicitar um orçamento para um projeto de grande porte.",
      "",
      `*Nome:* ${data.get("nome") || ""}`,
      `*Email:* ${data.get("email") || ""}`,
      `*WhatsApp:* ${data.get("whatsapp") || ""}`,
      `*Cidade:* ${data.get("cidade") || ""}`,
      "",
      "Estou interessado em receber atendimento premium e consultoria para viabilizar minha obra."
    ].join("\n");

    window.open(
      `https://wa.me/5511981321663?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="#inicio" aria-label="Construtora Mariano">
          <img
            src="/logo-mariano.png"
            alt="Construtora Mariano"
          />
        </Link>

        <nav className={`nav ${menuOpen ? "open" : ""}`} id="nav">
          {navItems.map(([item, href]) => (
            <a
              href={`#${href}`}
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
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
        {/* Slider Hero with Text Overlay */}
        <section id="inicio" className="hero" aria-label="Obras e reformas de alto padrão">
          <div className="slides">
            {slides.map((slide, index) => (
              <img
                className={`slide ${index === currentSlide ? "active" : ""}`}
                src={`/assets/${slide}`}
                alt=""
                key={slide}
              />
            ))}
          </div>
          <div className="hero-content-overlay">
            <span className="premium-badge">Construção Civil & Engenharia</span>
            <h1>Construindo Ideias com <span>Rigor e Sofisticação</span></h1>
            <p>Especialistas em projetos executivos e execução de obras corporativas e residenciais de alto padrão e grande porte.</p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#servicos" className="btn-primary">Nossos Serviços</a>
              <a href="#contato" className="btn-gold-outline">Falar com Engenheiro</a>
            </div>
          </div>
        </section>

        {/* Instagram Gallery strip */}
        <section className="section instagram">
          <h2>Conecte-se ao nosso dia a dia no Instagram</h2>
          <div className="container">
            <div className="instagram-strip" aria-hidden="true">
              {instagramImages.map((image) => (
                <img src={`/assets/${image}`} alt="" key={image} />
              ))}
            </div>
          </div>
        </section>

        {/* Re-designed About Section */}
        <section id="sobre" className="section about">
          <div className="container about-grid">
            <div>
              <span className="premium-badge">15+ Anos de História</span>
              <h2>MARIANO CONSTRUTORA & ENGENHARIA</h2>
              <p>
                Com mais de 15 anos de atuação sólida no mercado, a <strong>Mariano Construtora & Engenharia</strong> consolidou-se como referência no segmento de execução de obras de médio e grande porte, além de reformas de alto padrão comerciais e corporativas.
              </p>
              <p>
                Nossa filosofia operacional baseia-se em rigor técnico absoluto de engenharia, planejamento financeiro com desvio zero de custos, e cumprimento rigoroso de prazos. Contamos com um corpo técnico de engenheiros civis especializados e mão de obra própria constantemente qualificada, garantindo a solidez e sofisticação que o seu patrimônio merece.
              </p>
              <a href="#contato" className="btn-gold-outline">Conheça Nossa Equipe</a>
            </div>
            <div className="about-photo-wrapper">
              <div className="about-photo">
                <img src="/assets/foto-sobre.jpg" alt="Equipe Mariano e Cia em obra de alto padrão" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section values">
          <div className="container">
            <div className="value-grid">
              {valueItems.map((item) => (
                <article key={item.title}>
                  <img src={`/assets/${item.image}`} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>
                    {item.description.split("\n").map((line, index) => (
                      <span key={`${item.title}-${index}`}>
                        {line}
                        {index < item.description.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Redesigned Services section linking to Landing Pages */}
        <section id="servicos" className="section services">
          <div className="container">
            <h2>Nossos Serviços de Alto Padrão</h2>
            <p className="section-subtitle">Soluções completas sob a coordenação de engenheiros residentes para assegurar a perfeição dos detalhes</p>
            
            <div className="service-grid">
              {homeServices.map((service) => (
                <article key={service.slug}>
                  <span className={`service-icon ${service.icon}`} />
                  <h3>{service.title}</h3>
                  <p className="service-summary">{service.summary}</p>
                  <Link href={`/servicos/${service.slug}`} className="btn-gold-outline btn-block">
                    Ver Landing Page do Serviço
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section id="galeria" className="section gallery">
          <div className="container">
            <h2>Nosso Portfólio de Obras</h2>
            <p className="section-subtitle">Visualização de acabamentos finos e execuções estruturais em São Paulo e região</p>
            {galleryRows.map((row, index) => (
              <div className="gallery-band" key={index}>
                {row.map((image) => (
                  <img src={`/assets/${image}`} alt="Registro de obra Construtora Mariano" key={image} />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contato" className="section contact">
          <div className="container">
            <h2>ENTRE EM CONTATO</h2>
            <p className="section-subtitle">Solicite um estudo de viabilidade técnica e orçamento para o seu projeto</p>
            
            <div className="contact-grid">
              <article>
                <span className="contact-icon">✉</span>
                <h3>E-mail</h3>
                <p>
                  <a href="mailto:marianoeciacomercial@gmail.com">
                    marianoeciacomercial@gmail.com
                  </a>
                </p>
              </article>
              <article>
                <span className="contact-icon">⌂</span>
                <h3>Sede</h3>
                <p>
                  R. Aguanos, 250 - Jaguaré
                  <br />
                  São Paulo - SP, 05330-000
                </p>
              </article>
              <article>
                <span className="contact-icon">☏</span>
                <h3>WhatsApp</h3>
                <p>
                  <a href="https://wa.me/5511981321663" target="_blank" rel="noreferrer">
                    (11) 98132-1663
                  </a>
                </p>
              </article>
              <article>
                <span className="contact-icon">◎</span>
                <h3>Instagram</h3>
                <p>
                  <a
                    href="https://www.instagram.com/construtoramarianoecia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    /construtoramarianoecia
                  </a>
                </p>
              </article>
            </div>

            <p className="form-title">Ou preencha o formulário de contato abaixo:</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="nome" placeholder="Seu Nome Completo" aria-label="Nome" required />
              <input type="email" name="email" placeholder="E-mail de Contato" aria-label="Email" required />
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp com DDD"
                aria-label="WhatsApp"
                required
              />
              <input type="text" name="cidade" placeholder="Cidade da Obra" aria-label="Cidade" required />
              <button type="submit" className="btn-primary">Enviar Mensagem e iniciar conversa</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <img src="/logo-mariano.png" alt="Logo Construtora Mariano" />
            <p>Construções civis premium, planejamento orçamentário analítico e reformas corporativas de alta complexidade.</p>
          </div>
          <div className="footer-links">
            <h4>Navegação</h4>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#galeria">Galeria</a>
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

      {/* Floating WhatsApp Button */}
      <a
        className="whatsapp-float"
        href="https://wa.me/5511981321663?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20grande%20porte."
        aria-label="Conversar pelo WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
          <path d="M16.04 3.5c-6.87 0-12.46 5.48-12.46 12.22 0 2.15.58 4.25 1.68 6.09L3.5 28.5l6.92-1.74a12.67 12.67 0 0 0 5.62 1.31c6.87 0 12.46-5.48 12.46-12.22S22.91 3.5 16.04 3.5Zm0 22.49c-1.82 0-3.6-.47-5.15-1.36l-.37-.22-4.11 1.04 1.09-3.92-.25-.4a10 10 0 0 1-1.58-5.41c0-5.59 4.65-10.14 10.37-10.14s10.37 4.55 10.37 10.14-4.65 10.27-10.37 10.27Zm5.68-7.69c-.31-.15-1.84-.89-2.12-.99-.28-.1-.49-.15-.7.15-.2.3-.8.99-.98 1.19-.18.2-.36.22-.67.07-.31-.15-1.31-.47-2.49-1.51-.92-.8-1.54-1.79-1.72-2.09-.18-.3-.02-.46.14-.61.14-.14.31-.36.47-.53.16-.18.2-.3.31-.5.1-.2.05-.37-.03-.52-.08-.15-.7-1.65-.95-2.26-.25-.59-.51-.51-.7-.52h-.6c-.2 0-.52.07-.8.37-.28.3-1.05 1.01-1.05 2.46 0 1.45 1.08 2.86 1.23 3.06.15.2 2.13 3.2 5.16 4.49.72.31 1.28.49 1.72.63.72.22 1.38.19 1.9.12.58-.08 1.84-.74 2.1-1.45.26-.72.26-1.33.18-1.45-.08-.13-.28-.2-.59-.35Z" />
        </svg>
      </a>
    </>
  );
}
