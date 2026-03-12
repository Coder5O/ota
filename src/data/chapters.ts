export interface Chapter {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  region: string;
  description: string;
  image?: string;
  hasActiveContributions?: boolean; 
  leader?: string;
}

export const chapters: Chapter[] = [
  // --- EXISTING CHAPTERS (LOCAL PATHS PRESERVED) ---
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
  { 
    name: "Otjiwarongo", 
    slug: "otjiwarongo", 
    lat: -20.4636, 
    lng: 16.6478, 
    region: "Otjozondjupa Region", 
    hasActiveContributions: true,
    image: "/images/heritage/istockphoto-499749596-612x612.jpg", 
    description: "A growing urban chapter." 
  },
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
  { name: "Eiseb", slug: "eiseb", lat: -21.6, lng: 19.8, region: "Omaheke Region", image: "/images/heritage/eiseb.jpg", description: "Ensuring cultural continuity in isolated areas." },

  // --- NEW CHAPTERS (STABLE MAPS-STYLE LINKS) ---
  { 
    name: "Omongua", 
    slug: "omongua", 
    lat: -23.65, 
    lng: 19.35, 
    region: "Omaheke Region", 
    leader: "Mbara Tjiundje",
    image: "https://images.unsplash.com/photo-1516491575772-bab9f3408070?auto=format&fit=crop&q=80&w=800", 
    description: "Located in the Aminuis constituency with deep cultural roots." 
  },
  { 
    name: "Otjinene (Omuramba)", 
    slug: "otjinene-omuramba", 
    lat: -21.35, 
    lng: 18.95, 
    region: "Omaheke Region", 
    leader: "Mbara Tjijahura",
    image: "https://images.unsplash.com/photo-1620803051066-51368153ce23?auto=format&fit=crop&q=80&w=800", 
    description: "Traditional authority area within the Omuramba catchment." 
  },
  { 
    name: "Otjinene (Ehungiro)", 
    slug: "otjinene-ehungiro", 
    lat: -21.55, 
    lng: 18.75, 
    region: "Omaheke Region", 
    leader: "Mbara Katjipetekera",
    image: "https://images.unsplash.com/photo-1547471080-7fc2caa7df36?auto=format&fit=crop&q=80&w=800", 
    description: "Traditional authority area serving the Ehungiro community." 
  },
  { 
    name: "Otjombinde", 
    slug: "otjombinde", 
    lat: -22.12, 
    lng: 19.85, 
    region: "Omaheke Region", 
    leader: "Mbara Tjingaete",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800", 
    description: "A vital livestock hub serving the Talismanus community." 
  },
  { 
    name: "Gam", 
    slug: "gam", 
    lat: -19.15, 
    lng: 20.45, 
    region: "Otjozondjupa Region", 
    leader: "Mbara Kandjii",
    image: "https://images.unsplash.com/photo-1596708682977-628b760ba290?auto=format&fit=crop&q=80&w=800", 
    description: "Established for Ovaherero who returned from Botswana." 
  },
  { 
    name: "Okotjituo", 
    slug: "okotjituo", 
    lat: -21.15, 
    lng: 17.55, 
    region: "Otjozondjupa Region", 
    leader: "Mbara Kapukare",
    image: "https://images.unsplash.com/photo-1610444583163-f938d1720d77?auto=format&fit=crop&q=80&w=800", 
    description: "A historic community focused on heritage preservation." 
  },
  { 
    name: "Ozonahi", 
    slug: "ozonahi", 
    lat: -20.95, 
    lng: 17.85, 
    region: "Otjozondjupa Region", 
    leader: "Mbara Kaangundue",
    image: "https://images.unsplash.com/photo-1582294101292-12f5188f5cfc?auto=format&fit=crop&q=80&w=800", 
    description: "Traditional area within the Okakarara constituency." 
  },
  { 
    name: "Okamatapati", 
    slug: "okamatapati", 
    lat: -20.45, 
    lng: 18.35, 
    region: "Otjozondjupa Region", 
    leader: "Mbara Rukambe-uazukuani",
    image: "https://images.unsplash.com/photo-1523315802102-1818274d8122?auto=format&fit=crop&q=80&w=800", 
    description: "Known for successful community-based livestock programs." 
  },
  { 
    name: "Okondjatu", 
    slug: "okondjatu", 
    lat: -21.32, 
    lng: 17.75, 
    region: "Otjozondjupa Region", 
    leader: "Mbara Nozengi",
    image: "https://images.unsplash.com/photo-1580210287950-848e4268e0d9?auto=format&fit=crop&q=80&w=800", 
    description: "Major trade and cultural hub." 
  },
  { 
    name: "Omatjete", 
    slug: "omatjete", 
    lat: -21.05, 
    lng: 15.55, 
    region: "Erongo Region", 
    leader: "Mbara Jeja",
    image: "https://images.unsplash.com/photo-1492348530660-f4ca6793132c?auto=format&fit=crop&q=80&w=800", 
    description: "Central station for the Erongo Zeraeua community." 
  },
  { 
    name: "Otjimbingwe", 
    slug: "otjimbingwe", 
    lat: -22.35, 
    lng: 16.13, 
    region: "Erongo Region", 
    leader: "Mbara Kauvi",
    image: "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?auto=format&fit=crop&q=80&w=800", 
    description: "Historic missionary and trading capital." 
  },
  { 
    name: "Ruacana", 
    slug: "ruacana", 
    lat: -17.43, 
    lng: 14.35, 
    region: "Kunene Region", 
    leader: "Mbara Tjikuria",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800", 
    description: "Chapter near the historic Ruacana Falls." 
  },
  { 
    name: "USA Chapter", 
    slug: "usa", 
    lat: 38.90, 
    lng: -77.03, 
    region: "Diaspora", 
    leader: "Mbara Katuuo",
    image: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?auto=format&fit=crop&q=80&w=800", 
    description: "Connecting the community in the USA." 
  },
  { 
    name: "UK Chapter", 
    slug: "uk", 
    lat: 51.50, 
    lng: -0.12, 
    region: "Diaspora", 
    leader: "Mbara Kasuto",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", 
    description: "Connecting the community in the UK." 
  },
  { 
    name: "Botswana Chapter", 
    slug: "botswana", 
    lat: -24.65, 
    lng: 25.91, 
    region: "Diaspora", 
    leader: "Mbara Kahiko",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=800", 
    description: "Serving communities in Botswana." 
  },
  { 
    name: "SA Chapter", 
    slug: "south-africa", 
    lat: -25.74, 
    lng: 28.18, 
    region: "Diaspora", 
    leader: "Mbara Kandorozu",
    image: "https://images.unsplash.com/photo-1543362142-2d14214227f0?auto=format&fit=crop&q=80&w=800", 
    description: "South African chapter of the OTA." 
  }
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((ch) => ch.slug === slug);
}