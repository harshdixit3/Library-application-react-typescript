import { Card } from "react-bootstrap";
import Rating from "../../Common/Rating/Rating";
import ILibrary from "../../../Models/ILibrary";
import { NavLink } from "react-router-dom";

type Props = {
  library: ILibrary;
};

const baseUrl = process.env.REACT_APP_BASE_URL;

const LibraryListItem = ({ library }: Props) => {
  return (
    <>
      <Card key={library.id}>
        <Card.Img variant="top" src={`${baseUrl}${library.imageUrl}`} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <div style={{ textAlign: "left" }}>
              <div>{library.name}</div>

              <div className="text-xs">
                {/* <Rating rating={rating} /> */}
                <Rating
                  size="sm"
                  value={library.rating}
                  numRatings={library.noOfRatings}
                />
              </div>
            </div>
            <div>
              <NavLink
                to={`/libraries/${library.id}`}
                className="btn btn-primary btn-sm"
              >
                More
              </NavLink>
            </div>
          </Card.Title>
          <Card.Text style={{ textAlign: "left" }}>
            <span>
              {" "}
              <b>Address: </b>
            </span>
            {library.location}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default LibraryListItem;
