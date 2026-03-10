import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { chapters } from "@/data/chapters";
import { RotateCcw, Globe, Map as MapIcon } from "lucide-react";

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

  // View constants
  const NAMIBIA_CENTER: L.LatLngTuple = [-21.5, 17.0];
  const GLOBAL_CENTER: L.LatLngTuple = [20.0, 10.0];

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: NAMIBIA_CENTER,
      zoom: 6,
      scrollWheelZoom: false,
      attributionControl: false,
      minZoom: 2,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    chapters.forEach((ch) => {
      const isActive = !!ch.hasActiveContributions; 
      const icon = createIcon(isActive);

      const popupContent = document.createElement('div');
      popupContent.innerHTML = `
        <div style="font-family: sans-serif; padding: 2px; min-width: 180px;">
          ${ch.image ? `
            <img src="${ch.image}" 
                 alt="${ch.name}" 
                 style="width: 100%; height: 100px; object-fit: cover; border-radius: 6px; margin-bottom: 8px; display: block;" 
                 onerror="this.style.display='none'"/>
          ` : ''}
          <strong style="display: block; font-size: 14px; margin-bottom: 2px; color: #1a1a1a;">${ch.name}</strong>
          
          ${ch.leader ? `
            <p style="font-size: 11px; color: #b45309; font-weight: bold; margin-bottom: 4px; display: flex; align-items: center; gap: 4px;">
              👑 ${ch.leader}
            </p>
          ` : ''}

          <p style="font-size: 11px; color: #666; margin-bottom: 10px;">${ch.region}</p>
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
            transition: opacity 0.2s;
          " onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
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
            const path = isActive 
              ? `/contributions?chapter=${ch.slug}` 
              : `/chapters/${ch.slug}`;
            navigate(path);
          };
        }
      });

      marker.on("click", (e) => {
        map.flyTo(e.latlng, 10, { animate: true, duration: 1.5 });
        setIsZoomed(true);
      });
    });

    mapInstanceRef.current = map;
    return () => { map.remove(); mapInstanceRef.current = null; };
  }, [navigate]);

  const handleGlobalView = () => {
    mapInstanceRef.current?.flyTo(GLOBAL_CENTER, 2, { animate: true, duration: 2 });
    setIsZoomed(true);
  };

  const handleNamibiaView = () => {
    mapInstanceRef.current?.flyTo(NAMIBIA_CENTER, 6, { animate: true, duration: 1.5 });
    setIsZoomed(false);
  };

  return (
    <section className="relative bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight uppercase">Global & Regional Chapter Map</h2>
              <p className="text-xs text-muted-foreground mt-1">Explore traditional chapters and diaspora hubs worldwide.</p>
            </div>
            
            <div className="flex flex-wrap gap-3 items-center">
              {/* View Toggles */}
              <div className="flex bg-secondary/50 p-1 rounded-lg border">
                <button 
                  onClick={handleNamibiaView}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold uppercase hover:bg-white transition-all"
                >
                  <MapIcon size={12} /> Namibia
                </button>
                <button 
                  onClick={handleGlobalView}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold uppercase hover:bg-white transition-all"
                >
                  <Globe size={12} /> Diaspora
                </button>
              </div>

              {/* Legend */}
              <div className="flex gap-4 text-[10px] uppercase font-bold text-muted-foreground bg-secondary/30 p-2.5 px-3 rounded-lg border">
                <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"/> Active Data</span>
                <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#D4A843]"/> Chapters</span>
              </div>
            </div>
        </div>

        <div className="relative rounded-2xl border overflow-hidden shadow-2xl bg-muted/20">
          <div ref={mapRef} className="w-full h-[600px] z-0" />
          
          {isZoomed && (
            <button 
              onClick={handleNamibiaView}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] bg-white border px-6 py-3 rounded-full shadow-2xl text-xs font-bold flex items-center gap-2 hover:scale-105 transition-all active:scale-95"
            >
              <RotateCcw size={14} /> Back to Namibia
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
        .leaflet-popup-content-wrapper {
          border-radius: 12px !important;
          padding: 4px !important;
          border: 1px solid #e2e8f0;
        }
      `}</style>
    </section>
  );
}