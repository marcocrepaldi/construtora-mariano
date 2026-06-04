"use client";

import { FormEvent, useEffect, useState } from "react";

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
      "Garantir segurança, satisfação e tranquilidade e melhor custo e benefício para seus clientes.",
  },
  {
    image: "icon-visao.png",
    title: "Visão",
    description:
      "Ser a maior empresa da cidade de São Paulo em qualidade na prestação de serviços para sua residência, comércio, condomínio.",
  },
  {
    image: "icon-valores.png",
    title: "Valores",
    description:
      "Comprometimento - Estar conectado com as necessidades e objetivos de nossos clientes para alcançar a excelência e servir sempre o melhor;\nRespeito - Respeitar as pessoas\ne suas diferenças;\nHonestidade - Agir com transparência,\nser verdadeiro em suas palavras, atos e valores;\nHumildade - Ouvir, aprender\ne reconhecer erros;",
  },
];

const services = [
  ["project", "Elaboração de projetos"],
  ["infra", "Execução de obras\ne infraestrutura"],
  ["reform", "Reformas em geral"],
  [
    "paint",
    "Pinturas residenciais, comerciais, condominiais, assim como pinturas de fachada",
  ],
  ["plan", "Orçamentos e planejamento"],
  ["metal", "Serviços em geral de serralheria"],
  ["floor", "Pisos e revestimento industriais"],
] as const;

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
      "Olá, gostaria de solicitar um orçamento.",
      `Nome: ${data.get("nome") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `WhatsApp: ${data.get("whatsapp") || ""}`,
      `Cidade: ${data.get("cidade") || ""}`,
    ].join("\n");

    window.open(
      `https://wa.me/5511981321663?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener",
    );
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Empreiteira Mariano e Cia">
          <img
            src="/logo-mariano.png"
            alt="Empreiteira Mariano e Cia"
          />
        </a>

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
        <section id="inicio" className="hero" aria-label="Obras e reformas">
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
        </section>

        <section className="section instagram">
          <h2>Veja mais em nosso Instagram</h2>
          <div className="instagram-strip" aria-hidden="true">
            {instagramImages.map((image) => (
              <img src={`/assets/${image}`} alt="" key={image} />
            ))}
          </div>
        </section>

        <section id="sobre" className="section about">
          <div className="container about-text">
            <div>
              <h2>SOBRE</h2>
              <p>
                A MARIANO E CIA é uma empresa, cujo seus representantes atuam há
                mais de 15 anos no mercado, no segmento de REFORMAS EM GERAL,
                residencial, comercial e predial, visando sempre atendê-lo com
                qualidade e rapidez.
              </p>
              <p>
                • Nossa Empresa segue os conceitos da mais alta qualidade em
                prestação de serviços, possuindo uma estrutura solida com
                profissionais altamente capacitados e treinados.
              </p>
            </div>
          </div>
          <div className="about-photo">
            <img src="/assets/foto-sobre.jpg" alt="Equipe Mariano e Cia em obra" />
          </div>
        </section>

        <section className="section values">
          <div className="container value-grid">
            {valueItems.map((item) => (
              <article key={item.title}>
                <img src={`/assets/${item.image}`} alt="" />
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
        </section>

        <section id="servicos" className="section services">
          <div className="container">
            <h2>SERVIÇOS</h2>
            <div className="service-grid">
              {services.map(([icon, title]) => (
                <article key={title}>
                  <span className={`service-icon ${icon}`} />
                  <h3>
                    {title.split("\n").map((line, index) => (
                      <span key={`${title}-${index}`}>
                        {line}
                        {index < title.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="section gallery">
          <h2>GALERIA</h2>
          {galleryRows.map((row) => (
            <div className="gallery-band" key={row.join("-")}>
              {row.map((image) => (
                <img src={`/assets/${image}`} alt="" key={image} />
              ))}
            </div>
          ))}
        </section>

        <section id="contato" className="section contact">
          <div className="container">
            <h2>ENTRE EM CONTATO</h2>
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
                <h3>Endereço</h3>
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
              <input type="text" name="nome" placeholder="Nome" aria-label="Nome" />
              <input type="email" name="email" placeholder="Email" aria-label="Email" />
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp"
                aria-label="WhatsApp"
              />
              <input type="text" name="cidade" placeholder="Cidade" aria-label="Cidade" />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      <a
        className="whatsapp-float"
        href="https://wa.me/5511981321663?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
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
