import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { getLibraries } from "../../services/libraries";

import { NavLink } from "react-router-dom";

import "./LibraryList.css";
import Rating from "../Common/Rating/Rating";

const baseUrl = process.env.REACT_APP_BASE_URL;

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
          <Row xs={1} lg={3}>
            {libraies.map(
              ({ id, name, rating, noOfRatings, imageUrl, location }) => (
                <Col className="my-3 d-flex">
                  <Card key={id}>
                    <Card.Img variant="top" src={`${baseUrl}${imageUrl}`} />
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between">
                        <div style={{textAlign: "left"}}>
                          <div>{name}</div>

                          <div className="text-xs">
                            {/* <Rating rating={rating} /> */}
                            <Rating 
                             size="sm"
                             value={rating}
                             numRatings={noOfRatings}
                            />
                            {rating} ({noOfRatings} rated)
                          </div>
                        </div>
                        <div>
                          <NavLink
                            to={`/libraris/${id}`}
                            className="btn btn-primary btn-sm"
                          >
                            More
                          </NavLink>
                        </div>
                      </Card.Title>
                      <Card.Text style={{textAlign: "left"}}>
                        <span>
                          {" "}
                          <b>Address: </b>
                        </span>
                        {location}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
          </Row>
        )}
      </div>
    </>
  );
};

export default LibraryList;
