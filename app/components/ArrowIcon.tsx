type ArrowIconProps = {
  direction?: "back" | "forward" | "up" | "diagonal";
};

export function ArrowIcon({ direction = "forward" }: ArrowIconProps) {
  const rotation = {
    back: 180,
    forward: 0,
    up: -90,
    diagonal: -45,
  }[direction];

  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path d="M4 12h15M14 6l6 6-6 6" />
    </svg>
  );
}
