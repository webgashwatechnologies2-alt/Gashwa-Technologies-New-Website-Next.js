"use client";

import { useRef, useState, type ChangeEvent } from "react";
import "./CareerSection.css";


const jobOpenings = [
  {
    vacancy: "GRAPHIC DESIGNER",
    experience: "1-2 Years",
    positions: 2,
    skills:
      "Strong knowledge of Corel Draw, Photoshop and Adobe Illustrator",
  },
  {
    vacancy: "WEB DEVELOPER",
    experience: "1-2 Years",
    positions: 2,
    skills:
      "HTML, XHTML, CSS, JavaScript, Back-End Development, Web APIs, PHP",
  },
  {
    vacancy: "WEBSITE DESIGNER",
    experience: "0-2 Years",
    positions: 3,
    skills:
      "Strong knowledge of JavaScript, HTML, XHTML, CSS, XML, Photoshop, Corel Draw",
  },
  {
    vacancy: "PHP DEVELOPER",
    experience: "1-2 Years",
    positions: 2,
    skills:
      "Excellent command on Core PHP and MySQL using MVC Architecture. Strong knowledge of JavaScript, HTML, XHTML, CSS, XML. Good object-oriented and database programming skills",
  },
  {
    vacancy: "TELECALLER",
    experience: "0-2 Years",
    positions: 4,
    skills:
      "Excellent Communication, Active Listening, Empathy and Patience, Persuasion and Negotiation, Time Management, Adaptability",
  },
  {
    vacancy: "DIGITAL MARKETING EXECUTIVE",
    experience: "0-2 Years",
    positions: 2,
    skills:
      "Social media marketing, SEO, Content creation and copywriting, Google Analytics, Email marketing, Digital advertising, Marketing automation",
  },
  {
    vacancy: "SEO EXECUTIVE",
    experience: "0-2 Years",
    positions: 2,
    skills:
      "Basic understanding of SEO, Keyword research, On-page optimization, Content creation and optimization, Link building, Technical SEO, Analytics and reporting, Analytical and problem-solving skills",
  },
  {
    vacancy: "PPC EXECUTIVE",
    experience: "0-2 Years",
    positions: 2,
    skills:
      "Understanding of Digital Marketing, Knowledge of PPC Platforms, Keyword Research, Ad Copywriting, Landing Page Optimization, Analytics and Data Interpretation, Budget Management, Ad Testing and Optimization",
  },
  {
    vacancy: "BUSINESS EXECUTIVE",
    experience: "0-2 Years",
    positions: 2,
    skills:
      "Communication Skills, Problem-Solving Skills, Analytical Skills, Time Management, Teamwork and Collaboration, Adaptability, Business and Financial Acumen, Leadership Potential, Professionalism",
  },
];

export default function CareerSection() {

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [error, setError] = useState("");

  const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const openFilePicker = () => fileInputRef.current?.click();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      setError("only PDF, DOC ya DOCX file upload.");
      setResume(null);
      return;
    }
    if (file.size > MAX_SIZE) {
      setError("File size only 5 MB or less is allowed.");
      setResume(null);
      return;
    }

    setError("");
    setResume(file);
  };


  return (
    <section className="career-section py-5 py-lg-6">
      <div className="container">
        {/* Intro Section */}
        <div className="row align-items-center g-4 g-lg-5 mb-5">
          <div className="col-lg-6">
            <div className="career-intro">
              <span className="career-eyebrow d-inline-flex align-items-center gap-2 mb-3">
                <span className="career-eyebrow-line" />
                CAREER WITH US
              </span>

              <h2 className="career-title mb-4">
                Build Your Career
                <span>With Gashwa Technologies.</span>
              </h2>

              <p className="career-text mb-3">
                If you are searching for Web Designing Jobs in Himachal. We
                keep our staff. And we keep our clients. And we think that
                those two facts might be related.
              </p>

              <p className="career-text mb-3">
                A lot of our staff have been with us since the company started
                and in that time we've never lost a client. Consistency of
                quality and approach is maintained because Webheads love what
                they do and our clients seem to love the results.
              </p>

              <p className="career-text mb-0">
                We are an equal opportunities employer and we endeavour to
                practise our business with integrity, respecting the dignity,
                different cultures and rights of individuals everywhere we
                operate.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="career-image-wrapper">
              <img
                src="https://gashwatechnologies.com/img/gashwqaimgsjob.jpg"
                alt="Career opportunities at Gashwa Technologies"
                className="img-fluid w-100 career-image"
              />
              <div className="career-image-overlay">
                <span>GASHWA TECHNOLOGIES</span>
                <strong>Grow With Us</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Second Content */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="career-note text-center">
              <p className="mb-0">
                If you are searching for Web Designing Jobs in Shimla. We keep
                our staff. And we keep our clients. And we think that those two
                facts might be related. A lot of our staff have been with us
                since the company started and in that time we've never lost a
                client.
              </p>
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="career-heading text-center mb-4 mb-lg-5">
          <span className="career-eyebrow d-inline-flex align-items-center gap-2 mb-3">
            <span className="career-eyebrow-line" />
            OPPORTUNITIES
          </span>

          <h2 className="career-section-title mb-0">
            Current Job <span>Openings</span>
          </h2>
        </div>

        <div className="table-responsive career-table-wrapper mb-5">
          <table className="table align-middle career-table mb-0">
            <thead>
              <tr>
                <th>JOB VACANCY</th>
                <th>EXPERIENCE</th>
                <th>NO. OF POSITIONS</th>
                <th>DESIRED SKILLS</th>
              </tr>
            </thead>

            <tbody>
              {jobOpenings.map((job) => (
                <tr key={job.vacancy}>
                  <td>
                    <strong>{job.vacancy}</strong>
                  </td>
                  <td>{job.experience}</td>
                  <td>
                    <span className="position-badge">{job.positions}</span>
                  </td>
                  <td>{job.skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Apply Section */}
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="apply-card">
              <div className="row align-items-center g-4">
                <div className="col-lg-5">
                  <img
                    src="https://gashwatechnologies.com/images/Apply_for_job_in_shimla_Himachal.png"
                    alt="Apply for a job in Shimla Himachal"
                    className="img-fluid w-100 apply-image"
                  />
                </div>

                <div className="col-lg-7">
                  <div className="apply-content">
                    <span className="career-eyebrow d-inline-flex align-items-center gap-2 mb-3">
                      <span className="career-eyebrow-line" />
                      JOIN OUR TEAM
                    </span>

                    <h2 className="apply-title mb-3">
                      Apply For <span>A Job</span>
                    </h2>

                    <p className="career-text mb-4">
                      Ready to take the next step in your career? Share your
                      profile with us and become part of the Gashwa Technologies
                      team.
                    </p>

                    <div className="row g-3">
                      <div className="col-sm-6">
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          hidden
                        />
                        <button
                          type="button"
                          className="upload-box w-100 text-start"
                          onClick={openFilePicker}
                        >
                          <span className="upload-icon">↑</span>
                          <div>
                            <strong>{resume ? "CHANGE RESUME" : "UPLOAD RESUME"}</strong>
                            <small>
                              {resume ? resume.name : "PDF, DOC or DOCX"}
                            </small>
                          </div>
                        </button>
                        {error && <p className="upload-error">{error}</p>}
                      </div>

                      <div className="col-sm-6">
                        <a
                          href="/contact"
                          className="apply-button w-100 h-100 d-flex align-items-center justify-content-center"
                        >
                          Apply Now
                          <span>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}