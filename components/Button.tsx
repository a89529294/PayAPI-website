interface ButtonProps {
  size: "large" | "medium" | "small";
  label: string;
  backgroundColor: string;
  color: string;
  extraClasses?: string;
}

const Button = ({
  size,
  label,
  backgroundColor,
  color,
  extraClasses,
}: ButtonProps) => {
  const sizeClass =
    size === "large" ? "w-full" : size === "medium" ? "w-40" : "w-32";
  return (
    <button
      className={`${sizeClass} ${backgroundColor} ${color} ${extraClasses} h-12 rounded-3xl border-2`}
    >
      {label}
    </button>
  );
};

export default Button;
