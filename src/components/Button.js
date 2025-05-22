function handleClick(e) {
  e.preventDefault();
}

function handleSubmit(e) {
  e.preventDefault();
}

export default function Button({
  children,
  width = 174,
  height = 60,
  color = "#ffffff",
  background = "#02ACB9",
  borderRadius = 31,
  border = "none",
  fontSize = 18,
  fontWeight = 300,
  alignItems = "center",
  justifyContent = "center",
  gap = 0.5,
  type = "",
  className = "",
  onClick = handleClick,
  onSubmit = handleSubmit,
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
    border,
    borderRadius: `${borderRadius}px`,
    fontSize: `${fontSize}px`,
    fontWeight,
    cursor: "pointer",
  };

  return (
    <button
      style={btnStyle}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      className={className}
    >
      {children ? children : "Let's talk"}
    </button>
  );
}
