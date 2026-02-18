<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
=======
import { useEffect, useRef } from "react";
>>>>>>> 5f5b639a9e305195db3a947bc5de89720e59277f
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { chapters } from "@/data/chapters";
<<<<<<< HEAD
import { RotateCcw } from "lucide-react"; // Make sure to have lucide-react installed

const MAPILLARY_TOKEN = "MLY|26046421104975040|096734b2218e6861b86de6fc0e320f7c";

// Updated Icon Creator: Now accepts a 'highlight' parameter
const createIcon = (isContribution: boolean) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width:14px;
      height:14px;
      background:${isContribution ? '#22c55e' : '#D4A843'}; 
      border:2px solid #fff;
      border-radius:50%;
      box-shadow:0 2px 6px rgba(0,0,0,.35);
      cursor:pointer;
      ${isContribution ? 'outline: 3px solid rgba(34, 197, 94, 0.4);' : ''}
    "></div>`,
=======

// 1. Paste your Mapillary Client Token here
const MAPILLARY_TOKEN = "YOUR_MAPILLARY_CLIENT_TOKEN_HERE";

const createIcon = () =>
  L.divIcon({
    className: "",
    html: `<div style="width:14px;height:14px;background:#D4A843;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.35);cursor:pointer"></div>`,
>>>>>>> 5f5b639a9e305195db3a947bc5de89720e59277f
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

<<<<<<< HEAD
async function fetchMapillaryImage(lat: number, lng: number) {
  try {
=======
// Helper to fetch Mapillary Image
async function fetchMapillaryImage(lat: number, lng: number) {
  try {
    // Searches for images in a small box around the coordinates
>>>>>>> 5f5b639a9e305195db3a947bc5de89720e59277f
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
<<<<<<< HEAD
  
  // State to track if the user has zoomed into a specific chapter
  const [isZoomed, setIsZoomed] = useState(false);

  const defaultCenter: L.LatLngExpression = [-21.5, 17.0];
  const defaultZoom = 6;

  // Function to return map to original state
  const handleResetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(defaultCenter, defaultZoom, {
        animate: true,
        duration: 1.5
      });
      setIsZoomed(false);
    }
  };
=======
>>>>>>> 5f5b639a9e305195db3a947bc5de89720e59277f

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
<<<<<<< HEAD
      center: defaultCenter,
      zoom: defaultZoom,
=======
      center: [-21.5, 17.0],
      zoom: 6,
>>>>>>> 5f5b639a9e305195db3a947bc5de89720e59277f
      scrollWheelZoom: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
<<<<<<< HEAD
      attribution: '© OSM',
    }).addTo(map);

    chapters.forEach((ch) => {
      // 1. Logic: Highlight if chapter has contributions
      const hasContrib = !!ch.hasActiveContributions; 
      const icon = createIcon(hasContrib);
      const defaultImg = 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=400';

=======
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    }).addTo(map);

    L.control.attribution({ position: "bottomright" }).addTo(map);

    const icon = createIcon();

    chapters.forEach((ch) => {
      // Default placeholder image
      const defaultImg = 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=400';

      // Creating a container for the popup content
>>>>>>> 5f5b639a9e305195db3a947bc5de89720e59277f
      const popupDiv = document.createElement('div');
      popupDiv.style.width = "200px";
      popupDiv.style.cursor = "pointer";
      popupDiv.innerHTML = `
        <div id="img-container-${ch.slug}">
           <div style="width: 100%; height: 100px; background: #f3f4f6; border-radius: 8px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #999;">
<<<<<<< HEAD
             Loading view...
           </div>
        </div>
        <strong style="font-size: 14px; color: ${hasContrib ? '#22c55e' : '#D4A843'}; display: block;">
          ${ch.name} ${hasContrib ? '★' : ''}
        </strong>
        <p style="font-size: 11px; color: #666; margin: 4px 0;">
          ${hasContrib ? 'Active Contributor' : ch.region + ' Region'}
        </p>
        <span style="font-size: 11px; color: #D4A843; font-weight: bold;">View Details →</span>
=======
             Loading image...
           </div>
        </div>
        <strong style="font-size: 14px; color: #D4A843; display: block;">${ch.name}</strong>
        <p style="font-size: 12px; color: #666; margin: 4px 0;">${ch.region} Region</p>
        <span style="font-size: 11px; color: #D4A843; font-weight: bold;">View Chapter →</span>
>>>>>>> 5f5b639a9e305195db3a947bc5de89720e59277f
      `;

      const marker = L.marker([ch.lat, ch.lng], { icon })
        .addTo(map)
<<<<<<< HEAD
        .bindPopup(popupDiv, { maxWidth: 250 });

      marker.on("click", async (e) => {
        map.flyTo(e.latlng, 14, { animate: true, duration: 1.5 });
        setIsZoomed(true); // Show the reset button
        
        const mapillaryImg = await fetchMapillaryImage(ch.lat, ch.lng);
        const finalImg = mapillaryImg || ch.image || defaultImg;
=======
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

>>>>>>> 5f5b639a9e305195db3a947bc5de89720e59277f
        const imgContainer = document.getElementById(`img-container-${ch.slug}`);
        if (imgContainer) {
          imgContainer.innerHTML = `<img src="${finalImg}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;" />`;
        }
      });

      marker.on("popupopen", () => {
<<<<<<< HEAD
        const el = marker.getPopup()?.getElement();
        if (el) {
          // 2. Logic: Link to the contributions section specifically
          const path = hasContrib 
            ? `/chapters/${ch.slug}?view=contributions` 
            : `/chapters/${ch.slug}`;
          el.addEventListener("click", () => navigate(path));
=======
        const popup = marker.getPopup();
        if (popup) {
          const el = popup.getElement();
          if (el) {
            el.addEventListener("click", () => navigate(`/chapters/${ch.slug}`));
          }
>>>>>>> 5f5b639a9e305195db3a947bc5de89720e59277f
        }
      });
    });

    mapInstanceRef.current = map;
<<<<<<< HEAD
    return () => { map.remove(); mapInstanceRef.current = null; };
=======

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
>>>>>>> 5f5b639a9e305195db3a947bc5de89720e59277f
  }, [navigate]);

  return (
    <section className="relative bg-background">
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">35 Chapters Across Namibia</h2>
            <div className="flex gap-4 mt-2">
              <span className="flex items-center gap-1 text-xs"><div className="w-2 h-2 rounded-full bg-[#D4A843]" /> Standard</span>
              <span className="flex items-center gap-1 text-xs"><div className="w-2 h-2 rounded-full bg-[#22c55e]" /> Contributors</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border shadow-soft">
          <div ref={mapRef} className="w-full h-[400px] md:h-[500px]" />
          
          {/* 🔘 RESET VIEW BUTTON: Only visible when zoomed in */}
          {isZoomed && (
            <button
              onClick={handleResetView}
              className="absolute bottom-4 right-4 z-[1000] flex items-center gap-2 bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full shadow-lg hover:bg-gold hover:text-white transition-all font-bold text-xs border border-gray-200 animate-in fade-in slide-in-from-bottom-2"
            >
              <RotateCcw size={14} />
              Reset Map View
            </button>
          )}
        </div>
=======
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
>>>>>>> 5f5b639a9e305195db3a947bc5de89720e59277f
      </div>
    </section>
  );
}