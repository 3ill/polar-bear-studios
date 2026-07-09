const GlowWave = ({
  text,
  className = "",
  letterDelay = 0.05,
  animationDuration = 0.8,
  as: Component = "h1",
}) => {
  return (
    <Component className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="glow-letter"
          style={{
            animationDelay: `${index * letterDelay}s`,
            animationDuration: `${animationDuration}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Component>
  );
};

export default GlowWave;
