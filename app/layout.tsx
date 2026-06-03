import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.empreiteiramarianoecia.com.br"),
  title: "Empreiteira Mariano e Cia",
  description:
    "Elaboração de projetos, execução de obras e infraestrutura, reformas em geral, pinturas residenciais, orçamentos e planejamento e muito mais.",
  icons: {
    icon: "/assets/cropped-favicon-32x32.png",
  },
  openGraph: {
    title: "Empreiteira Mariano e Cia",
    description:
      "Elaboração de projetos, execução de obras e infraestrutura, reformas em geral, pinturas residenciais, orçamentos e planejamento e muito mais.",
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
