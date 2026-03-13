export interface Contribution {
  id: string;
  chapterSlug: string;
  title: string;
  category: "Culture" | "Education" | "Reparations" | "Agriculture";
  description: string;
  date: string;
  status: "Ongoing" | "Completed" | "Proposed";
}

export const contributions: Contribution[] = [
  {
    id: "c1",
    chapterSlug: "windhoek-central",
    title: "Old Location Oral History Archive",
    category: "Culture",
    description: "Digitalizing interviews with elders who survived the 1959 forced removals to preserve the history of Otjomuise.",
    date: "2024 - Present",
    status: "Ongoing"
  },
  {
    id: "c2",
    chapterSlug: "okahandja",
    title: "Ancestral Grave Restoration",
    category: "Culture",
    description: "A community-led project to restore and maintain the sacred burial sites of the Maharero and Tjamuaha lineages.",
    date: "2023",
    status: "Completed"
  },
  {
    id: "c3",
    chapterSlug: "okakarara",
    title: "Hamakari Heritage Site Infrastructure",
    category: "Reparations",
    description: "Improving visitor access and educational signage at the Battle of Hamakari site for genocide remembrance.",
    date: "2024",
    status: "Ongoing"
  },
  {
    id: "c4",
    chapterSlug: "aminuis",
    title: "Chief Hosea Kutako Museum Project",
    category: "Education",
    description: "Converting the historic residence of Chief Hosea Kutako into a community library and archive of UN petitions.",
    date: "2024",
    status: "Proposed"
  },
  {
    id: "c5",
    chapterSlug: "gobabis",
    title: "Cattle Country Breeding Cooperative",
    category: "Agriculture",
    description: "Training youth in traditional and modern livestock management techniques to ensure food security in the Omaheke.",
    date: "2023 - 2024",
    status: "Ongoing"
  },
  {
    id: "c6",
    chapterSlug: "usa",
    title: "International Legal Advocacy Taskforce",
    category: "Reparations",
    description: "Providing research and legal support for the ongoing pursuit of reparations in international forums.",
    date: "2022 - Present",
    status: "Ongoing"
  }
];

export const getContributionsByChapter = (slug: string) => 
  contributions.filter(c => c.chapterSlug === slug);