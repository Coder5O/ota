export interface Chapter {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  region: string;
  description: string;
  image?: string;
  hasActiveContributions?: boolean; 
}

export const chapters: Chapter[] = [
  { 
    name: "Windhoek Central", 
    slug: "windhoek-central", 
    lat: -22.5609, 
    lng: 17.0658, 
    region: "Khomas Region",
    hasActiveContributions: true, 
    image: "/images/heritage/adore-africa-destination-namibia-windhoek-central-region-thumb-FA.jpg", 
    description: "The capital chapter serving as the administrative heart of OTA." 
  },
  { 
    name: "Okahandja", 
    slug: "okahandja", 
    lat: -21.9833, 
    lng: 16.9167, 
    region: "Otjozondjupa Region", 
    hasActiveContributions: true, 
    image: "/images/heritage/images.jpg", 
    description: "Historic seat of Ovaherero chiefs and location of annual commemorations." 
  },
  { 
    name: "Okakarara", 
    slug: "okakarara", 
    lat: -20.5833, 
    lng: 17.4333, 
    region: "Otjozondjupa Region", 
    hasActiveContributions: true, 
    image: "/images/heritage/Okakarara.jpg", 
    description: "A vibrant rural chapter known for livestock programmes." 
  },
  { 
    name: "Gobabis", 
    slug: "gobabis", 
    lat: -22.45, 
    lng: 18.9667, 
    region: "Omaheke Region", 
    hasActiveContributions: true, 
    image: "/images/heritage/images(1).jpg", 
    description: "Gateway to the Kalahari, supporting farming communities." 
  },
  { 
    name: "Aminuis", 
    slug: "aminuis", 
    lat: -23.7333, 
    lng: 19.1167, 
    region: "Omaheke Region", 
    hasActiveContributions: true,
    image: "/images/heritage/images (3).jpg", 
    description: "Located deep in the Omaheke, championing rural development." 
  },
  // ... all other chapters stay the same, but without the git merge markers
  { name: "Otjiwarongo", slug: "otjiwarongo", lat: -20.4636, lng: 16.6478, region: "Otjozondjupa Region", image: "/images/heritage/istockphoto-499749596-612x612.jpg", description: "A growing urban chapter." },
  { name: "Ovitoto", slug: "ovitoto", lat: -21.75, lng: 16.85, region: "Otjozondjupa Region", image: "/images/heritage/ovitoto.jpg", description: "One of the earliest Ovaherero settlements." },
  { name: "Otjinene", slug: "otjinene", lat: -21.45, lng: 18.85, region: "Omaheke Region", image: "/images/heritage/otjinene.jpg", description: "Serving scattered pastoral communities." },
  { name: "Omaruru", slug: "omaruru", lat: -21.4333, lng: 15.9333, region: "Erongo Region", image: "/images/heritage/omaruru.jpg", description: "Known for its rich history and heritage festivals." },
  { name: "Karibib", slug: "karibib", lat: -21.9333, lng: 15.85, region: "Erongo Region", image: "/images/heritage/Karibib.jpg", description: "A mining-town chapter supporting community welfare." },
  { name: "Outjo", slug: "outjo", lat: -20.1167, lng: 16.15, region: "Kunene Region", image: "/images/heritage/Outjo.jpg", description: "Gateway to Etosha, promotes eco-tourism." },
  { name: "Kalkfeld", slug: "kalkfeld", lat: -20.8833, lng: 16.2, region: "Otjozondjupa Region", image: "/images/heritage/Kalkfeld.jpg", description: "Farming community chapter focused on livestock." },
  { name: "Grootfontein", slug: "grootfontein", lat: -19.5667, lng: 18.1167, region: "Otjozondjupa Region", image: "/images/heritage/grootfontein3.jpg", description: "Northern hub chapter coordinating cultural events." },
  { name: "Tsumeb", slug: "tsumeb", lat: -19.2333, lng: 17.7167, region: "Oshikoto Region", image: "/images/heritage/Tsumeb2.jpg", description: "Mining-heritage chapter supporting education." },
  { name: "Otavi", slug: "otavi", lat: -19.65, lng: 17.3333, region: "Otjozondjupa Region", image: "/images/heritage/otavi.jpg", description: "Agricultural heartland chapter." },
  { name: "Waterberg", slug: "waterberg", lat: -20.5, lng: 17.25, region: "Otjozondjupa Region", image: "/images/heritage/Waterberg.jpg", description: "Preserving the memory of the 1904 battle." },
  { name: "Epukiro", slug: "epukiro", lat: -22.35, lng: 19.5, region: "Omaheke Region", image: "/images/heritage/epukiro.jpg", description: "Supports pastoral livelihoods." },
  { name: "Eiseb", slug: "eiseb", lat: -21.6, lng: 19.8, region: "Omaheke Region", image: "/images/heritage/eiseb.jpg", description: "Ensuring cultural continuity in isolated regions."},