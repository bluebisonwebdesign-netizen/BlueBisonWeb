import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Search, Sparkles, ChartPie } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Web Design",
      description: "Custom, responsive websites built with modern technologies. We create beautiful, fast-loading sites that work perfectly on all devices and deliver exceptional user experiences.",
    },
    {
      icon: Search,
      title: "SEO",
      description: "Boost your visibility in search engines and attract more customers. Our SEO strategies improve your rankings, drive organic traffic, and help you reach the right audience.",
    },
    {
      icon: Sparkles,
      title: "Logo Design",
      description: "Stand out with a memorable brand identity. We design unique, professional logos that capture your business essence and make a lasting impression on your customers.",
    },
    {
      icon: ChartPie,
      title: "Google Ads Setup",
      description: "Launch effective advertising campaigns that generate leads. We set up and optimize your Google Ads to maximize ROI and connect you with customers actively searching for your services.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to grow your business online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-elevate transition-all h-full" data-testid={`card-service-${index}`}>
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 rounded-lg bg-primary/10 w-fit mb-4"
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base" data-testid={`text-service-description-${index}`}>
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
