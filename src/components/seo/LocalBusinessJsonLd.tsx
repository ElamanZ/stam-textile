import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

export function LocalBusinessJsonLd() {
  const url = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${url}/#organization`,
    name: site.legalName,
    description: site.description,
    url,
    telephone: "+996709807698",
    email: site.email,
    image: `${url}/og-cover.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressCountry: site.address.countryCode,
      streetAddress: site.address.streetAddress,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: site.address.locality,
      containedInPlace: {
        "@type": "Country",
        name: site.address.country,
      },
    },
    priceRange: "$$",
    sameAs: [site.instagram, site.vk, site.telegram],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Пошив одежды на заказ и контрактное швейное производство",
        areaServed: "Бишкек, Кыргызстан",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
