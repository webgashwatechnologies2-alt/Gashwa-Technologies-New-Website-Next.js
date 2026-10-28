import "./auto-scroll-marquee.css";

type AutoScrollMarqueeProps = {
  items: string[];
};

export default function AutoScrollMarquee({ items }: AutoScrollMarqueeProps) {
  return (
    <div className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-content">
          {items.map((text, index) => (
            <span key={index} className="marquee-item">
              {text}
              <span className="marquee-separator">✦</span>
            </span>
          ))}
          {items.map((text, index) => (
            <span key={`dup-${index}`} className="marquee-item">
              {text}
              <span className="marquee-separator">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
