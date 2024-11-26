import { faStar, faStarHalf, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

type Props = {
  size: "sm" | "md" | "lg";
  color: string;
  value: number;
  numRatings: number;
};

const Rating = ({ size, color, value, numRatings }: Props) => {
  const fullStars = Math.floor(value);
  const halfStars = value - fullStars >= 0.5 ? 1 : 0;
  const emptyStar = 5 - (fullStars - halfStars);

  return (
    <span>
     
     {Array(fullStars)
        .fill(1)
        .map((item) => (
          <FontAwesomeIcon icon={faStar} />
        ))}
         {Array(halfStars)
        .fill(1)
        .map((item) => (
          <FontAwesomeIcon icon={faStarHalfAlt} />
        ))}
         {Array(emptyStar)
        .fill(1)
        .map((item) => (
          <FontAwesomeIcon icon={faStarEmpty} />
        ))}
       ({value} ({numRatings}) rated) 
    </span>
  );
};

Rating.defaultProps = {
  color: "goldenrod",
};

export default Rating;
