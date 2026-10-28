import "./auto-scroll-marquee.css";

const MARQUEE_TEXT = [
  "CUSTOM WEBSITE DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
  "website designing company in Himachal",
  "Welcome to Gashwa Technologies, your premier destination for custom web design services in Himachal Shimla. We specialize in creating stunning and user-friendly websites that are tailored to meet your unique business needs.",
  "At Gashwa Technologies, we understand that every business is different, and that's why we take a personalized approach to web design.",
  "Our web design services encompass a wide range of solutions to cater to various industries and business sizes.",
  "Website Designing and Development services.",
  "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India.",
  "Internationaly for Canada, USA, UK, Australia"
];

export default function CustomWebMarquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-content">
          {MARQUEE_TEXT.map((text, index) => (
            <span key={index} className="marquee-item">
              {text}
              <span className="marquee-separator">✦</span>
            </span>
          ))}
          {/* Duplicate for seamless scrolling */}
          {MARQUEE_TEXT.map((text, index) => (
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
