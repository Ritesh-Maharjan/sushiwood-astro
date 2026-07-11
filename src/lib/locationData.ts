// Single source of truth for per-location page metadata and structured data
import { menuSchema } from "@/lib/menuData";

export const locationData = {
  fernie: {
    name: "SushiWood Fernie",
    title: "SushiWood Fernie | Japanese & Korean Fusion",
    description:
      "Experience Japanese and Korean flavors in Fernie, BC. Fresh sushi, warm hospitality, and cozy dine-in or takeout.",
    keywords:
      "Sushi, Japanese food, Korean food, Fernie sushi, Fernie Japanese restaurant, Fernie Korean cuisine, takeout sushi Fernie, dine-in sushi Fernie",
    // Fernie is served at the site root; /fernie canonicalizes here
    url: "https://sushiwood.ca/",
    image: "https://sushiwood.ca/og-image.jpg",
    address: {
      street: "1221 7th Ave",
      city: "Fernie",
      region: "BC",
      postalCode: "V0B 1M0",
      country: "CA",
    },
    phone: "+1-778-519-5255",
    email: "sushiwoodinfo@gmail.com",
    sameAs: [
      "https://www.facebook.com/sushiwood.fernie",
      "https://www.instagram.com/ferniesushiwood/",
    ],
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
    phone: "+1-778-463-1117",
    email: "sushiwoodnelson@gmail.com",
    sameAs: ["https://www.facebook.com/sushiwoodnelson/"],
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
    // Not yet open — no phone or socials to publish
    phone: null,
    email: "sushiwoodcastlegar@gmail.com",
    sameAs: [],
  },
} as const;

export type LocationSlug = keyof typeof locationData;

export function restaurantSchema(slug: LocationSlug) {
  const data = locationData[slug];
  const menu = menuSchema(slug);
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
    ...(data.phone ? { telephone: data.phone } : {}),
    email: data.email,
    url: data.url,
    ...(data.sameAs.length ? { sameAs: data.sameAs } : {}),
    servesCuisine: ["Japanese", "Korean"],
    priceRange: "$$",
    acceptsReservations: true,
    ...(menu ? { hasMenu: menu } : {}),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:30",
        closes: "22:00",
      },
    ],
  };
}
