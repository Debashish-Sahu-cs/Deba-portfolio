import { useEffect , useState } from "react";
import "./editproject.css";
import { useNavigate } from "react-router-dom";
import OperationMessage from "./OperationMessage";

function EditProject(){
  const [projectData, setProject] = useState([{
    projectImgPath: "images/", projectTitle: "", projectDescription: "", 
    projectTechUsed: "", projectLink: "", projectLinkAriaLabel: "", projectLinkDisplay: ""
  }]);
  
    useEffect(() => {
        const apiUrl = "http://localhost:3434/project";
    
        const fetchprojectData = async () => {
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const data = await response.json();
          setProject(data);
    
        };
        fetchprojectData();
      }, []);
  
  const [deleteStatusMessage , setDeleteStatusMessage] = useState("");
  const deleteProject = (projectid, projectname) =>{
    const apiDeleteProject = `http://localhost:3434/project/${projectid}`;
    if(!confirm(`DO you want to delete ${projectname} project?`)) return;
    const deleteTech = async () =>{
      const response = await fetch(apiDeleteProject , {
        method:"DELETE",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          user_auth_token : sessionStorage.getItem("user_auth_token")
        })
      });
      if(response.status === 200){
        setDeleteStatusMessage("✔ Tech stack deleted.");
        setTimeout(() =>{
          setDeleteStatusMessage("");
        }, 3000);
      }
    };

    deleteTech();
  }
  
      const navigateTo = useNavigate();
  
  const deleteMessageColor = {color :"rgb(187, 31, 31)"};

  return (
    <main className="project-table-wrapper">
      <OperationMessage alertMessage={deleteStatusMessage} style={deleteMessageColor} />
      <div className="back-btn-wrapper">
          <button className="back-btn" type="button" aria-label="back button" onClick={() => navigateTo(-1)}>
              <i className="fa-solid fa-arrow-left"></i>
          </button>
      </div>
      <div className="project-table-container">
        <table className="project-table">
          <thead>
            <tr>
              <th>Preview</th>
              <th>Title</th>
              <th>Description</th>
              <th>Tech Used</th>
              <th>Live Link</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {projectData?.map((project, index) => (
              <tr key={index} aria-label={project.projectTitle}>
                <td>
                  <img
                    src={ import.meta.env.BASE_URL + project.projectImgPath}
                    alt={project.projectTitle}
                    className="project-img"
                  />
                </td>

                <td className="project-title">
                  {project.projectTitle}
                </td>

                <td className="project-desc">
                  {project.projectDescription.slice(0,50)}...
                </td>

                <td>
                  <div className="tech-tags">
                    {project.projectTechUsed?.split(",").map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech.trim()}
                        </span>
                      ))}
                  </div>
                </td>

                <td>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={project.projectTitle + " link"}
                  >
                    View
                  </a>
                </td>

                <td className="actions">
                  <button
                    className="btn-edit" aria-label="Edit project button" type="button"
                    onClick={() => navigateTo(`/admin/updateproject/${project.projectId}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn-delete" aria-label="Delete project button" type="button"
                    onClick={() => deleteProject(project.projectId, project.projectTitle)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default EditProject;
