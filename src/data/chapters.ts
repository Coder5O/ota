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
  // --- EXISTING/CORE CHAPTERS ---
  {
    name: "Windhoek Central",
    slug: "windhoek-central",
    lat: -22.56,
    lng: 17.08,
    region: "Khomas Region",
    description: "The administrative heart of the OTA and our primary urban hub.",
    hasActiveContributions: true
  },
  {
    name: "Okahandja",
    slug: "okahandja",
    lat: -21.98,
    lng: 16.91,
    region: "Otjozondjupa Region",
    description: "A site of deep historical significance and annual remembrance.",
    hasActiveContributions: true
  },

  // --- OMAHEKE REGION (FROM NOTES) ---
  { 
    name: "Omongua", 
    slug: "omongua", 
    lat: -23.65, 
    lng: 19.35, 
    region: "Omaheke Region", 
    leader: "Mbara Tjiundje", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/5218280948632773075_0",
    description: "Located in the Aminuis constituency, known for its deep cultural roots." 
  },
  { 
    name: "Otjinene (Omuramba)", 
    slug: "otjinene-omuramba", 
    lat: -21.35, 
    lng: 18.95, 
    region: "Omaheke Region", 
    leader: "Mbara Tjijahura", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/5218280948632773075_0",
    description: "Traditional authority area within the Omuramba catchment." 
  },
  { 
    name: "Otjinene", 
    slug: "otjinene", 
    lat: -21.45, 
    lng: 18.85, 
    region: "Omaheke Region", 
    leader: "Mbara Katjariuua", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/5218280948632773075_0",
    description: "Main Otjinene traditional hub." 
  },
  { 
    name: "Otjinene (Ehungiro)", 
    slug: "otjinene-ehungiro", 
    lat: -21.55, 
    lng: 18.75, 
    region: "Omaheke Region", 
    leader: "Mbara Kahipetekera", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/5218280948632773075_0",
    description: "Traditional authority area serving the Ehungiro community." 
  },
  { 
    name: "Otjombinde", 
    slug: "otjombinde", 
    lat: -22.12, 
    lng: 19.85, 
    region: "Omaheke Region", 
    leader: "Mbara Tjingaete", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/5218280948632773075_0",
    description: "A vital livestock hub serving the Talismanus community." 
  },
  { name: "Eiseb", slug: "eiseb", lat: -21.0, lng: 20.0, region: "Omaheke Region", leader: "Mbara Marenga", description: "Remote traditional area in Omaheke." },

  // --- OTJOZONDJUPA REGION (FROM NOTES) ---
  { 
    name: "Gam", 
    slug: "gam", 
    lat: -19.15, 
    lng: 20.45, 
    region: "Otjozondjupa Region", 
    leader: "Mbara Kandjii", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/4718468447361873282_0",
    description: "Established for Ovaherero who returned from Botswana." 
  },
  { name: "Okotjitno", slug: "okotjitno", lat: -21.15, lng: 17.55, region: "Otjozondjupa Region", leader: "Mbara Kapukare", description: "Heritage preservation hub." },
  { name: "Ozonahi", slug: "ozonahi", lat: -20.95, lng: 17.85, region: "Otjozondjupa Region", leader: "Mbara Kaangundue", description: "Okakarara constituency traditional area." },
  { name: "Okamatapati", slug: "okamatapati", lat: -20.45, lng: 18.35, region: "Otjozondjupa Region", leader: "Mbara Rukambe-uazukuanj", description: "Livestock program center." },
  { 
    name: "Okondjatu", 
    slug: "okondjatu", 
    lat: -21.32, 
    lng: 17.75, 
    region: "Otjozondjupa Region", 
    leader: "Mbara Nozengi", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/4718468447361873282_0",
    description: "Major trade and cultural hub." 
  },

  // --- ERONGO REGION (FROM NOTES) ---
  { 
    name: "Omatjete", 
    slug: "omatjete", 
    lat: -21.05, 
    lng: 15.55, 
    region: "Erongo Region", 
    leader: "Mbara Jeja", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/8961597241654795217_0",
    description: "Central station for the Erongo Zeraeua community." 
  },
  { 
    name: "Otjimbingwe", 
    slug: "otjimbingwe", 
    lat: -22.35, 
    lng: 16.13, 
    region: "Erongo Region", 
    leader: "Mbara Kauvi", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/1766903724880015266_0",
    description: "Historic missionary and trading capital." 
  },

  // --- KUNENE / KAOKO REGION (FROM NOTES) ---
  { name: "Okonjota", slug: "okonjota", lat: -18.79, lng: 14.35, region: "Kunene Region", leader: "Mbara Mureko", image: "http://googleusercontent.com/image_collection/image_retrieval/9955115525220539799_0", description: "Kaoko hinterland community." },
  { name: "Omuhama", slug: "omuhama", lat: -17.95, lng: 13.61, region: "Kunene Region", leader: "Mbara Hazondu", image: "http://googleusercontent.com/image_collection/image_retrieval/9955115525220539799_0", description: "Northern Kunene traditional area." },
  { name: "Ongango", slug: "ongango", lat: -18.51, lng: 13.63, region: "Kunene Region", leader: "Mbara Musaso", image: "http://googleusercontent.com/image_collection/image_retrieval/9955115525220539799_0", description: "Interior Kunene station." },
  { name: "Otuvero", slug: "otuvero", lat: -19.10, lng: 13.60, region: "Kunene Region", leader: "Mbara Kavari", image: "http://googleusercontent.com/image_collection/image_retrieval/9955115525220539799_0", description: "Kaoko preservation zone." },
  { name: "Orue", slug: "orue", lat: -17.43, lng: 13.20, region: "Kunene Region", leader: "Mbara Tjirama", image: "http://googleusercontent.com/image_collection/image_retrieval/9955115525220539799_0", description: "Rugged mountain traditional area." },
  { 
    name: "Ruacana", 
    slug: "ruacana", 
    lat: -17.43, 
    lng: 14.35, 
    region: "Kunene Region", 
    leader: "Mbara Tjikuria", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/9999607740156916660_0",
    description: "Chapter near the historic Ruacana Falls." 
  },
  { name: "Okozongueh", slug: "okozongueh", lat: -18.06, lng: 13.84, region: "Kunene Region", leader: "Mbara", image: "http://googleusercontent.com/image_collection/image_retrieval/9955115525220539799_0", description: "Heritage site near Opuwo." },
  { name: "Ombonbo", slug: "ombonbo", lat: -18.68, lng: 13.95, region: "Kunene Region", leader: "Mbara", image: "http://googleusercontent.com/image_collection/image_retrieval/9955115525220539799_0", description: "Traditional pastoralist hub." },
  { name: "Omuhiva", slug: "omuhiva", lat: -18.41, lng: 13.46, region: "Kunene Region", leader: "Mbara", image: "http://googleusercontent.com/image_collection/image_retrieval/9955115525220539799_0", description: "Livestock settlement." },
  { name: "Otuzembu", slug: "otuzembu", lat: -17.85, lng: 13.75, region: "Kunene Region", leader: "Mbara", image: "http://googleusercontent.com/image_collection/image_retrieval/9955115525220539799_0", description: "Kaoko traditional belt hub." },

  // --- DIASPORA / INTERNATIONAL (FROM NOTES) ---
  { 
    name: "USA Chapter", 
    slug: "usa", 
    lat: 38.90, 
    lng: -77.03, 
    region: "Diaspora", 
    leader: "Mbara Katuuo", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/2242773669850298816_0",
    description: "Connecting the community in the USA." 
  },
  { 
    name: "UK Chapter", 
    slug: "uk", 
    lat: 51.50, 
    lng: -0.12, 
    region: "Diaspora", 
    leader: "Mbara Kasuto", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/5148789827772251664_0",
    description: "Connecting the community in the UK." 
  },
  { 
    name: "Botswana Chapter", 
    slug: "botswana", 
    lat: -24.65, 
    lng: 25.91, 
    region: "Diaspora", 
    leader: "Mbara Kertiko Kahiko", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/3074171701274711937_0",
    description: "Serving communities in Botswana." 
  },
  { 
    name: "SA Chapter", 
    slug: "south-africa", 
    lat: -25.74, 
    lng: 28.18, 
    region: "Diaspora", 
    leader: "Mbara Handorozy", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/16040811302363366234_0",
    description: "South African chapter of the OTA." 
  },
  { 
    name: "Ehi rozo ngena", 
    slug: "ehi-rozo-ngena", 
    lat: -22.5, 
    lng: 17.5, 
    region: "Diaspora", 
    leader: "Ndajozi Algata josi", 
    image: "http://googleusercontent.com/image_collection/image_retrieval/9955115525220539799_0",
    description: "Traditional area of significance." 
  }
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find(ch => ch.slug === slug);
}