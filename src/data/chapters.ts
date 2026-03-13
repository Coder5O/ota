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
  history?: string;
}

export const chapters: Chapter[] = [
  // --- EXISTING CHAPTERS (HISTORIC CORE) ---
  { 
    name: "Windhoek Central", 
    slug: "windhoek-central", 
    lat: -22.5609, 
    lng: 17.0658, 
    region: "Khomas Region",
    hasActiveContributions: true, 
    leader: "OTA Administrative Council",
    image: "/images/heritage/adore-africa-destination-namibia-windhoek-central-region-thumb-FA.jpg", 
    description: "The capital chapter serving as the administrative heart of the OTA.",
    history: "Historically known as Otjomuise, Windhoek serves as the diplomatic and administrative nerve center. It was the site of the 1959 Old Location uprising, a pivotal moment in the resistance against colonial forced removals. Today, it coordinates the activities of all regional chapters and international advocacy."
  },
  { 
    name: "Okahandja", 
    slug: "okahandja", 
    lat: -21.9833, 
    lng: 16.9167, 
    region: "Otjozondjupa Region", 
    hasActiveContributions: true, 
    leader: "Chief Tjinaani Maharero",
    image: "/images/heritage/images.jpg", 
    description: "Historic seat of Ovaherero chiefs and location of annual commemorations.",
    history: "The 'Garden Town' is the most sacred site in Ovaherero history. It is the final resting place of great leaders including Tjamuaha, Maharero, and Samuel Maharero. Every August, thousands gather here for Red Flag Day (Otjiserandu) to honor the ancestors and commemorate the return of Samuel Maharero's remains in 1923."
  },
  { 
    name: "Okakarara", 
    slug: "okakarara", 
    lat: -20.5833, 
    lng: 17.4333, 
    region: "Otjozondjupa Region", 
    hasActiveContributions: true, 
    leader: "Chief Vipuira Kapuuo",
    image: "/images/heritage/Okakarara.jpg", 
    description: "A vibrant rural chapter known for livestock programmes.",
    history: "Located at the foot of the Waterberg Plateau, Okakarara emerged as a major center for pastoralists in the early 20th century. It is intrinsically linked to the Battle of Hamakari. The chapter is a leader in modernizing traditional livestock management while maintaining cultural integrity."
  },
  { 
    name: "Gobabis", 
    slug: "gobabis", 
    lat: -22.45, 
    lng: 18.9667, 
    region: "Omaheke Region", 
    hasActiveContributions: true, 
    leader: "Chief Ebson Kovane",
    image: "/images/heritage/images(1).jpg", 
    description: "Gateway to the Kalahari, supporting farming communities.",
    history: "Gobabis, or Epako, was a site of significant conflict during the colonial wars of the 1890s. As the gateway to the Omaheke, it witnessed the tragic retreat of the people toward the Botswana border in 1904. It now serves as a hub for the 'Cattle Country' chapters."
  },
  { 
    name: "Aminuis", 
    slug: "aminuis", 
    lat: -23.7333, 
    lng: 19.1167, 
    region: "Omaheke Region", 
    hasActiveContributions: true,
    leader: "Chief Fanuel C. Maharero",
    image: "/images/heritage/images (3).jpg", 
    description: "Located deep in the Omaheke, championing rural development.",
    history: "Aminuis was the headquarters of Chief Hosea Kutako, the 'Father of Namibian Nationalism.' It was here that the first petitions to the United Nations were drafted, signaling the birth of the international struggle for Namibian independence and the restoration of traditional lands."
  },
  { 
    name: "Otjiwarongo", 
    slug: "otjiwarongo", 
    lat: -20.4636, 
    lng: 16.6478, 
    region: "Otjozondjupa Region", 
    hasActiveContributions: true,
    leader: "Chief Vetaruhe Kandorozu",
    image: "/images/heritage/istockphoto-499749596-612x612.jpg", 
    description: "A growing urban chapter and cultural trade hub.",
    history: "Known as the 'place of fat cattle,' Otjiwarongo has historically been a critical rail and trade junction. This chapter focuses on connecting the rural farming hinterlands of Okakarara and Otjituuo with the national economy while preserving traditional language and customs."
  },
  { 
    name: "Ovitoto", 
    slug: "ovitoto", 
    lat: -21.75, 
    lng: 16.85, 
    region: "Otjozondjupa Region", 
    leader: "Chief Vekuui Rukoro (Legacy)",
    image: "/images/heritage/ovitoto.jpg", 
    description: "One of the earliest Ovaherero settlements.",
    history: "Ovitoto is one of the oldest established traditional areas. Despite its proximity to commercial farms, it has remained a resilient enclave of traditional life. The chapter is famous for its steep hills and the preservation of ancient oral genealogies."
  },
  { 
    name: "Otjinene", 
    slug: "otjinene", 
    lat: -21.45, 
    lng: 18.85, 
    region: "Omaheke Region", 
    leader: "Chief Tjitana Maharero",
    image: "/images/heritage/otjinene.jpg", 
    description: "Serving scattered pastoral communities.",
    history: "Otjinene is a vital node in the Omaheke region, acting as a center for the surrounding 'Ehungiro' and 'Omuramba' communities. It is renowned for its large-scale livestock auctions and its role as a cultural custodian for the eastern regions."
  },
  { 
    name: "Omaruru", 
    slug: "omaruru", 
    lat: -21.4333, 
    lng: 15.9333, 
    region: "Erongo Region", 
    leader: "Chief Mutjinde Katjiua",
    image: "/images/heritage/omaruru.jpg", 
    description: "Known for its rich history and heritage festivals.",
    history: "Omaruru is the home of the White Flag (Otjizemba). It was the stronghold of Chief Zeraua and played a major role in the resistance against German colonial forces. The annual festival in Omaruru celebrates the unique lineage of the western Ovaherero people."
  },
  { 
    name: "Waterberg", 
    slug: "waterberg", 
    lat: -20.5, 
    lng: 17.25, 
    region: "Otjozondjupa Region", 
    leader: "Council of Elders",
    image: "/images/heritage/Waterberg.jpg", 
    description: "Preserving the memory of the 1904 battle.",
    history: "The Waterberg Plateau (Hamakari) is the site of the defining battle of the 1904 genocide. This chapter functions primarily as a site of remembrance and education, managing the historical records of the families who were forced into the Omaheke desert."
  },

  // --- REGIONAL & NEW CHAPTERS ---
  { 
    name: "Omongua", 
    slug: "omongua", 
    lat: -23.65, 
    lng: 19.35, 
    region: "Omaheke Region", 
    leader: "Mbara Tjiundje",
    image: "https://images.unsplash.com/photo-1516491575772-bab9f3408070?auto=format&fit=crop&q=80&w=800", 
    description: "Located in the Aminuis constituency with deep cultural roots.",
    history: "Omongua is an extension of the Aminuis traditional authority. It is a community built on the values of mutual aid and traditional grazing rights, serving as a model for rural self-governance under the OTA."
  },
  { 
    name: "Otjombinde", 
    slug: "otjombinde", 
    lat: -22.12, 
    lng: 19.85, 
    region: "Omaheke Region", 
    leader: "Mbara Tjingaete",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800", 
    description: "A vital livestock hub serving the Talismanus community.",
    history: "Located near the Botswana border, Otjombinde (Talismanus) is a frontier chapter. It has been a site of refuge and regrouping for many families since the repatriation movements began in the late 20th century."
  },
  { 
    name: "Gam", 
    slug: "gam", 
    lat: -19.15, 
    lng: 20.45, 
    region: "Otjozondjupa Region", 
    leader: "Mbara Kandjii",
    image: "https://images.unsplash.com/photo-1596708682977-628b760ba290?auto=format&fit=crop&q=80&w=800", 
    description: "Established for Ovaherero who returned from Botswana.",
    history: "Gam was established in 1993 to facilitate the repatriation of Ovaherero descendants from Botswana. It is a chapter defined by the 'Return to the Ancestral Land,' where families have successfully rebuilt their herds and cultural lives after a century of exile."
  },
  { 
    name: "Ruacana", 
    slug: "ruacana", 
    lat: -17.43, 
    lng: 14.35, 
    region: "Kunene Region", 
    leader: "Mbara Tjikuria",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800", 
    description: "Chapter near the historic Ruacana Falls.",
    history: "This chapter serves the northernmost communities near the Kunene river. It is a critical link between the Ovaherero and the Ovahimba communities, preserving the ancient shared heritage of the Kaokoland migration."
  },

  // --- DIASPORA CHAPTERS ---
  { 
    name: "USA Chapter", 
    slug: "usa", 
    lat: 38.90, 
    lng: -77.03, 
    region: "Diaspora", 
    leader: "Mbara Katuuo",
    image: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?auto=format&fit=crop&q=80&w=800", 
    description: "Connecting the community in the USA.",
    history: "The USA chapter is a hub for international advocacy. Based largely around Washington D.C., it has been instrumental in the legal fight for genocide reparations in international courts and keeping the diaspora connected to the OTA leadership."
  },
  { 
    name: "UK Chapter", 
    slug: "uk", 
    lat: 51.50, 
    lng: -0.12, 
    region: "Diaspora", 
    leader: "Mbara Kasuto",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", 
    description: "Connecting the community in the UK.",
    history: "Representing the community across Britain, the UK chapter focuses on educational exchange and cultural preservation for second-generation Ovaherero living in Europe, ensuring the language and traditional values are passed down."
  },
  { 
    name: "Botswana Chapter", 
    slug: "botswana", 
    lat: -24.65, 
    lng: 25.91, 
    region: "Diaspora", 
    leader: "Mbara Kahiko",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=800", 
    description: "Serving communities in Botswana.",
    history: "The Botswana chapter represents the descendants of those who survived the 1904 desert crossing. Concentrated in Sehitwa and Rakops, this chapter has maintained the Otjiherero culture for over a century in exile, remaining fiercely loyal to the OTA."
  },
  { 
    name: "SA Chapter", 
    slug: "south-africa", 
    lat: -25.74, 
    lng: 28.18, 
    region: "Diaspora", 
    leader: "Mbara Kandorozu",
    image: "https://images.unsplash.com/photo-1543362142-2d14214227f0?auto=format&fit=crop&q=80&w=800", 
    description: "South African chapter of the OTA.",
    history: "This chapter serves the professional and student diaspora in South Africa. It facilitates cultural networking in Johannesburg, Pretoria, and Cape Town, and supports the OTA with technical and economic expertise."
  }
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((ch) => ch.slug === slug);
}