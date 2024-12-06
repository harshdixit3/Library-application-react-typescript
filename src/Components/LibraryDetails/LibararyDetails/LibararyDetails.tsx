import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ILibrary from "../../../Models/ILibrary";
import { Alert, Col, Row, Spinner, Image } from "react-bootstrap";
import { getLibrariesById } from "../../../services/libraries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Rating from "../../Common/Rating/Rating";
import Genrelist from "../GenreList/GenreList";

const baseUrl = process.env.REACT_APP_BASE_URL;

type Params = {
  id: string;
};

const LibararyDetails = () => {
  const { id } = useParams<Params>();

  const [loading, setLoading] = useState(true);
  const [library, setLibrary] = useState<ILibrary | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const helper = async () => {
      try {
        const library = await getLibrariesById(id as string);
        setLibrary(library);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    helper();
  }, []);
  return (
    <>
      <div>
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!loading && error && <Alert variant="danger">{error.message}</Alert>}
        {!loading && library && (
          <div>
            <h1>{library.name}</h1>
            <hr />
            <Row>
              <Col>
                <Image src={`${baseUrl}${library.imageUrl}`} fluid />
              </Col>
              <Col xs="12" lg="8" style={{ textAlign: "left" }}>
                <div>{library.description}</div>
                <Row className="my-3" xs="2">
                  <span>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="me-2"
                    ></FontAwesomeIcon>
                    {library.opens} - {library.closes}
                  </span>
                  <span>
                    <Rating
                      value={library.rating}
                      numRatings={library.noOfRatings}
                      size={"sm"}
                    />
                  </span>
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </div>
      <div className="mt-5">
        <Genrelist id={id as string} />
      </div>
    </>
  );
};

export default LibararyDetails;
