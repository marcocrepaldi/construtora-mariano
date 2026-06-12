import { Metadata } from "next";
import { servicesData } from "../servicesData";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";

interface Props {
  params: Promise<{ slug: string }> | { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];
  const canonicalUrl = `https://www.construtoramariano.com.br/servicos/${resolvedParams.slug}`;

  if (!service) {
    return {
      title: "Serviço Não Encontrado | Mariano Construtora & Engenharia",
      description: "Página de serviço não encontrada.",
      alternates: { canonical: canonicalUrl },
    };
  }

  return {
    title: `${service.title} | Mariano Construtora & Engenharia`,
    description: `${service.description} Serviço premium para obras de alto padrão em São Paulo e região.`,
    keywords: [service.title, "construtora São Paulo", "obra de alto padrão", "engenharia premium"],
    alternates: { canonical: canonicalUrl },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${service.title} | Mariano Construtora & Engenharia`,
      description: `${service.description} Serviço premium para obras de alto padrão em São Paulo e região.`,
      url: canonicalUrl,
      images: [service.heroImage],
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];
  if (!service) {
    notFound();
  }
  return <ServicePageClient service={service} />;
}
export const dynamicParams = false;
