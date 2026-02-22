import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ThemeContext } from "./components/ThemeContext";
import Loader from "./components/Loader";
const UpdateProject = React.lazy(() => import("./admin/updateProject"));
const EditTech = React.lazy(() => import("./admin/editTech")) ;
const Navbar = React.lazy(() => import("./components/Navbar")) ;
const LandingPage = React.lazy(() => import("./components/LandingPage"));
const About = React.lazy(() => import("./components/About"));
const TechStack = React.lazy(() => import("./components/TechStack")) ;
const Project = React.lazy(() => import("./components/Projects"));
const Achievements = React.lazy(() => import("./components/Achievements"));
const Contact = React.lazy(() => import("./components/Contact"));
const AdminGuard = React.lazy(() => import("./admin/AdminGuard"));
const AdminLogin = React.lazy(() => import("./admin/adminLogin"));
const ChooseCRUD = React.lazy(() => import("./admin/ChooseCRUD"));
const AddTechStack = React.lazy(() => import("./admin/AddTechStack"));
const AddProject = React.lazy(() => import("./admin/AddProject"));
const EditProject = React.lazy(() => import("./admin/EditProject"));
const EditTechStack = React.lazy(() => import("./admin/EditTechStack"));

function App() {
  const[theme, setTheme] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute( "theme",theme);
  }, [theme]);
  
  
  return (
    <div >
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Suspense fallback={<Loader />} >
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/about" element={<About aboutTitle={"<About/>"} />}/>
              <Route path="/techstack" element={<TechStack techTitle={"<Tech Stack/>"} />}/>
              <Route path="/projects" element={<Project projectTitle={"<Project/>"} />}/>
              <Route path="/achievements" element={<Achievements achivementTitle={"<Achievements/>"} />}/>
              <Route path="/contact" element={<Contact contactTitle={"<Contact/>"} />}/>
              <Route path="/admin/adminlogin" element={<AdminLogin />} />
              <Route path="/admin/choosecrud" element={<AdminGuard ><ChooseCRUD /></ AdminGuard> } />
              <Route path="/admin/addtech" element={<AdminGuard ><AddTechStack /></ AdminGuard>} />
              <Route path="/admin/addproject" element={<AdminGuard ><AddProject /></ AdminGuard>} />
              <Route path="/admin/edittech" element={<AdminGuard ><EditTechStack /></ AdminGuard>} />
              <Route path="/admin/edittech/:techid" element={<AdminGuard ><EditTech /></ AdminGuard>} />
              <Route path="/admin/editproject" element={<AdminGuard ><EditProject /></ AdminGuard>} />
              <Route path="/admin/updateproject/:projectid" element={<AdminGuard ><UpdateProject /></ AdminGuard>} />
            </Routes>
          </Suspense>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
