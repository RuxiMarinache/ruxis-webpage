import React from "react";
import "./Skills.css";

import SkillBar from "react-skillbars";

const skills1 = [
    { type: "Illustrator", level: 95 },
    { type: "Photoshop", level: 85 },
    { type: "HTML", level: 85 },
    { type: "CSS", level: 75 },
    { type: "Figma", level: 90 },
    { type: "C++", level: 85 },
    { type: "React", level: 25 },
    { type: "JavaScript", level: 25 }
];

const skills2 = [
    { type: "Teamwork", level: 90 },
    { type: "Management", level: 80 },
    { type: "Creativity", level: 95 },
    { type: "Leadership", level: 90 },
    { type: "Positivity", level: 90 },
    { type: "Flexibility", level: 85 },
    { type: "Storytelling", level: 75 },
    { type: "Communicative", level: 85 }
];

const colors = {
    bar: "#F4DF71",
    title: {
        text: "#FBFBFB",
        background: "#003459"
    }
};

export default function Skills() {
    return (
        <div className="skill-container">
            <div className="skillbars-1">
                <h1 className="skills">Hard Skills:</h1>
                <div className="skillbar">
                    <SkillBar skills={skills1} colors={colors} />
                </div>
            </div>

            <div className="skillbars-2">
                <h1 className="skills">Soft Skills:</h1>
                <div className="skillbar">
                    <SkillBar skills={skills2} colors={colors} />
                </div>
            </div>
        </div>
    );
}
