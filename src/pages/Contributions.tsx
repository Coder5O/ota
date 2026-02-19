import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ChevronLeft, ChevronDown, DollarSign } from "lucide-react";

// --- UPDATED DATA WITH SLUGS MATCHING THE MAP ---
const chaptersData = [
  {
    id: 1,
    slug: "windhoek-central",
    name: "Windhoek Central",
    percentage: 25,
    money: 80000,
    equipment: 15000,
    cows: 12,
    goats: 35,
    sheep: 28,
    chicken: 60,
    color: "#8B2323",
  },
  {
    id: 2,
    slug: "okahandja",
    name: "Okahandja",
    percentage: 20,
    money: 50000,
    equipment: 10000,
    cows: 20,
    goats: 45,
    sheep: 30,
    chicken: 80,
    color: "#D4A574",
  },
  {
    id: 3,
    slug: "aminuis",
    name: "Aminuis",
    percentage: 18,
    money: 40000,
    equipment: 5000,
    cows: 25,
    goats: 50,
    sheep: 40,
    chicken: 45,
    color: "#5D4E37",
  },
  {
    id: 4,
    slug: "okakarara",
    name: "Okakarara",
    percentage: 15,
    money: 35000,
    equipment: 8000,
    cows: 15,
    goats: 40,
    sheep: 20,
    chicken: 100,
    color: "#8B2323",
  },
];

const totalMoney = chaptersData.reduce((sum, c) => sum + c.money, 0);
const totalEquipment = chaptersData.reduce((sum, c) => sum + c.equipment, 0);
const totalCows = chaptersData.reduce((sum, c) => sum + c.cows, 0);
const totalGoats = chaptersData.reduce((sum, c) => sum + c.goats, 0);
const totalSheep = chaptersData.reduce((sum, c) => sum + c.sheep, 0);
const totalChicken = chaptersData.reduce((sum, c) => sum + c.chicken, 0);

const livestockTypes = [
  { name: "Cows", value: totalCows, color: "#8B2323" },
  { name: "Goats", value: totalGoats, color: "#D4A574" },
  { name: "Sheep", value: totalSheep, color: "#A0522D" },
  { name: "Chicken", value: totalChicken, color: "#CD853F" },
];

export default function Contributions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dashboardRef = useRef<HTMLDivElement>(null);
  
  const [livestockOpen, setLivestockOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<typeof chaptersData[0] | null>(null);

  // --- SYNC WITH MAP NAVIGATION ---
  useEffect(() => {
    const chapterSlug = searchParams.get("chapter");
    if (chapterSlug) {
      const chapter = chaptersData.find((c) => c.slug === chapterSlug);
      if (chapter) {
        setSelectedChapter(chapter);
        
        // Timeout ensures the global App ScrollToTop finishes first.
        // This prevents the page from jumping to the bottom and then snapping back.
        const timer = setTimeout(() => {
          dashboardRef.current?.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
        }, 500); 

        return () => clearTimeout(timer);
      }
    } else {
      setSelectedChapter(null);
    }
  }, [searchParams]);

  const handleBackToAll = () => {
    setSelectedChapter(null);
    setSearchParams({}); // Remove the ?chapter= slug from URL
  };

  const pieData = chaptersData.map((c) => ({
    name: c.name,
    value: c.percentage,
    color: c.color,
  }));

  const selectedMoneyBreakdown = selectedChapter
    ? [
        { name: "Money", value: selectedChapter.money, color: "#8B2323" },
        { name: "Equipment", value: selectedChapter.equipment, color: "#5D4E37" },
      ]
    : [];

  const selectedLivestockBreakdown = selectedChapter
    ? [
        { name: "Cows", value: selectedChapter.cows, color: "#8B2323" },
        { name: "Goats", value: selectedChapter.goats, color: "#D4A574" },
        { name: "Sheep", value: selectedChapter.sheep, color: "#A0522D" },
        { name: "Chicken", value: selectedChapter.chicken, color: "#CD853F" },
      ]
    : [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-10 md:py-14 bg-gradient-hero pattern-african">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-sm font-medium text-gold bg-gold/20 rounded-full mb-4">
              Transparency
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Chapter Contributions
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Real-time tracking of livestock and monetary support from across Namibia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Dashboard - The ref here is what we scroll to */}
      <section ref={dashboardRef} className="py-10 md:py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          
          {/* Top Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-hero text-primary-foreground border-none shadow-xl">
              <CardContent className="p-6">
                <p className="text-sm text-primary-foreground/80 mb-1">Total Impact Value</p>
                <p className="font-display text-3xl font-bold">
                  N${(totalMoney + totalEquipment).toLocaleString()}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gold/10">
                  <DollarSign className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cash Contributions</p>
                  <p className="font-display text-xl font-bold text-foreground">
                    N${totalMoney.toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* National Livestock Summary (Collapsible) */}
          <Collapsible open={livestockOpen} onOpenChange={setLivestockOpen} className="mb-12">
            <CollapsibleTrigger asChild>
              <Card className="cursor-pointer hover:bg-muted/30 transition-all border-dashed border-2">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <p className="font-display text-lg font-semibold">National Livestock Overview</p>
                    <p className="text-muted-foreground text-sm hidden md:block">
                      {(totalCows + totalGoats + totalSheep + totalChicken).toLocaleString()} total animals donated
                    </p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${livestockOpen ? "rotate-180" : ""}`} />
                </CardContent>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {livestockTypes.map((type) => (
                  <Card key={type.name} className="border-gold/20">
                    <CardContent className="p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-widest">{type.name}</p>
                      <p className="font-display text-2xl font-bold" style={{ color: type.color }}>
                        {type.value.toLocaleString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {selectedChapter ? (
            /* --- INDIVIDUAL CHAPTER VIEW --- */
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Button
                variant="outline"
                onClick={handleBackToAll}
                className="mb-8 hover:bg-gold hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to National Overview
              </Button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-gold/40 border-l-4" style={{ borderLeftColor: selectedChapter.color }}>
                  <CardHeader>
                    <CardTitle className="font-display text-3xl font-bold">
                      {selectedChapter.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-8">
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground text-sm font-semibold uppercase">Growth Share</span>
                        <span className="font-bold text-gold">{selectedChapter.percentage}%</span>
                      </div>
                      <Progress value={selectedChapter.percentage} className="h-2 bg-muted" />
                    </div>
                    <div className="bg-muted/40 rounded-2xl p-8 text-center border">
                      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-tighter italic">Total Financial Contribution</p>
                      <p className="font-display text-5xl font-extrabold text-primary">
                        N${(selectedChapter.money + selectedChapter.equipment).toLocaleString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-display text-xl">Asset Split</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedMoneyBreakdown.map((item) => (
                      <div key={item.name} className="flex justify-between items-center p-5 border rounded-2xl bg-background shadow-sm">
                        <span className="font-semibold text-muted-foreground">{item.name}</span>
                        <span className="font-display text-2xl font-bold">N${item.value.toLocaleString()}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2 shadow-inner bg-muted/20 border-none">
                  <CardHeader>
                    <CardTitle className="font-display text-xl text-center">Specific Livestock Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {selectedLivestockBreakdown.map((item) => (
                        <div key={item.name} className="text-center group p-6 bg-background rounded-3xl border hover:border-gold/50 transition-all shadow-sm">
                          <p className="text-xs text-muted-foreground mb-2 uppercase font-bold">{item.name}</p>
                          <p className="font-display text-4xl font-black" style={{ color: item.color }}>
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            /* --- NATIONAL OVERVIEW (DEFAULT) --- */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-1000">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-display text-xl">National Distribution (%)</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={110}
                        paddingAngle={8}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Cash Ranking (N$)</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chaptersData} layout="vertical" margin={{ left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.3} />
                      <XAxis type="number" hide />
                      <YAxis type="category" dataKey="name" width={100} axisLine={false} tickLine={false} />
                      <Tooltip cursor={{ fill: '#fcfcfc' }} />
                      <Bar dataKey="money" fill="#D4A843" radius={[0, 8, 8, 0]} barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 border-gold/10">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Browse All Contributing Chapters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chaptersData.map((chapter) => (
                      <button
                        key={chapter.id}
                        onClick={() => {
                          setSelectedChapter(chapter);
                          setSearchParams({ chapter: chapter.slug });
                        }}
                        className="p-6 border rounded-2xl text-left hover:shadow-2xl hover:border-gold/50 transition-all bg-background group relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-1 h-full" style={{ backgroundColor: chapter.color }} />
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-display font-bold text-lg group-hover:text-gold transition-colors">{chapter.name}</h3>
                          <ChevronDown className="w-4 h-4 -rotate-90 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                        </div>
                        <Progress value={chapter.percentage} className="h-1.5 mb-3 bg-muted" />
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-tight">
                          N${chapter.money.toLocaleString()} Total Contribution
                        </p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}