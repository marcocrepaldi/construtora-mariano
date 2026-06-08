import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.construtoramariano.com.br"),
  title: "Mariano Construtora & Engenharia | Obras de Alto Padrão",
  description:
    "Especialistas na execução de obras de grande porte, reformas residenciais de luxo, retrofits comerciais, engenharia de custos e elaboração de projetos executivos em São Paulo.",
  icons: {
    icon: "/assets/cropped-favicon-32x32.png",
  },
  openGraph: {
    title: "Mariano Construtora & Engenharia | Obras de Alto Padrão e Grande Porte",
    description:
      "Construção civil premium e gerenciamento de obras de grande porte acima de R$ 500 mil. Projetos turnkey com controle tecnológico e rigor de engenharia.",
    images: ["/assets/foto-sobre.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
