import React, { useEffect, useState } from "react";
import "./edittechstack.css";
import { useNavigate } from "react-router-dom";
import OperationMessage from "./OperationMessage";

const EditTechStack = React.memo(() => {

  const [techstack, setTechstack] = useState([]);

  useEffect(() => {
      const apiUrl = "http://localhost:3434/techstack";
  
      const fetchTechStack = async () => {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
        setTechstack(data);
  
      };
      fetchTechStack();
    }, []);

  const [deleteStatusMessage , setDeleteStatusMessage] = useState("");

  const deleteTechStack = (techid, techname) =>{
    const apiDeleteTech = `http://localhost:3434/techstack/${techid}`;
    if(!confirm(`DO you want to delete ${techname} tech?`)) return;
    const deleteTech = async () =>{
      const response = await fetch(apiDeleteTech , {
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
    <main className="tech-table-wrapper">
      <OperationMessage alertMessage={deleteStatusMessage} style={deleteMessageColor} />
      <div className="back-btn-wrapper">
          <button className="back-btn" type="button" aria-label="back button" onClick={() => navigateTo(-1)}>
              <i className="fa-solid fa-arrow-left"></i>
          </button>
      </div>
      <div className="tech-table-container">
        <table className="tech-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Category</th>
              <th>Name</th>
              <th>Level</th>
              <th className="actions-col">Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {techstack?.map((tech) => (
              <tr key={tech.techId} aria-label={tech.techName} >
                <td>
                  <img
                    src={ import.meta.env.BASE_URL + tech.techImgPath}
                    alt={tech.techName}
                    aria-label={tech.techName}
                    className="tech-img"
                  />
                </td>

                <td>{tech.techCategory}</td>

                <td>{tech.techName}</td>

                <td>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${tech.techValue}%` }}
                    />
                  </div>
                </td>

                <td className="actions">
                  <button className="btn-edit" type="button" aria-label="Edit button"
                    onClick={() => navigateTo(`/admin/edittech/${tech.techId}`)} >
                    Edit
                  </button>

                  <button className="btn-delete" type="button" aria-label="Delete button"
                    onClick={() => deleteTechStack(tech.techId, tech.techName)} >
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
});

export default EditTechStack;
