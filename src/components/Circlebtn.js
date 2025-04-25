export default function CircleButton({
  children,
  background = "#0755e9",
  border = "solid 2px #ffffff",
  width = 90.39,
  height = 89.46,
  color = "#ffffff",
  borderRadius = 100,
}) {
  const customBtnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${width}px`,
    height: `${height}px`,
    background,
    color,
    border,
    borderRadius: `${borderRadius}%`,
  };

  return <div style={customBtnStyle}>{children}</div>;
}
