export default function Box({
  children,
  width = 606,
  height = 323,
  flexDirection = "",
  alignItems = "center",
  justifyContent = "center",
  background = "",
  color = "",
  borderRadius = 1.5,
  border = "",
  gap = 0,
  className = "",
}) {
  const boxStyles = {
    width: `${width}px`,
    height: `${height}px`,
    display: "flex",
    flexDirection,
    alignItems,
    justifyContent,
    background,
    color,
    borderRadius: `${borderRadius}rem`,
    border,
    gap: `${gap}rem`,
  };

  return (
    <div style={boxStyles} className={className}>
      {children}
    </div>
  );
}
