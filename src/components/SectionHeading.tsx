import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignment} mb-16`}
    >
      {eyebrow && (
        <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground font-body text-base md:text-lg mt-4 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
      <div className="luxury-divider mt-6" style={align === "left" ? { marginLeft: 0 } : {}} />
    </motion.div>
  );
}
