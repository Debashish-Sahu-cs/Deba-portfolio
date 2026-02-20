import React, { useEffect, useState } from 'react'
import "./addtech.css"
import TechBar from '../components/TechBar';
import {useNavigate, useParams} from "react-router-dom";
import OperationMessage from './OperationMessage';
function EditTech() {
    const [techElement , setTechElement] = useState({
        tech_img_path: "images/", tech_name: "", tech_value: 0, tech_category:""
    });

    const techId = useParams().techid;
    
    useEffect(() => {
        if(!techId) return;
        const apiUrl = `http://localhost:3434/techstack/${techId}`;
    
        const fetchTechStack = async () => {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        });
    
        const data = await response.json();
        setTechElement({tech_img_path: data[0].techImgPath, tech_name: data[0].techName, tech_value: data[0].techValue, tech_category: data[0].techCategory})
    
        };
        fetchTechStack();
    }, []);

    const [alertMessage , setAlertMessage] = useState("");

    const updateTechStack = () =>{
        if(!techId) return;

        if(techElement.tech_name.trim() === "" || techElement.tech_category.trim() === "" ||
        techElement.tech_img_path.trim() ==="" || techElement.tech_value.trim() ==="" ){
            alert("Fields can't be empty!");
            return;
        }
        if(techElement.tech_value > 100 || techElement.tech_value < 0){
            alert("Tech value not valid! should be in in range 0-100")
        }

        const apiUpdateTech = `http://localhost:3434/techstack/${techId}`;
        const updateTech = async () =>{
            const response = await fetch(apiUpdateTech ,{
                method: "PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    user_auth_token: sessionStorage["user_auth_token"],
                    tech_name: techElement.tech_name,
                    tech_category: techElement.tech_category,
                    tech_img_path: techElement.tech_img_path,
                    tech_value: techElement.tech_value
                })
            });
            if(response.status === 200){
                setAlertMessage("✔ Tech Stack Updated");
                setTimeout(() =>{
                    setAlertMessage("");
                }, 3000);
            }
        }
        updateTech();
    }

    const navigateTo = useNavigate();
  return (
    <main className="add-tech-section" >
        <OperationMessage alertMessage={alertMessage} style={{color : "rgb(27, 145, 27)"}}/>
        <div className="add-tech-inner">
            <div className="back-btn-wrapper">
                <button className="back-btn" type="button" aria-label="back button" onClick={() => navigateTo(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
            </div>
            <div className="tech-view-box">
                <div className="card">
                    <img
                        src={import.meta.env.BASE_URL + techElement.tech_img_path}
                        loading="lazy"
                        decoding="async"
                        alt={techElement.tech_name}
                        className="tech-icon"
                    />
                    <TechBar
                        progressPercentage={techElement.tech_value}
                        barId={techElement.tech_name}
                        barWidth = {techElement.tech_value}
                    />
                </div>
            </div>
            <div className="tech-add-form">
                <div className="fields">
                    <select className="tech-category-dropdown" name="tech-category" id="tech_category" aria-label="tech stack dropdown list" 
                    value={techElement.tech_category || ""}
                    onChange={(event) => setTechElement({tech_img_path: techElement.tech_img_path, tech_name: techElement.tech_name, tech_value: techElement.tech_value, tech_category:event.target.value})} >
                        <option value="" >Select a category</option>
                        <option value="Languages" >Languages</option>
                        <option value="Libraries & Frameworks" >Libraries & Frameworks</option>
                        <option value="Database" >Database</option>
                        <option value="Tools" >Tools</option>
                    </select>
                </div>
                <div className="fields">
                    <label htmlFor="tech-name">Tech Name</label>
                    <input name="tech-name" type="text" aria-label="Tech name" placeholder="tech name" 
                    onChange={(event) => setTechElement({tech_img_path: techElement.tech_img_path, tech_name: event.target.value, tech_value: techElement.tech_value, tech_category:techElement.tech_category})}
                    value={techElement.tech_name || ""} />
                </div>
                <div className="fields">
                    <label htmlFor="tech-value">Tech learned value</label>
                    <input name="value" type="number" aria-label="Tech learned value" placeholder="tech learned value" 
                    onChange={(event) => setTechElement({tech_img_path: techElement.tech_img_path, tech_name: techElement.tech_name, tech_value: event.target.value, tech_category:techElement.tech_category})}
                    value={techElement.tech_value || ""} />
                </div>
                <div className="fields">
                    <label htmlFor="tech-image-path">Tech image path </label>
                    <input name="tech-image-path" type="text" aria-label="Tech image path" placeholder="image/example.webp"
                    onChange={(event) => setTechElement({tech_img_path: event.target.value, tech_name: techElement.tech_name, tech_value: techElement.tech_value, tech_category:techElement.tech_category})}
                    value={techElement.tech_img_path || ""} />
                </div>
                
                <button className="add-tech-btn" type="button" aria-label="Add tech button" 
                onClick={() => updateTechStack()}>Update</button>

            </div>
        </div>
    </main>
  )
}

export default EditTech
