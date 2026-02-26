import React from "react";
import "./headings.css";
const SectionHeading = React.memo(({sectionHeader}) =>{
    return(
    <header className="section-header">
      <h2>{sectionHeader}</h2>
      <div className="section-header-underline"></div>
    </header>
    )
});
export default SectionHeading