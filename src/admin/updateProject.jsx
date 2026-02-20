import React, { useEffect, useState } from 'react'
import "./addproject.css";
import OperationMessage from './OperationMessage';
import { useNavigate, useParams } from 'react-router-dom';
function UpdateProject() {
  const [projectDetails, setProjectDetails ] = useState({
    projectImgPath: "images/", projectTitle: "", projectDescription: "", 
    projectTechUsed: "", projectLink: "", projectLinkAriaLabel: "", projectLinkDisplay: ""
  });
  const [alertMessage , setAlertMessage] = useState("");
  
  const projectid = useParams().projectid

  useEffect(() => {
          if(!projectid) return;
          const apiUrl = `http://localhost:3434/project/${projectid}`;
      
          const fetchProject = async () => {
          const response = await fetch(apiUrl, {
              method: "GET",
              headers: {
              "Content-Type": "application/json",
              },
          });
      
          const data = await response.json();
          console.log(data[0]);
          setProjectDetails({
            projectImgPath: data[0].projectImgPath, projectTitle: data[0].projectTitle, projectDescription: data[0].projectDescription, 
            projectTechUsed: data[0].projectTechUsed, projectLink: data[0].projectLink, projectLinkAriaLabel: data[0].projectLinkAriaLabel, 
            projectLinkDisplay: data[0].projectLinkDisplay
        });
      
          };
          fetchProject();
      }, []);

  const updateSpecificProject = () =>{
    const apiUpdateProject = `http://localhost:3434/project/${projectid}`;
    if(projectDetails.projectImgPath.trim() === "" || projectDetails.projectTechUsed.trim() === "" || projectDetails.projectTitle.trim() ==="" ||
       projectDetails.projectLink.trim() === "" || projectDetails.projectLinkAriaLabel.trim() === "" || projectDetails.projectLinkDisplay.trim() === ""){
        alert("Fields can't be empty!");
        return;
    }
    const updateProj = async () =>{
      const response = await fetch(apiUpdateProject, {
        method:"PUT",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
          user_auth_token: sessionStorage.getItem("user_auth_token"),
          projectImgPath: projectDetails.projectImgPath ,
          projectTitle: projectDetails.projectTitle ,
          projectDescription: projectDetails.projectDescription ,
          projectTechUsed: projectDetails.projectTechUsed ,
          projectLink: projectDetails.projectLink ,
          projectLinkAriaLabel: projectDetails.projectLinkAriaLabel , 
          projectLinkDisplay: projectDetails.projectLinkDisplay
        })
      });
      if(response.status === 200){
        setAlertMessage("✔ Project Updated");
        setTimeout(() =>{
            setAlertMessage("");
        }, 3000);
        
      }
      
    };
    updateProj();
  };

  const navigateTo = useNavigate();

  return (
    <main className="add-project-section">
      <OperationMessage alertMessage={alertMessage} style={{color :"rgb(27, 145, 27)"}} />
      <div className="add-project-inner">
        <div className="project-view">
        <div className="back-btn-wrapper">
        <button className="back-btn" type="button" aria-label="back button" onClick={() => navigateTo(-1)}>
            <i className="fa-solid fa-arrow-left"></i>
        </button>
        </div>
          <article className="proj-card">
              <div className="proj-screenshot">
                <img src={import.meta.env.BASE_URL + projectDetails.projectImgPath}  loading="lazy" decoding="async" alt={projectDetails.projectTitle} className="proj-img" />
              </div>
              <div className="article-heading">
              <h2>
                  <input type="text" name="project-img-path" id="project-img-path" placeholder="images/example.webp" 
                  value={projectDetails.projectImgPath}  
                  onChange={(event) =>setProjectDetails({
                    projectImgPath: event.target.value , projectTitle: projectDetails.projectTitle, projectDescription: projectDetails.projectDescription, 
                    projectTechUsed: projectDetails.projectTechUsed, projectLink: projectDetails.projectLink, projectLinkAriaLabel: projectDetails.projectLinkAriaLabel, 
                    projectLinkDisplay: projectDetails.projectLinkDisplay
                  })} aria-label="project image input box" />
                  <input type="text" name="project-title" id="project-title" placeholder="project title" 
                  value={projectDetails.projectTitle || ""} 
                  onChange={(event) =>setProjectDetails({
                    projectImgPath: projectDetails.projectImgPath , projectTitle: event.target.value, projectDescription: projectDetails.projectDescription, 
                    projectTechUsed: projectDetails.projectTechUsed, projectLink: projectDetails.projectLink, projectLinkAriaLabel: projectDetails.projectLinkAriaLabel, 
                    projectLinkDisplay: projectDetails.projectLinkDisplay
                  })}  aria-label="project title input box" />
              </h2>
              </div>
              <p className="article-description">
                  Project description: <textarea rows={3} name="project-desription" id="project-desription" placeholder="project description" 
                  value={projectDetails.projectDescription || ""} 
                  onChange={(event) =>setProjectDetails({
                    projectImgPath: projectDetails.projectImgPath , projectTitle: projectDetails.projectTitle, projectDescription: event.target.value, 
                    projectTechUsed: projectDetails.projectTechUsed, projectLink: projectDetails.projectLink, projectLinkAriaLabel: projectDetails.projectLinkAriaLabel, 
                    projectLinkDisplay: projectDetails.projectLinkDisplay
                  })} aria-label="project description input box" />
                  <br />
                  <span className="highlighted">Tech used:</span> 
                  <input type="text" name="tech-used" id="tech-used" placeholder="tech used" 
                  value={projectDetails.projectTechUsed || ""} 
                  onChange={(event) =>setProjectDetails({
                    projectImgPath: projectDetails.projectImgPath , projectTitle: projectDetails.projectTitle, projectDescription: projectDetails.projectDescription, 
                    projectTechUsed: event.target.value, projectLink: projectDetails.projectLink, projectLinkAriaLabel: projectDetails.projectLinkAriaLabel, 
                    projectLinkDisplay: projectDetails.projectLinkDisplay
                  })} aria-label="project tech used input box" />
              </p>
              <div className="article-link">
              Available on: 
              <input type="text" name="project-link" id="project-link" placeholder="http://example.com" 
              value={projectDetails.projectLink || ""} 
              onChange={(event) =>setProjectDetails({
                    projectImgPath: projectDetails.projectImgPath , projectTitle: projectDetails.projectTitle, projectDescription: projectDetails.projectDescription, 
                    projectTechUsed: projectDetails.projectTechUsed, projectLink: event.target.value, projectLinkAriaLabel: projectDetails.projectLinkAriaLabel, 
                    projectLinkDisplay: projectDetails.projectLinkDisplay
              })} aria-label="project link input box" />
              <br />
              link to displaye: 
              <input type="text" name="project-display-link" id="project-display-link" placeholder="link to display in card"
              value={projectDetails.projectLinkDisplay || ""}
              onChange={(event) =>setProjectDetails({
                    projectImgPath: projectDetails.projectImgPath , projectTitle: projectDetails.projectTitle, projectDescription: projectDetails.projectDescription, 
                    projectTechUsed: projectDetails.projectTechUsed, projectLink: projectDetails.projectLink, projectLinkAriaLabel: projectDetails.projectLinkAriaLabel, 
                    projectLinkDisplay: event.target.value
              })} aria-label="project link to display input box" />
              <br />
              project aria label: <input type="text" name="project-link-aria-label" id="project-link-aria-label"  placeholder="label to the link" 
              value={projectDetails.projectLinkAriaLabel || ""}
              onChange={(event) =>setProjectDetails({
                    projectImgPath: projectDetails.projectImgPath , projectTitle: projectDetails.projectTitle, projectDescription: projectDetails.projectDescription, 
                    projectTechUsed: projectDetails.projectTechUsed, projectLink: projectDetails.projectLink, projectLinkAriaLabel: event.target.value, 
                    projectLinkDisplay: projectDetails.projectLinkDisplay
              })}  aria-label="project link label input box" />
              </div>
          </article>
          <div className="btn-wrapper">
            <button className="add-project-btn" type="button" aria-label="Add project button"  
            onClick={() => updateSpecificProject()} >Update project</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default UpdateProject
