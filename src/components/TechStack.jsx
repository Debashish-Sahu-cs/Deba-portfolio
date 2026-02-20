import React, { useEffect, useState } from "react";
import SectionHeading from "./Headings";
import TechBar from "./TechBar";
import "./techstack.css";
const TechStack = React.memo(({ techTitle }) => {
  const [techLanguaes, setTechLanguages] = useState([]);
  const [techLibNFrames, setTechLibNFrames] = useState([]);
  const [techDbs, setTechDbs] = useState([]);
  const [techTools, setTechTools] = useState([]);
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
      data.map((ele, ind) =>{
        if(ele.techCategory === "Languages") setTechLanguages((prev) => [...prev, ele]);
        else if(ele.techCategory === "Libraries & Frameworks") setTechLibNFrames((prev) => [...prev, ele]);
        else if(ele.techCategory === "Database") setTechDbs((prev) => [...prev, ele]);
        else if(ele.techCategory === "Tools") setTechTools((prev) => [...prev, ele]);
      });

    };
    fetchTechStack();
  }, []);

  return (
    <main className="tech-section" id="tech">
      <section className="tech-inner">
        <SectionHeading sectionHeader={techTitle} />
        <h3>
          Transforming ideas into solutions with this stack of powerful
          technologies.
        </h3>
       <div className="tech-grid">
           <div className="tech-col" data-col="0">
            <div className="col-title">
              <u>Languages</u>
            </div>
            <div className="carousel">
              <div className="viewport">
                {
                  [0,1,2].map(occure => 
                    <div key={occure} className="track pos" aria-label={occure!==0} >
                      {techLanguaes.map((element, index) =>
                        <div key={index+occure} className="card">
                          <img
                            src={import.meta.env.BASE_URL + element.techImgPath}
                            loading="lazy"
                            decoding="async"
                            alt={element.techName}
                            className="tech-icon"
                          />
                          <TechBar
                            progressPercentage={element.techValue}
                            barId={element.techName}
                            barWidth = {element.techValue}
                          />
                        </div>
                      )}
                  </div>
                  )
                }
              </div>
            </div>
          </div>

          <div className="tech-col" data-col="1">
            <div className="col-title">
              <u>Libraries & Frameworks</u>
            </div>
            <div className="carousel">
              <div className="viewport">
                {
                  [0,1,2].map(occure => 
                    <div key={occure} className="track neg" aria-label={occure!==0} >
                      {techLibNFrames.map((element, index) =>
                        <div key={index+occure} className="card">
                          <img
                            src={import.meta.env.BASE_URL + element.techImgPath}
                            loading="lazy"
                            decoding="async"
                            alt={element.techName}
                            className="tech-icon"
                          />
                          <TechBar
                            progressPercentage={element.techValue}
                            barId={element.techName}
                            barWidth = {element.techValue}
                          />
                        </div>
                      )}
                  </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className="tech-col" data-col="2">
            <div className="col-title">
              <u>Database</u>
            </div>
            <div className="carousel">
              <div className="viewport">
                {
                  [0,1,2].map(occure => 
                    <div key={occure} className="track pos" aria-label={occure!==0} >
                      {techDbs.map((element, index) =>
                        <div key={index+occure} className="card">
                          <img
                            src={import.meta.env.BASE_URL + element.techImgPath}
                            loading="lazy"
                            decoding="async"
                            alt={element.techName}
                            className="tech-icon"
                          />
                          <TechBar
                            progressPercentage={element.techValue}
                            barId={element.techName}
                            barWidth = {element.techValue}
                          />
                        </div>
                      )}
                  </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className="tech-col" data-col="3">
            <div className="col-title">
              <u>Tools</u>
            </div>
            <div className="carousel">
              <div className="viewport">
                {
                  [0,1,2].map(occure => 
                    <div key={occure} className="track neg" aria-label={occure!==0} >
                      {techTools.map((element, index) =>
                        <div key={index+occure} className="card">
                          <img
                            src={import.meta.env.BASE_URL + element.techImgPath}
                            loading="lazy"
                            decoding="async"
                            alt={element.techName}
                            className="tech-icon"
                          />
                          <TechBar
                            progressPercentage={element.techValue}
                            barId={element.techName}
                            barWidth = {element.techValue}
                          />
                        </div>
                      )}
                  </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});

export default TechStack;