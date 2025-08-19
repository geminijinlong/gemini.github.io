import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Globe, Map } from "lucide-react";

const sites = [
  {
    category: "网址导航 / 门户网站",
    icon: <Globe className="w-6 h-6 text-blue-500" />, 
    links: [
      { name: "AOL", url: "https://www.aol.com" },
      { name: "Yahoo!", url: "https://www.yahoo.com" },
      { name: "MSN", url: "https://www.msn.com" },
      { name: "Start.me", url: "https://start.me" },
      { name: "Symbaloo", url: "https://www.symbaloo.com" },
      { name: "Netvibes", url: "https://www.netvibes.com" },
    ],
  },
  {
    category: "地图导航网站",
    icon: <Map className="w-6 h-6 text-green-500" />, 
    links: [
      { name: "Google Maps", url: "https://maps.google.com" },
      { name: "Apple Maps", url: "https://www.apple.com/maps/" },
      { name: "Bing Maps", url: "https://www.bing.com/maps" },
      { name: "Here WeGo", url: "https://wego.here.com" },
      { name: "OpenStreetMap", url: "https://www.openstreetmap.org" },
    ],
  },
];

export default function NavigationPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 grid gap-6 md:grid-cols-2">
      {sites.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
        >
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {section.icon}
                <h2 className="text-xl font-bold">{section.category}</h2>
              </div>
              <div className="grid gap-3">
                {section.links.map((link, i) => (
                  <Button
                    key={i}
                    asChild
                    className="w-full justify-start rounded-xl shadow-sm"
                    variant="outline"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
