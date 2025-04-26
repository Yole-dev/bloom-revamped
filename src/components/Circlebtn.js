export default function CircleButton({
  children,
  background = "#0755e9",
  border = "solid 4px #ffffff",
  width = 90.39,
  height = 89.46,
  color = "#ffffff",
  fontSize = 14,
  borderRadius = 100,
  className = "",
  onClick,
  role = "",
  type = "",
  ariaLabel = "",
}) {
  const customBtnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${width}px`,
    height: `${height}px`,
    background,
    color,
    fontSize: `${fontSize}px`,
    border,
    borderRadius: `${borderRadius}%`,
    pointerEvents: "auto !important",
  };

  return (
    <div
      style={customBtnStyle}
      role={role}
      type={type}
      aria-lable={ariaLabel}
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
