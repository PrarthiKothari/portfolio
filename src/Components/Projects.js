import projects from "../data/projects";

function Project() {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">PROJECTS</h3>
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-3 d-flex" key={project.id}>
            <div className="card shadow-lg w-100 d-flex flex-column">

              <div className="ratio ratio-16x9">
                <img
                  src={project.image}
                  className="card-img-top object-fit-cover img-fluid"
                  alt={project.title}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>

                <p className="card-text flex-grow-1">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;