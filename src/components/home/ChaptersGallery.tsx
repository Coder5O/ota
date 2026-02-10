import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import chapterWindhoek from "@/assets/chapter-windhoek.jpg";
import chapterOkahandja from "@/assets/chapter-okahandja.jpg";
import chapterOkakarara from "@/assets/chapter-okakarara.jpg";
import chapterGobabis from "@/assets/chapter-gobabis.jpg";
import chapterOtjiwarongo from "@/assets/chapter-otjiwarongo.jpg";
import chapterAminuis from "@/assets/chapter-aminuis.jpg";

const chapters = [
  { name: "Windhoek Central", image: chapterWindhoek, region: "Khomas Region" },
  { name: "Okahandja", image: chapterOkahandja, region: "Otjozondjupa Region" },
  { name: "Okakarara", image: chapterOkakarara, region: "Otjozondjupa Region" },
  { name: "Gobabis", image: chapterGobabis, region: "Omaheke Region" },
  { name: "Otjiwarongo", image: chapterOtjiwarongo, region: "Otjozondjupa Region" },
  { name: "Aminuis", image: chapterAminuis, region: "Omaheke Region" },
];

export function ChaptersGallery() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-sm font-medium text-gold bg-gold/20 rounded-full mb-3">
            Our Chapters
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Across Namibia
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            The Ovaherero Traditional Authority has active chapters in communities throughout Namibia, each preserving our heritage locally.
          </p>
        </div>

        {/* Chapter Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {chapters.map((ch) => (
            <div key={ch.name} className="group relative overflow-hidden rounded-xl aspect-[16/10]">
              <img
                src={ch.image}
                alt={`${ch.name} chapter, ${ch.region}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-display text-base font-semibold text-white">{ch.name}</p>
                <p className="flex items-center gap-1 text-xs text-white/80">
                  <MapPin className="w-3 h-3" />
                  {ch.region}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-xl overflow-hidden shadow-soft">
          <iframe
            title="OTA Chapter Locations in Namibia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4877661.697463765!2d15.5!3d-22.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c7a550ae3a5554d%3A0xe19763efaa8ce7c7!2sNamibia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-3">
          Chapters located in Windhoek, Okahandja, Okakarara, Gobabis, Otjiwarongo, Aminuis, Ovitoto &amp; Otjinene
        </p>
      </div>
    </section>
  );
}
