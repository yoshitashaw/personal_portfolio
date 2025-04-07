import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        {/* Languages Section */}
        <div className="experience__category">
          <h3>LANGUAGES</h3>
          <div className="experience__content">
            {["C++", "SQL (MySQL)", "JavaScript", "HTML/CSS", "JAVA (Beginner)", "Python (Beginner)"].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Frameworks Section */}
        <div className="experience__category">
          <h3>FRAMEWORKS & LIBRARIES</h3>
          <div className="experience__content">
            {[
              "React.js", "Redux Toolkit", "Node.js", "Express.js",
              "Material-UI", "Bootstrap", "Tailwind CSS", "MongoDB", "Streamlit"
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="experience__category">
          <h3>DEVELOPER TOOLS</h3>
          <div className="experience__content">
            {[
              "Git", "GitHub", "VS Code", "Jupyter Notebook", "Firebase",
              "RESTful API", "POSTMAN", "Agile Methodology", "Azure ML Studio"
            ].map((tool) => (
              <article className="experience__details" key={tool}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{tool}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


// import React from "react";
// import { BsFillPatchCheckFill } from "react-icons/bs";
// import "./experience.css";

// const Experience = () => {
//   return (
//     <section id="experience">
//       <h5>The Skills I Have</h5>
//       <h2>Skills</h2>
//       <div className="container experience__container">
//         <div className="experience__frontend">
//           <h3>Full-stack Development</h3>
//           <div className="experience__content">
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>HTML</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>CSS</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Bootstrap</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Tailwind CSS</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>JavaScript</h4>
//             </article>

//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>ReactJS, Redux-toolkit</h4>
//             </article>
            
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Firebase</h4>
//             </article>
           
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>NodeJS</h4>
//             </article>
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Express</h4>
//             </article>
            
//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>GitHub</h4>
//             </article>

//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>C++</h4>
//             </article>

//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4> MySQL</h4>
//             </article>

//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4> Data Structures</h4>
//             </article>

//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4> Java-beginners </h4>
//             </article>

//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Python</h4>
//             </article>

//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Streamlit</h4>
//             </article>

//             <article className="experience__details">
//               <BsFillPatchCheckFill className="experience__details-icon" />
//               <h4>Azure ML Studio</h4>
//             </article>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
