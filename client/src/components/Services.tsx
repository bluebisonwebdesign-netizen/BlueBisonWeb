import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Search, Sparkles, ChartPie } from "lucide-react";

export default function Services() {
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
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to grow your business online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
