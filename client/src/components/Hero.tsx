import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Blue_bison_hero_background_b26a7ed9.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Powerful Web Design for<br />
          <span className="text-primary">Texas Businesses</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Professional websites that drive results. From design to deployment, we build your digital presence with expertise and care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="default"
            onClick={() => scrollToSection("portfolio")}
            className="text-lg px-8"
            data-testid="button-view-work"
          >
            View Our Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            data-testid="button-get-started"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
