import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { chapters } from "@/data/chapters";

// 1. Paste your Mapillary Client Token here
const MAPILLARY_TOKEN = "YOUR_MAPILLARY_CLIENT_TOKEN_HERE";

const createIcon = () =>
  L.divIcon({
    className: "",
    html: `<div style="width:14px;height:14px;background:#D4A843;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.35);cursor:pointer"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

// Helper to fetch Mapillary Image
async function fetchMapillaryImage(lat: number, lng: number) {
  try {
    // Searches for images in a small box around the coordinates
    const response = await fetch(
      `https://graph.mapillary.com/images?access_token=${MAPILLARY_TOKEN}&fields=id&bbox=${lng-0.01},${lat-0.01},${lng+0.01},${lat+0.01}&limit=1`
    );
    const result = await response.json();
    if (result.data && result.data.length > 0) {
      return `https://graph.mapillary.com/${result.data[0].id}/thumb-1024?access_token=${MAPILLARY_TOKEN}`;
    }
  } catch (err) {
    console.error("Mapillary fetch failed", err);
  }
  return null;
}

export function ChaptersMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [-21.5, 17.0],
      zoom: 6,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    }).addTo(map);

    L.control.attribution({ position: "bottomright" }).addTo(map);

    const icon = createIcon();

    chapters.forEach((ch) => {
      // Default placeholder image
      const defaultImg = 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=400';

      // Creating a container for the popup content
      const popupDiv = document.createElement('div');
      popupDiv.style.width = "200px";
      popupDiv.style.cursor = "pointer";
      popupDiv.innerHTML = `
        <div id="img-container-${ch.slug}">
           <div style="width: 100%; height: 100px; background: #f3f4f6; border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #999;">
             Loading image...
           </div>
        </div>
        <strong style="font-size: 14px; color: #D4A843; display: block;">${ch.name}</strong>
        <p style="font-size: 12px; color: #666; margin: 4px 0;">${ch.region} Region</p>
        <span style="font-size: 11px; color: #D4A843; font-weight: bold;">View Chapter →</span>
      `;

      const marker = L.marker([ch.lat, ch.lng], { icon })
        .addTo(map)
        .bindPopup(popupDiv, {
            maxWidth: 250,
            className: 'custom-leaflet-popup'
        });

      // CLICK HANDLER: Smooth move + Fetch Image
      marker.on("click", async (e) => {
        map.flyTo(e.latlng, 14, { animate: true, duration: 1.5 });
        
        // Try to get real image, otherwise use default
        const mapillaryImg = await fetchMapillaryImage(ch.lat, ch.lng);
        const finalImg = mapillaryImg || ch.image || defaultImg;

        const imgContainer = document.getElementById(`img-container-${ch.slug}`);
        if (imgContainer) {
          imgContainer.innerHTML = `<img src="${finalImg}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;" />`;
        }
      });

      marker.on("popupopen", () => {
        const popup = marker.getPopup();
        if (popup) {
          const el = popup.getElement();
          if (el) {
            el.addEventListener("click", () => navigate(`/chapters/${ch.slug}`));
          }
        }
      });
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [navigate]);

  return (
    <section className="relative bg-background">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              35 Chapters Across Namibia
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Click a marker to explore local views
            </p>
          </div>
          <span className="inline-block px-3 py-1 text-xs font-medium text-gold bg-gold/15 rounded-full">
            Nationwide
          </span>
        </div>
        <div
          ref={mapRef}
          className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-soft border border-border"
        />
      </div>
    </section>
  );
}