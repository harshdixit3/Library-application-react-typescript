import { useEffect, useState } from "react";
import { Alert, ListGroup, Spinner } from "react-bootstrap";
import IGenre from "../../../Models/IGenre";
import { getGenreByLibrariesId } from "../../../services/IGenre";
import GenreListItem from "./GenreListItem/GenreListItem";

type Props = {
  id: string;
};

const Genrelist = ({ id }: Props) => {
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const helper = async () => {
      try {
        const genres = await getGenreByLibrariesId(id);
        setGenres(genres);
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
      <h1>List of Famous Genre in the Library</h1>
      <hr />
      <div className="text-center">
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!loading && error && <Alert variant="danger">{error.message}</Alert>}
      </div>
      {!loading && !error && (
        <ListGroup>
          {genres.map((genre) => (
            <GenreListItem genre={genre} key={id} />
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default Genrelist;
