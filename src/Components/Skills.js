import { skills } from "../data/skillsData";

function Skills() {
  return (
    <section id="skills" className="container my-5">

      <h3 className="text-center mb-4">SKILLS</h3>

      <div className="row justify-content-center">

        {skills.map((skill, index) => (
          <div className="col-md-2 text-center mb-3" key={index}>
            <div className="card p-3 shadow">
              <iconify-icon
              icon={skill.icon}
              width={skill.w}
              height={skill.h}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
            ></iconify-icon>
            <br />
            <p>{skill.percent}%</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;