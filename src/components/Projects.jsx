import React, { useEffect, useState } from 'react';
import SectionHeading from "./Headings";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./projects.css";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

const Project = React.memo(({projectTitle}) => {
    const [projects, setProjects] = useState([]);

    useEffect(() =>{
        const api = "http://localhost:3434/project";

        const fetchProjects = async () =>{
            const response = await fetch(api ,{
                method: "GET",
                headers:{
                    "Content-Type":"application/json"
                }
            }); 

            const data = await response.json();
            setProjects(data);
        };
        fetchProjects();
    }, []);

  return (
    <main className="projects" id="projects">
      <SectionHeading sectionHeader={projectTitle} />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {
            projects.map((element, index) =>(
                <SwiperSlide>
                    <article key={index} className="proj-card" id="tattoo-website">
                        <div className="proj-screenshot">
                        <img src={import.meta.env.BASE_URL + element.projectImgPath}  loading="lazy" decoding="async" alt={element.projectTitle} className="proj-img" />
                        </div>
                        <div className="article-heading">
                        <h2>
                            {element.projectTitle}
                        </h2>
                        </div>
                        <p className="article-description">
                            - {element.projectDescription}
                            <br />
                            <span className="tech-tags" >
                            {element.projectTechUsed?.split(",").map((tech, i) => (
                              <span key={i} className="tech-tag">
                                {tech.trim()}
                              </span>
                            ))}
                            </span>
                        </p>
                        <div className="article-link">
                        Available on: 
                        <a href={element.projectLink} aria-label={element.projectLinkAriaLabel} target="_blank" className="highlighted" rel="noopener noreferrer">{element.projectLinkDisplay}</a>
                        </div>
                    </article>
                </SwiperSlide>
            ))
        }

      </Swiper>
    </main>
  );
});

export default Project;
