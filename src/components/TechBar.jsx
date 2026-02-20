import React from "react";
export default function TechBar({progressPercentage, barId, barWidth } ){
    return(
        <div className="bar-container"><div className="bars" id={barId} style = {{width : barWidth +"%" }} ><span className="percs">{progressPercentage}%</span></div></div>
    )
}