// Single source of truth for per-location page metadata and structured data
export const locationData = {
  fernie: {
    name: "SushiWood Fernie",
    title: "SushiWood Fernie | Japanese & Korean Fusion",
    description:
      "Experience Japanese and Korean flavors in Fernie, BC. Fresh sushi, warm hospitality, and cozy dine-in or takeout.",
    keywords:
      "Sushi, Japanese food, Korean food, Fernie sushi, Fernie Japanese restaurant, Fernie Korean cuisine, takeout sushi Fernie, dine-in sushi Fernie",
    url: "https://sushiwood.ca/fernie",
    image: "https://sushiwood.ca/og-image.jpg",
    address: {
      street: "1221 7th Ave",
      city: "Fernie",
      region: "BC",
      postalCode: "V0B 1M0",
      country: "CA",
    },
    phone: "+1-(778)-519-5255",
  },
  nelson: {
    name: "SushiWood Nelson",
    title: "SushiWood Nelson | Korean & Japanese Fusion",
    description:
      "Discover SushiWood Nelson, your go-to spot for fresh sushi and Korean classics in Nelson, BC.",
    keywords:
      "Sushi, Japanese food, Korean food, Nelson sushi, Nelson Japanese restaurant, Nelson Korean cuisine, takeout sushi Nelson, dine-in sushi Nelson",
    url: "https://sushiwood.ca/nelson",
    image: "https://sushiwood.ca/og-image.jpg",
    address: {
      street: "702 Vernon St",
      city: "Nelson",
      region: "BC",
      postalCode: "V1L 4G2",
      country: "CA",
    },
    phone: "+1-(778)-463-1117",
  },
  castlegar: {
    name: "SushiWood Castlegar",
    title: "SushiWood Castlegar | Korean & Japanese Fusion",
    description:
      "Try SushiWood Castlegar for the best Japanese and Korean dishes in Castlegar, BC. Dine-in and takeout available.",
    url: "https://sushiwood.ca/castlegar",
    image: "https://sushiwood.ca/og-image.jpg",
    address: {
      street: "789 Columbia Ave",
      city: "Castlegar",
      region: "BC",
      postalCode: "V1N 1H0",
      country: "CA",
    },
    phone: "+1-250-000-3333",
  },
} as const;

export type LocationSlug = keyof typeof locationData;

export function restaurantSchema(slug: LocationSlug) {
  const data = locationData[slug];
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: data.name,
    image: data.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.street,
      addressLocality: data.address.city,
      addressRegion: data.address.region,
      postalCode: data.address.postalCode,
      addressCountry: data.address.country,
    },
    telephone: data.phone,
    url: data.url,
    servesCuisine: ["Japanese", "Korean"],
    priceRange: "$$",
    cuisineType: ["Japanese", "Korean"],
  };
}
