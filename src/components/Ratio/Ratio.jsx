import fullstar from "../../assets/FullStar.svg";

import emptystar from "../../assets/EmptyStar.svg";

import "../../styles/Ratio.css";

export default function Ratio({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    /* affichage conditionnel des étoiles de score, pleine selon le score passé en props */
    <div className="rate-comp">
      {stars.map((level) =>
        rating >= level ? (
          <img
            key={level.toString()}
            className="star"
            src={fullstar}
            alt="rating star"
          />
        ) : (
          /* affichage conditionnel des étoiles de score, vide selon le score passé en props */
          <img
            key={level.toString()}
            className="star"
            src={emptystar}
            alt="rating star"
          />
        )
      )}
    </div>
  );
}
