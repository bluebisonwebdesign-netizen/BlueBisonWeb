import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import rushImage from "@assets/screenshot-1762588356129.png";
import edwinsImage from "@assets/screenshot-1762588359593.png";
import blackbexarImage from "@assets/screenshot-1762588362822.png";
import plumbdaddyImage from "@assets/screenshot-1762588384416.png";
import tattooImage from "@assets/screenshot-1762588387135.png";
import ready2haulImage from "@assets/screenshot-1762588395227.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      name: "Rush Wheel and Tire",
      url: "https://rushwheelandtire.com/",
      image: rushImage,
    },
    {
      name: "Edwin's Repair Shop",
      url: "https://edwinsrepairshop.com/",
      image: edwinsImage,
    },
    {
      name: "Black Bexar Asphalt Solutions",
      url: "https://blackbexaras.com/",
      image: blackbexarImage,
    },
    {
      name: "PlumbDaddy Texas",
      url: "https://plumbdaddy-texas.com/",
      image: plumbdaddyImage,
    },
    {
      name: "Tattoo Maze",
      url: "https://tattoomaze.com/",
      image: tattooImage,
    },
    {
      name: "Ready 2 Haul",
      url: "https://ready2haul.net/",
      image: ready2haulImage,
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Websites We've Built</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proud to showcase our work with amazing businesses across the US
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              data-testid={`link-portfolio-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer h-full">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={`${project.name} website screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="h-10 w-10 text-white drop-shadow-lg" />
                    </motion.div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors" data-testid={`text-portfolio-name-${index}`}>
                    {project.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
