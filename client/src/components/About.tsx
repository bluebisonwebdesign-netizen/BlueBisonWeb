import { Card } from "@/components/ui/card";
import { Award, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Zap, label: "Projects Completed", value: "100+" },
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building Digital Excellence for Texas
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Blue Bison Web Design, we're passionate about creating powerful digital experiences for businesses across Texas. Our team combines creative design with technical expertise to deliver websites that not only look stunning but drive real business results.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              From small local businesses to growing enterprises, we've helped our clients establish a strong online presence that attracts customers and builds credibility. Every project we take on receives our full commitment to quality, creativity, and exceptional service.
            </p>
            <p className="text-lg text-muted-foreground">
              When you work with Blue Bison, you're not just getting a website—you're getting a partner dedicated to your success in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="p-6 hover-elevate transition-all" data-testid={`card-stat-${index}`}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold" data-testid={`text-stat-value-${index}`}>{stat.value}</p>
                        <p className="text-muted-foreground" data-testid={`text-stat-label-${index}`}>{stat.label}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
