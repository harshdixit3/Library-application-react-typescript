import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { getLibraries } from "../../services/libraries";

import { NavLink } from "react-router-dom";

const LibraryList = () => {
  const [loading, setLoading] = useState(true);
  const [libraies, setLibraries] = useState([]);

  useEffect(() => {
    const helper = async () => {
      const libraies = await getLibraries();
      setLibraries(libraies);
      setLoading(false);
    };
    helper();
  }, []);
  return (
    <>
      <h1>List of Libraries</h1>
      <hr />
      <div className="text-center">
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!loading && (
          <>
            {libraies.map(({id ,name , rating ,noOfRatings ,location}) => (
              <Card key={id}>
                <Card.Img variant="top" src={``} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div>
                      {name}
                      <div className="text-xs">
                        {/* <Rating rating={rating} /> */}
                        {rating} ({noOfRatings} rated)
                      </div>
                    </div>
                    <div>
                      <NavLink
                        to={`/libraries/${id}`}
                        className="btn btn-primary btn-sm"
                      >
                        More
                      </NavLink>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <span>
                      {" "}
                      <b>Address: </b>
                    </span>
                    {location}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default LibraryList;
