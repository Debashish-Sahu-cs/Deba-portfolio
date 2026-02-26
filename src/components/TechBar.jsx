import React  from "react";
const TechBar = React.memo(({progressPercentage, barId, barWidth } ) =>{
    return(
        <div className="bar-container">
            <div className="bars" id={barId} style = {{width : barWidth +"%" }} aria-label={`Tech understating ${progressPercentage}%`} >
                <span className="percs">{progressPercentage}%</span>
            </div>
        </div>
    )
});
export default TechBar;