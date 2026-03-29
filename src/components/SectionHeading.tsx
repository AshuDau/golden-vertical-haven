interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, subtitle, align = "center" }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {label && (
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-body block mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl font-body leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
