import React, { useState } from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdSchool, IoMdBusiness } from "react-icons/io"; // Import icons for education and experience

function Education() {
  // State to toggle between education and experience
  const [isEducation, setIsEducation] = useState(true);

  // Function to toggle the view
  const toggleTimeline = () => {
    setIsEducation(!isEducation);
  };

  return (
    <>
      <button onClick={toggleTimeline} style={{ margin: "20px 0", padding: "10px 20px" }}>
        {isEducation ? "Show Experience" : "Show Education"}
      </button>
      {isEducation ? (
        <VerticalTimeline>
          {/* Your existing education VerticalTimelineElement components */}
        </VerticalTimeline>
      ) : (
        <VerticalTimeline>
          {/* Experience timeline elements */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="June 2023 - July 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<IoMdBusiness />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">CFG Bank</h4>
            <p>
              6-week internship focusing on AI projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="January 2023 - June 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<IoMdBusiness />}
          >
            <h3 className="vertical-timeline-element-title">Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">JECC Junior Entreprise</h4>
            <p>
              6 months experience as a consultant, engaging in various projects.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      )}
    </>
  );
}

export default Education;

