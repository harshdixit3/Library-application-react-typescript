import { useEffect, useState } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { getLibraries } from "../../services/libraries";
import "./LibraryList.css";
import ILibrary from "../../Models/ILibrary";
import LibraryListItem from "./LibararyListItem/LibraryListItem";
import { library } from "@fortawesome/fontawesome-svg-core";

const LibraryList = () => {
  const [loading, setLoading] = useState(true);
  const [libraies, setLibraries] = useState<ILibrary[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const helper = async () => {
      try {
        const libraies = await getLibraries();
        setLibraries(libraies);
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
      <h1>List of Libraries</h1>
      <hr />
      <div className="text-center">
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!loading && error && <Alert variant="danger">{error.message}</Alert>}
        {!loading && !error && (
          <Row xs={1} lg={3}>
            {libraies.map((library) => (
              <Col className="my-3 d-flex">
                <LibraryListItem library={library} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
};

export default LibraryList;
