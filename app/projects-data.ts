export type Project = {
  slug: string;
  name: string;
  status: "Completed" | "Ongoing";
  location: string;
  type: string;
  copy: string;
  cardImage: string;
  developer: string;
  address: string;
  amenities: string[];
  gallery: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "shaligram-homes",
    name: "Shaligram Homes",
    status: "Completed",
    location: "Nikol, Ahmedabad",
    type: "4 BHK Villas · 47 Units",
    copy: "A 47-unit gated villa community behind Indraprasth Society, near Khodiyar Mandir on Nikol Odhav Road. Built around a decorative main gate, clubhouse, and sprawling central garden, with 24-hour security and water supply, a jogging track, children's play area, and gym.",
    cardImage: "/projects/shaligram-homes.jpg",
    developer: "Summer Developers",
    address: "Behind Indraprasth Society, Near Khodiyar Mandir, Nikol Odhav Road, Nikol, Ahmedabad - 382350",
    amenities: [
      "Decorative main gate",
      "Sprawling central garden",
      "24 Hrs. security",
      "Jogging track",
      "Senior citizen seating",
      "Children's play area",
      "Gym",
      "24 Hrs. water supply",
    ],
    gallery: [
      { src: "/projects/shaligram/entrance-gate.jpg", alt: "Shaligram Homes decorative entrance gate" },
      { src: "/projects/shaligram/street-1.jpg", alt: "Shaligram Homes street view of villas" },
      { src: "/projects/shaligram/street-dusk.jpg", alt: "Shaligram Homes street view at dusk" },
      { src: "/projects/shaligram/classic-convenience.jpg", alt: "Shaligram Homes villa row elevation" },
      { src: "/projects/shaligram/garden-dusk.jpg", alt: "Shaligram Homes central garden" },
      { src: "/projects/shaligram/aerial.jpg", alt: "Shaligram Homes aerial view of the 47-unit community" },
      { src: "/projects/shaligram/site-layout.jpg", alt: "Shaligram Homes site layout plan" },
    ],
  },
  {
    slug: "raspan-arcade",
    name: "Raspan Arcade",
    status: "Completed",
    location: "New Nikol, Ahmedabad",
    type: "Shops & Offices · G+4",
    copy: "A five-storey commercial arcade at Raspan Char Rasta, near Kunj Mall, built around a central courtyard and water body. Earthquake-resistant RCC frame construction, vitrified tile flooring, and space for banking, retail, restaurants, showrooms, and offices — all served by 24-hour security and water supply.",
    cardImage: "/projects/raspan-arcade.jpg",
    developer: "Sundaram Developers",
    address: "Raspan Char Rasta, Near Kunj Mall, New Nikol, Ahmedabad",
    amenities: [
      "Earthquake-resistant RCC frame structure",
      "Vitrified tile flooring",
      "Anodized aluminium windows",
      "Concealed copper wiring",
      "Standard lift",
      "24 Hrs. water supply",
      "24 Hrs. security",
      "Attractive elevation and features",
    ],
    gallery: [
      { src: "/projects/raspan/street-elevation.jpg", alt: "Raspan Arcade full street elevation" },
      { src: "/projects/raspan/building-1.jpg", alt: "Raspan Arcade building render" },
      { src: "/projects/raspan/corner-view.jpg", alt: "Raspan Arcade corner view" },
      { src: "/projects/raspan/evening-view.jpg", alt: "Raspan Arcade evening view" },
      { src: "/projects/raspan/full-elevation.jpg", alt: "Raspan Arcade full building elevation" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
