import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = "/og-default.png",
  type = "website",
  publishedTime,
  tags,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": `${siteConfig.url}/rss.xml`,
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: pageTitle }],
      ...(publishedTime && { publishedTime }),
      ...(tags && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
