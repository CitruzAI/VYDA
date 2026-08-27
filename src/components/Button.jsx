import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const base =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-semibold uppercase tracking-[0.09em] text-[0.82rem] transition-all duration-300";

const variants = {
  primary: "bg-vyda-blue text-ivory border border-vyda-blue px-8 py-4 hover:bg-vyda-blue-soft hover:border-vyda-blue-soft hover:text-ivory",
  ghost: "bg-transparent text-vyda-blue border border-ink/30 px-8 py-4 hover:border-vyda-blue",
  ghostDark: "bg-transparent text-ivory border border-white/25 px-8 py-4 hover:border-white hover:text-white",
  text: "text-vyda-blue border-b border-vyda-blue pb-1 gap-2 hover:gap-3 hover:text-vyda-blue-soft hover:border-vyda-blue-soft",
  textDark: "text-ivory border-b border-white/40 pb-1 gap-2 hover:gap-3 hover:text-white",
};

export default function Button({
  as,
  href,
  to,
  variant = "primary",
  icon = true,
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const showIcon = icon && (variant === "text" || variant === "textDark");

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
        {showIcon && <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />}
      </Link>
    );
  }

  const isExternal = href?.startsWith("http");
  const Tag = as || (href ? "a" : "button");

  return (
    <Tag
      href={Tag === "a" ? href : undefined}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={classes}
      {...props}
    >
      {children}
      {showIcon && <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />}
    </Tag>
  );
}
