import { Card } from "@/components/ui/card";
import { Award, Users, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Zap, label: "Projects Completed", value: "100+" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
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
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6" data-testid={`card-stat-${index}`}>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
