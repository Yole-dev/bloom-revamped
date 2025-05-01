function handleClick(e) {
  e.preventDefault();
}

export default function Button({
  children,
  width = 174,
  height = 60,
  color = "#ffffff",
  background = "#0755e9",
  borderRadius = 31,
  fontSize = 18,
  fontWeight = 300,
  alignItems = "center",
  justifyContent = "center",
  gap = 0.5,
  className = "",
  onClick = handleClick,
}) {
  const btnStyle = {
    width: `${width}px`,
    height: `${height}px`,
    display: "flex",
    alignItems,
    justifyContent,
    gap: `${gap}rem`,
    color,
    background,
    border: "none",
    borderRadius: `${borderRadius}px`,
    fontSize: `${fontSize}px`,
    fontWeight,
    cursor: "pointer",
  };

  return (
    <button style={btnStyle} onClick={onClick} className={className}>
      {children ? children : "Let's talk"}
    </button>
  );
}
