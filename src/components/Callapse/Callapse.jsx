import React, { useState } from "react";

import chevron from "../../assets/Dropdown.svg";

import "../../styles/Callapse.css";

export default function Callapse({ title, description }) {
  const [open, setOpen] = useState(false);

  const contentArray = []
	if (!Array.isArray(description)) {
		contentArray.push(description)
	} else {
		for (let i = 0; i < 9; i++) {
			contentArray.push(description[i])
		}
	}

  return (
    /* Element permettant de créer les dropdown de la page d'acceuil et la page à propos */
    <div className="dropdown" id={`dropdown-${title}`}>
      <div className="dropdown-header">
        <div className="dropdown-title">{title}</div>
        <div
          className={`dropdown-chevron ${open}`}
          onClick={() => setOpen(!open)}
        >
          <img className="chevron-img" src={chevron} alt="Ouvrir cette description" />
        </div>
      </div>
      {open && <div className="dropdown-description">{contentArray.map((description, index) => (
						<div key={`${description}-${index}`}>{description}</div>
					))}</div>}
    </div>
  );
}
