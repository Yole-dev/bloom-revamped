export default function Box({
  children,
  width = 606,
  height = 323,
  background = "",
  borderRadius = 1.5,
  className = "",
}) {
  const boxStyles = {
    width: `${width}px`,
    height: `${height}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background,
    borderRadius: `${borderRadius}rem`,
  };

  return (
    <div style={boxStyles} className={className}>
      {children}
    </div>
  );
}
