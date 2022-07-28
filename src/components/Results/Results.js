import React from "react";
import './Results.css'
import NameCard from "../NameCard/NameCard";

const Results = ({suggestedNames}) =>{
    const DisplayNames = suggestedNames.map((item,key) => {
        return <NameCard suggestedName={item} key={key}/>
    })

    return(
        <div className="results">
            {DisplayNames}
        </div>
    )
}

export default Results