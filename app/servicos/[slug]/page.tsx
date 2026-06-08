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
  if (!service) {
    return {
      title: "Serviço Não Encontrado | Construtora Mariano",
    };
  }
  return {
    title: `${service.title} | Construtora Mariano`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Construtora Mariano`,
      description: service.description,
      images: [service.heroImage],
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
