import { ReactNode } from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonJsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mike Hettesheimer',
    url: 'https://mhettesh.com',
    image: 'https://mhettesh.com/og-image.png',
    jobTitle: 'Product Leader',
    description: 'Experienced product leader with 10+ years driving startup growth through strategic product development, team leadership, and data-driven decision-making.',
    sameAs: [
      'https://www.linkedin.com/in/mhettesheimer',
    ],
  };

  return <JsonLd data={personSchema} />;
}

export function WebsiteJsonLd() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mike Hettesheimer',
    url: 'https://mhettesh.com',
    description: 'Portfolio and professional website of Mike Hettesheimer, experienced product leader.',
  };

  return <JsonLd data={websiteSchema} />;
}

export function BreadcrumbJsonLd() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mhettesh.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://mhettesh.com/about',
      },
    ],
  };

  return <JsonLd data={breadcrumbSchema} />;
}
