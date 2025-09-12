// Example: Pass an icon component as the logo prop
const TechBadge = ({ label, color, logo: Logo, logoColor = "#fff", textColor = "#fff" }) => (
  <span
    className="inline-flex items-center px-4 py-1 rounded-full text-s font-medium text-black w-fit"
    style={{
      backgroundColor: color,
      color: textColor,
      gap: "0.4em",
    }}
  >
    {Logo && <Logo size={16} color={logoColor} />}
    {label}
  </span>
);

export default TechBadge;