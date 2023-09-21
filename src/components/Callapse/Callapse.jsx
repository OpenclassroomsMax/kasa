
import React, { useState } from "react";

import chevron from "../../assets/Dropdown.svg"

import "../../styles/Callapse.css"


export default function Callapse({title, description}) {

    const [open, setOpen] = useState(false);

	return (
        <div className="dropdown" id={`dropdown-${title}`}>
            <div className="dropdown-header">
                <div className="dropdown-title">{title}</div>
                <div className={`dropdown-chevron ${open}`} onClick={() => setOpen(!open)}>
                    <img src={chevron} alt="Ouvrir cette description" />
                </div>
            </div>
            {
                open && <div className="dropdown-description">{description}</div>
            }
        </div>
		
		
	);
}

