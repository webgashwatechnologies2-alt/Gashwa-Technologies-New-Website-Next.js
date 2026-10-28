import Link from "next/link";
import styles from "./WorkingProcess.module.css";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We analyze your business needs, identify challenges, and craft a strategic roadmap for the best IT solutions.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Our expert team designs, develops, and integrates cutting-edge technology tailored to your goals.",
  },
  {
    number: "03",
    title: "Optimization & Support",
    description:
      "We ensure seamless performance with continuous improvements, maintenance, and dedicated support.",
  },
];

export default function WorkingProcess() {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      {/* Ambient background */}
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />

      {/* Decorative waves */}
      <div className={styles.waveField} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Small decorative circle */}
      <div className={styles.decorCircle} aria-hidden="true">
        <span />
      </div>

      <div className={styles.container}>
        <div className={styles.layout}>
          {/* =========================================
              LEFT CONTENT
          ========================================== */}
          <div className={styles.intro}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>Working Process</span>
              <span className={styles.eyebrowLine} />
            </div>

            <h2 id="process-title" className={styles.title}>
              How We&apos;ve{" "}
              <span className={styles.highlight}>Empowered</span>
              <br />

              <span className={styles.highlight}>
                Businesses with Innovative
              </span>

              <br />

              Tech Solutions
            </h2>

            <p className={styles.description}>
              From personalized solutions to expert execution, we prioritize
              quality, reliability, and customer satisfaction.
            </p>

            <Link href="/contact" className={styles.cta}>
              <span>Get In Touch</span>

              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          {/* =========================================
              RIGHT PROCESS
          ========================================== */}
          <div className={styles.process}>
            <div className={styles.timeline} aria-hidden="true" />

            {processSteps.map((step, index) => (
              <article
                className={`${styles.step} ${
                  index === 1 ? styles.stepMiddle : ""
                }`}
                key={step.number}
              >
                {/* Large background number */}
                <span className={styles.stepNumber} aria-hidden="true">
                  {step.number}
                </span>

                {/* Timeline dot */}
                <span className={styles.stepDot} aria-hidden="true" />

                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom decorative icon */}
        <div className={styles.bottomDecoration} aria-hidden="true">
          <div className={styles.signalIcon}>
            <span />
            <span />
            <span />
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}