import { IMovie, IAlert } from '../Interfaces/interfaces'
import Alert from "react-bootstrap/Alert"
import MovieCard from './MovieCard'
import styled from "styled-components";

const MovieContainer = ({ alert, movies } : {alert: IAlert, movies: IMovie[]}) => {
  
  return (
    <div>
      {
        alert.text &&
        <Alert variant={alert.variant} className="pb-3">
          {alert.text}
        </Alert>
      }

      {movies.length > 0 && 
        <MovieContainerWrapper>
          {movies.map((movie, index) => {
              return <MovieCard key={index} {...movie} />
            })}
        </MovieContainerWrapper>
      }
    </div>
  )
}

const MovieContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
`

export default MovieContainer