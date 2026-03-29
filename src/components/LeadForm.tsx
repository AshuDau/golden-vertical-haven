import { useState } from "react";
import { submitToGoogleSheet } from "@/lib/googleSheets";
import { toast } from "sonner";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder: string;
  required?: boolean;
  options?: string[];
}

interface LeadFormProps {
  fields: FormField[];
  sourcePage: string;
  title?: string;
  subtitle?: string;
}

const LeadForm = ({ fields, sourcePage, title, subtitle }: LeadFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = { ...formData, source_page: sourcePage, timestamp: new Date().toISOString() };
    const result = await submitToGoogleSheet(data);

    if (result.success) {
      toast.success("Thank you! We'll get back to you shortly.");
      setFormData({});
      (e.target as HTMLFormElement).reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="luxury-card max-w-2xl mx-auto">
      {title && (
        <h3 className="font-display text-2xl md:text-3xl mb-2">{title}</h3>
      )}
      {subtitle && (
        <p className="text-muted-foreground text-sm font-body mb-8">{subtitle}</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body block mb-2">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                rows={4}
                className="luxury-input resize-none"
                onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
              />
            ) : field.type === "select" ? (
              <select
                name={field.name}
                required={field.required}
                className="luxury-input bg-background"
                onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
                defaultValue=""
              >
                <option value="" disabled>{field.placeholder}</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                className="luxury-input"
                onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={isSubmitting}
          className="luxury-button mt-4 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
