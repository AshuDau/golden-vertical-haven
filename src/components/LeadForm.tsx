import { useState } from "react";
import { motion } from "framer-motion";
import { submitToGoogleSheet, type LeadFormData } from "@/lib/googleSheet";
import { toast } from "sonner";

interface FormField {
  name: keyof LeadFormData;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder: string;
  required?: boolean;
  options?: string[];
}

interface LeadFormProps {
  sourcePage: string;
  fields?: FormField[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const defaultFields: FormField[] = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true },
  { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your requirements..." },
];

export default function LeadForm({ sourcePage, fields = defaultFields, title, subtitle, className = "" }: LeadFormProps) {
  const [formData, setFormData] = useState<Partial<LeadFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data: LeadFormData = {
      name: formData.name || "",
      email: formData.email || "",
      phone: formData.phone || "",
      source_page: sourcePage,
      ...formData,
    };

    const success = await submitToGoogleSheet(data);
    setIsSubmitting(false);

    if (success) {
      setIsSubmitted(true);
      toast.success("Thank you! We'll get back to you shortly.");
      setFormData({});
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center py-16 ${className}`}
      >
        <div className="text-primary text-5xl mb-6">✓</div>
        <h3 className="font-display text-2xl text-foreground mb-3">Thank You</h3>
        <p className="text-muted-foreground font-body">Our team will connect with you within 24 hours.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="luxury-button-outline mt-8"
        >
          Submit Another
        </button>
      </motion.div>
    );
  }

  return (
    <div className={className}>
      {title && <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">{title}</h2>}
      {subtitle && <p className="text-muted-foreground font-body mb-8">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fields.filter((f) => f.type !== "textarea").map((field) => (
              <div key={field.name}>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">
                  {field.label} {field.required && <span className="text-primary">*</span>}
                </label>
                {field.type === "select" ? (
                  <select
                    className="luxury-input w-full"
                    value={(formData[field.name] as string) || ""}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    required={field.required}
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    className="luxury-input w-full"
                    placeholder={field.placeholder}
                    value={(formData[field.name] as string) || ""}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    required={field.required}
                  />
                )}
              </div>
            )
          )}
        </div>
        {fields.find((f) => f.type === "textarea") && (
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">
              {fields.find((f) => f.type === "textarea")!.label}
            </label>
            <textarea
              className="luxury-textarea w-full"
              placeholder={fields.find((f) => f.type === "textarea")!.placeholder}
              value={(formData[fields.find((f) => f.type === "textarea")!.name] as string) || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [fields.find((f) => f.type === "textarea")!.name]: e.target.value,
                })
              }
            />
          </div>
        )}
        <button type="submit" disabled={isSubmitting} className="luxury-button w-full md:w-auto disabled:opacity-50">
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
}
