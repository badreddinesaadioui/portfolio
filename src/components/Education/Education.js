import React, { useState } from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import { IoMdSchool, IoMdBusiness } from "react-icons/io"; // Icons for education and experience
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';

function Education() {
  const [isEducation, setIsEducation] = useState(true); // State to toggle between education and experience

  return (
    <>
      <button onClick={() => setIsEducation(!isEducation)} style={{ margin: "20px 0", padding: "10px 20px", cursor: "pointer" }}>
        {isEducation ? "Show Experience" : "Show Education"}
      </button>
      <VerticalTimeline>
        {isEducation ? (
          <>
            {/* Education timeline elements */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2023 - present"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<IoMdSchool />}
            >
              <h3 className="vertical-timeline-element-title">ECL ECOLE CENTRALE DE LYON | Exchange Generalist Engineering Student</h3>
              <h4 className="vertical-timeline-element-subtitle">Lyon, France</h4>
              <p>
                Exchange engineering student at ÉCOLE CENTRALE de Lyon (Grande École) studying Computer Science, Finance and Economics, Marketing, Entrepreneurship and Astrophysics.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2022 - 2023"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<IoMdSchool />}
            >
              <h3 className="vertical-timeline-element-title">ECC CENTRALE CASABLANCA | System Engineering Student</h3>
              <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
              <p>
                Joined ÉCOLE CENTRALE CASABLANCA ECC, a French/Moroccan engineering school (Grande École), providing a broad-based education.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2020 - 2022"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<IoMdSchool />}
            >
              <h3 className="vertical-timeline-element-title">CPGE LYCEE MED V | MPSI-MP</h3>
              <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
              <p>
                A 2-year formation balanced between Mathematics, Physical Sciences, Computer Science, and Industrial Sciences.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2019 - 2020"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<IoMdSchool />}
            >
              <h3 className="vertical-timeline-element-title">LYCEE AZHAR ERRIAD 2 | High School Diploma</h3>
              <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
              <p>
                Science Mathématiques B (Mention Très Bien).
              </p>
            </VerticalTimelineElement>
          </>
        ) : (
          <>
            {/* Experience timeline elements */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June 2023 - July 2023"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<IoMdBusiness />}
            >
              <h3 className="vertical-timeline-element-title">AI Engineering Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">CFG Bank</h4>
              <p>
                6-week internship focusing on AI projects, including model development and data analysis.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="January 2023 - June 2023"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<IoMdBusiness />}
            >
              <h3 className="vertical-timeline-element-title">Consultant</h3>
              <h4 className="vertical-timeline-element-subtitle">JECC Junior Entreprise</h4>
              <p>
                6 months experience as a consultant, engaging in various projects with a focus on technology and business strategy.
              </p>
            </VerticalTimelineElement>
          </>
        )}
      </VerticalTimeline>
    </>
  );
}

export default Education;
