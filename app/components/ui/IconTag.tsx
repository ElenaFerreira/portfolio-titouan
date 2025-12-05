import Image from "next/image";

type IconTagProps = {
  label: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  variant?: "white" | "gray";
  className?: string;
};

export function IconTag({ label, icon, imageSrc, variant = "white", className = "" }: IconTagProps) {
  const variantClasses = variant === "white" ? "gap-2 bg-white p-1 text-sm font-medium" : "gap-1 bg-gray-lighter px-3 py-1 text-xs font-semibold";

  return (
    <div className={`inline-flex items-center rounded-sm border border-gray-light text-dark ${variantClasses} ${className}`}>
      {imageSrc ? <Image src={imageSrc} alt={label} width={16} height={16} className="object-contain" /> : icon}
      <span>{label}</span>
    </div>
  );
}
