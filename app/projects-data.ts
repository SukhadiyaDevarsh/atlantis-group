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
    slug: "the-edge",
    name: "The Edge",
    status: "Completed",
    location: "Nikol, Ahmedabad",
    type: "Retail & Office Environs · G+6",
    copy: "Atlantis Group's own landmark development — a high-street retail and office arcade opposite Malbar Royal on Bhakti Circle Road, Nikol. Anchored by a central plaza and landscaped terrace gardens on every floor, with over 1,100 ft of frontage for maximum visibility and a full lineup of national retail brands.",
    cardImage: "/projects/the-edge.jpg",
    developer: "Atlantis Group",
    address: "Survey No. 449/3/1, TP 119, FP 92/3, Opp. Malbar Royal, Bhakti Circle Road, Nikol, Ahmedabad",
    amenities: [
      "Biggest high-street open mall in the area",
      "Landscaped terrace gardens on every floor",
      "1,100+ ft frontage for visibility",
      "Entrance with security",
      "CCTV surveillance",
      "Ground floor and 2 cellar parking",
      "Fully automatic lifts",
      "Fire safety systems",
      "Surrounded by banks, hospitals, clinics, and shopping centers",
    ],
    gallery: [
      { src: "/projects/the-edge/street-day.jpg", alt: "The Edge street-level daytime elevation" },
      { src: "/projects/the-edge/street-dusk.jpg", alt: "The Edge street elevation at dusk" },
      { src: "/projects/the-edge/facade-day.jpg", alt: "The Edge full facade in daylight" },
      { src: "/projects/the-edge/facade-evening.jpg", alt: "The Edge full facade in the evening" },
      { src: "/projects/the-edge/aerial-night.jpg", alt: "The Edge aerial night view" },
      { src: "/projects/the-edge/aerial-terraces.jpg", alt: "The Edge aerial view of terrace gardens" },
      { src: "/projects/the-edge/courtyard-walkway.jpg", alt: "The Edge central courtyard walkway" },
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
      { src: "/projects/raspan/evening-view.jpg", alt: "Raspan Arcade lit up in the evening" },
      { src: "/projects/raspan/building-1.jpg", alt: "Raspan Arcade building render" },
      { src: "/projects/raspan/corner-view.jpg", alt: "Raspan Arcade corner view" },
      { src: "/projects/raspan/full-elevation.jpg", alt: "Raspan Arcade full building elevation" },
    ],
  },
  {
    slug: "atlantis-industrial-park",
    name: "Atlantis Industrial Park",
    status: "Completed",
    location: "Vehlal, Ahmedabad",
    type: "Industrial Plots · Small to Large",
    copy: "A gated scheme of independent industrial plots on the Zak to Kadadara Road, near Lubi Industries, Vehlal. N.A./N.O.C. title-clear plots of varying sizes served by wide RCC roads, street lighting, a security cabin, boundary wall, and 24-hour water supply.",
    cardImage: "/projects/atlantis-industrial-park.jpg",
    developer: "Atlantis Group",
    address: "Zak to Kadadara Road, Near Lubi Industries, Vehlal, Ahmedabad",
    amenities: [
      "N.A./N.O.C. title-clear plots",
      "Wide RCC mix roads",
      "Security cabin",
      "Boundary compound wall",
      "Street lighting",
      "24 Hrs. water supply",
      "Common plots",
    ],
    gallery: [
      { src: "/projects/atlantis-industrial-park/main-gate.jpg", alt: "Atlantis Industrial Park main gate" },
      { src: "/projects/atlantis-industrial-park/site-layout-aerial.jpg", alt: "Atlantis Industrial Park aerial site layout" },
      { src: "/projects/atlantis-industrial-park/plot-layout.jpg", alt: "Atlantis Industrial Park plot layout plan" },
    ],
  },
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
    slug: "satvat-residency",
    name: "Satvat Residency",
    status: "Completed",
    location: "New Nikol, Ahmedabad",
    type: "2 BHK Apartments · 6 Blocks",
    copy: "A 2 BHK apartment community across six blocks (A–F) at New India Colony, opposite VIP International School, New Nikol. Earthquake-resistant RCC frame construction built around a central landscaped garden, with a dedicated security cabin, kids' play area, and standard lifts in every block.",
    cardImage: "/projects/satvat-residency.jpg",
    developer: "Samay Developers",
    address: "New India Colony, Opp. VIP International School, New Nikol, Ahmedabad",
    amenities: [
      "Earthquake-resistant RCC frame structure",
      "Central landscaped garden",
      "Security cabin",
      "Children's play area",
      "Standard lift in every block",
      "Vitrified tile flooring",
      "24 Hrs. water supply",
    ],
    gallery: [
      { src: "/projects/satvat/front-elevation.jpg", alt: "Satvat Residency front building elevation" },
      { src: "/projects/satvat/street-view.jpg", alt: "Satvat Residency street view" },
      { src: "/projects/satvat/garden-courtyard.jpg", alt: "Satvat Residency garden courtyard" },
      { src: "/projects/satvat/aerial.jpg", alt: "Satvat Residency aerial view" },
      { src: "/projects/satvat/aerial-garden.jpg", alt: "Satvat Residency aerial garden view" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
