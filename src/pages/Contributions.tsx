import { useState } from "react";
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
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ChevronLeft, ChevronDown, DollarSign, Package } from "lucide-react";

// Sample contributions data - will be replaced with real data from backend
const chaptersData = [
  {
    id: 1,
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
    name: "Okakarara",
    percentage: 15,
    money: 35000,
    equipment: 10000,
    cows: 18,
    goats: 30,
    sheep: 22,
    chicken: 55,
    color: "#A0522D",
  },
  {
    id: 5,
    name: "Gobabis",
    percentage: 12,
    money: 30000,
    equipment: 10000,
    cows: 10,
    goats: 25,
    sheep: 15,
    chicken: 40,
    color: "#CD853F",
  },
  {
    id: 6,
    name: "Otjiwarongo",
    percentage: 10,
    money: 25000,
    equipment: 10000,
    cows: 8,
    goats: 20,
    sheep: 12,
    chicken: 30,
    color: "#8B4513",
  },
];

const totalMoney = chaptersData.reduce((sum, c) => sum + c.money, 0);
const totalEquipment = chaptersData.reduce((sum, c) => sum + c.equipment, 0);
const totalCows = chaptersData.reduce((sum, c) => sum + c.cows, 0);
const totalGoats = chaptersData.reduce((sum, c) => sum + c.goats, 0);
const totalSheep = chaptersData.reduce((sum, c) => sum + c.sheep, 0);
const totalChicken = chaptersData.reduce((sum, c) => sum + c.chicken, 0);

const monetaryTypes = [
  { name: "Money", value: totalMoney, icon: DollarSign, color: "#8B2323", format: "money" },
  { name: "Equipment", value: totalEquipment, icon: Package, color: "#5D4E37", format: "money" },
];

const livestockTypes = [
  { name: "Cows", value: totalCows, color: "#8B2323" },
  { name: "Goats", value: totalGoats, color: "#D4A574" },
  { name: "Sheep", value: totalSheep, color: "#A0522D" },
  { name: "Chicken", value: totalChicken, color: "#CD853F" },
];

export default function Contributions() {
  const [livestockOpen, setLivestockOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<typeof chaptersData[0] | null>(null);

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
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-hero pattern-african">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-sm font-medium text-gold bg-gold/20 rounded-full mb-4">
              Contributions
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Chapter Contributions
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Track and celebrate the contributions from all OTA chapters. Together,
              we build a stronger community.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-hero text-primary-foreground">
              <CardContent className="p-6">
                <p className="text-sm text-primary-foreground/80 mb-1">Total Money</p>
                <p className="font-display text-3xl font-bold">
                  N${totalMoney.toLocaleString()}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#5D4E3720" }}>
                  <Package className="w-6 h-6" style={{ color: "#5D4E37" }} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Equipment</p>
                  <p className="font-display text-xl font-bold text-foreground">
                    N${totalEquipment.toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Livestock Summary - Collapsible */}
          <Collapsible open={livestockOpen} onOpenChange={setLivestockOpen} className="mb-12">
            <CollapsibleTrigger asChild>
              <Card className="cursor-pointer hover:shadow-elevated transition-shadow">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <p className="font-display text-lg font-semibold text-foreground">Livestock</p>
                    <p className="text-muted-foreground text-sm">
                      {(totalCows + totalGoats + totalSheep + totalChicken).toLocaleString()} head total
                    </p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${livestockOpen ? "rotate-180" : ""}`} />
                </CardContent>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {livestockTypes.map((type) => (
                  <Card key={type.name}>
                    <CardContent className="p-4 text-center">
                      <p className="text-sm text-muted-foreground mb-1">{type.name}</p>
                      <p className="font-display text-2xl font-bold text-foreground" style={{ color: type.color }}>
                        {type.value.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">head</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {selectedChapter ? (
            /* Chapter Detail View */
            <div className="animate-fade-in">
              <Button
                variant="ghost"
                onClick={() => setSelectedChapter(null)}
                className="mb-6"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to all chapters
              </Button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">
                      {selectedChapter.name} Chapter
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">
                          Share of Total Contributions
                        </span>
                        <span className="font-semibold">{selectedChapter.percentage}%</span>
                      </div>
                      <Progress value={selectedChapter.percentage} className="h-3" />
                    </div>
                    <div className="text-center py-4">
                      <p className="text-sm text-muted-foreground mb-1">Money + Equipment</p>
                      <p className="font-display text-4xl font-bold text-foreground">
                        N${(selectedChapter.money + selectedChapter.equipment).toLocaleString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-display text-xl">
                      Monetary Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedMoneyBreakdown.map((item) => (
                        <div key={item.name} className="text-center p-4 border rounded-lg">
                          <p className="text-sm text-muted-foreground">{item.name}</p>
                          <p className="font-display text-xl font-bold">N${item.value.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="font-display text-xl">
                      Livestock Contributions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedLivestockBreakdown.map((item) => (
                        <div key={item.name} className="text-center p-4 border rounded-lg">
                          <p className="text-sm text-muted-foreground">{item.name}</p>
                          <p className="font-display text-2xl font-bold" style={{ color: item.color }}>
                            {item.value}
                          </p>
                          <p className="text-xs text-muted-foreground">head</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            /* Overview View */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pie Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl">
                    Contributions by Chapter (%)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                          labelLine={false}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: number) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Bar Chart - Money */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl">
                    Money Contributions by Chapter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chaptersData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" tickFormatter={(v) => `N$${v / 1000}k`} />
                        <YAxis type="category" dataKey="name" width={100} />
                        <Tooltip formatter={(value: number) => `N$${value.toLocaleString()}`} />
                        <Bar dataKey="money" fill="#8B2323" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Chapters List */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="font-display text-xl">
                    All Chapters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {chaptersData.map((chapter) => (
                      <button
                        key={chapter.id}
                        onClick={() => setSelectedChapter(chapter)}
                        className="p-4 border rounded-lg text-left hover:shadow-elevated hover:border-primary/20 transition-all group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            {chapter.name}
                          </h3>
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: chapter.color }}
                          />
                        </div>
                        <div className="mb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Contribution</span>
                            <span className="font-medium">{chapter.percentage}%</span>
                          </div>
                          <Progress value={chapter.percentage} className="h-2" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Money: N${chapter.money.toLocaleString()} · Livestock: {chapter.cows + chapter.goats + chapter.sheep + chapter.chicken} head
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
