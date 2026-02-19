import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { chapters } from "@/data/chapters";
import { RotateCcw } from "lucide-react";

const createIcon = (hasContributions: boolean) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width:16px;
      height:16px;
      background:${hasContributions ? '#22c55e' : '#D4A843'}; 
      border:2px solid #fff;
      border-radius:50%;
      box-shadow:0 2px 8px rgba(0,0,0,.4);
      cursor:pointer;
      ${hasContributions ? 'outline: 3px solid rgba(34, 197, 94, 0.3); animation: pulse 2s infinite;' : ''}
    "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });

export function ChaptersMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [-21.5, 17.0],
      zoom: 6,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    chapters.forEach((ch) => {
      // Use the property from chapters.ts directly
      const isActive = !!ch.hasActiveContributions; 
      const icon = createIcon(isActive);

      const popupContent = document.createElement('div');
      popupContent.innerHTML = `
        <div style="font-family: sans-serif; padding: 5px; min-width: 140px;">
          <strong style="display: block; font-size: 14px; margin-bottom: 2px;">${ch.name}</strong>
          <p style="font-size: 11px; color: #666; margin-bottom: 8px;">${ch.region}</p>
          <button id="btn-${ch.slug}" style="
            width: 100%; 
            background: ${isActive ? '#22c55e' : '#D4A843'}; 
            color: white; 
            border: none; 
            padding: 8px 10px; 
            border-radius: 4px; 
            cursor: pointer; 
            font-weight: bold;
            font-size: 10px;
            text-transform: uppercase;
          ">
            ${isActive ? '📊 View Contributions' : 'View Chapter Detail'}
          </button>
        </div>
      `;

      const marker = L.marker([ch.lat, ch.lng], { icon }).addTo(map);
      marker.bindPopup(popupContent);

      marker.on('popupopen', () => {
        const btn = document.getElementById(`btn-${ch.slug}`);
        if (btn) {
          btn.onclick = () => {
            // Navigate based on active status
            const path = isActive 
              ? `/contributions?chapter=${ch.slug}` 
              : `/chapters/${ch.slug}`;
            navigate(path);
          };
        }
      });

      marker.on("click", (e) => {
        map.flyTo(e.latlng, 12, { animate: true, duration: 1.5 });
        setIsZoomed(true);
      });
    });

    mapInstanceRef.current = map;
    return () => { map.remove(); mapInstanceRef.current = null; };
  }, [navigate]);

  return (
    <section className="relative bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight">Regional Impact Map</h2>
              <p className="text-xs text-muted-foreground mt-1">Click markers to view chapter details or contribution data</p>
            </div>
            <div className="flex gap-4 text-[10px] uppercase font-bold text-muted-foreground bg-secondary/50 p-2 px-3 rounded-lg">
              <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-sm"/> Active Data</span>
              <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#D4A843] shadow-sm"/> Chapters</span>
            </div>
        </div>

        <div className="relative rounded-2xl border overflow-hidden shadow-2xl">
          <div ref={mapRef} className="w-full h-[550px] z-0" />
          
          {isZoomed && (
            <button 
              onClick={() => { mapInstanceRef.current?.flyTo([-21.5, 17.0], 6); setIsZoomed(false); }}
              className="absolute bottom-6 right-6 z-[1000] bg-white border px-4 py-2.5 rounded-full shadow-xl text-xs font-bold flex items-center gap-2 hover:bg-gray-50 transition-all active:scale-95"
            >
              <RotateCcw size={14} /> Reset View
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { outline: 3px solid rgba(34, 197, 94, 0.4); }
          70% { outline: 8px solid rgba(34, 197, 94, 0); }
          100% { outline: 3px solid rgba(34, 197, 94, 0); }
        }
      `}</style>
    </section>
  );
}