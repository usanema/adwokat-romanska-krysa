import siteConfig from '@data/site-config.json';

export function generateLegalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: 'https://adwokatromanskakrysa.pl',
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: 'PL',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
    ],
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  pubDate: Date;
  image?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://adwokatromanskakrysa.pl/assets/logo.png',
      },
    },
    datePublished: article.pubDate.toISOString(),
    dateModified: article.pubDate.toISOString(),
    image: article.image || 'https://adwokatromanskakrysa.pl/assets/og-image.jpg',
    url: article.url,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generatePersonSchema(person: {
  name: string;
  jobTitle: string;
  email: string;
  telephone: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    email: person.email,
    telephone: person.telephone,
    worksFor: {
      '@type': 'LegalService',
      name: siteConfig.name,
    },
  };
}
