import "./choosecred.css";
import { Link } from 'react-router-dom';
function ChooseCRUD() {
  return (
    <main className="choose-section" >
        <div className="choose-inner">
            <h2>Choose what to do...</h2>
            <div className="btn-container-box">
                <div className="select-btn-container">
                    <Link to={"/admin/addtech"} className="curd-btn">Add Tech Stack</Link>
                    <Link to={"/admin/addproject"} className="curd-btn">Add Project</Link>
                    <Link to={"/admin/edittech"} className="curd-btn">Edit Tech Stack</Link>
                    <Link to={"/admin/editproject"} className="curd-btn">Edit Project</Link>
                </div>
            </div>
        </div>
    </main>
  )
}

export default ChooseCRUD
