import { LucideIcon } from "lucide-react";

type SectionTagProps = {
  icon: LucideIcon;
  label: string;
  variant?: "white" | "light";
};

export function SectionTag({ icon: Icon, label, variant = "light" }: SectionTagProps) {
  const bgClass = variant === "white" ? "bg-white" : "bg-gray-lighter";

  return (
    <div className={`inline-flex items-center gap-2 rounded-full ${bgClass} border border-gray-light px-4 py-2`}>
      <Icon className="size-4 text-dark" />
      <span className="text-xs font-semibold text-dark">{label}</span>
    </div>
  );
}
