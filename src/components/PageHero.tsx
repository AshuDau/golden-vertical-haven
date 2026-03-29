interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative z-10 section-padding pb-12 md:pb-16 w-full">
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-body block mb-3 animate-fade-in">
          Dauji Projects
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {title}
        </h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-xl font-body animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
