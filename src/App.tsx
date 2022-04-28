import React, { useEffect, useState } from 'react';
import Nav from './Components/Nav';
import Container from "react-bootstrap/Container"
import SearchBar from './Components/SearchBar';
import axios from "axios";
import Spinner from "react-bootstrap/Spinner"
import { IMovie, IAlert } from './Interfaces/interfaces';
import MovieContainer from './Components/MovieContainer';
import { Variant } from "react-bootstrap/types"

const apiURI = "http://www.omdbapi.com/"

function App() {

  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<IAlert>({ text: "", variant: "primary" });
  const [movies, setMovies] = useState<Array<IMovie>>([]);

  const handleAlert = (text: string, variant?: Variant) => {
    setAlert({ text, variant: variant ? variant : "primary" });
    setLoading(false);
  }

  const handleSearch = () => {
    if(title && !loading) {
      handleAlert("");
      setLoading(true);
      axios.get(`${apiURI}?apikey=${process.env.REACT_APP_OMDB_APIKEY}&s=${title}`).then(res => {
        console.log(res);
        if(res.status !== 200) {
          handleAlert("An error has occured when fetching from omdb", "danger");
        } else {
          if(res.data.Response === "True") {
            setMovies(res.data.Search);
          } else {
            setMovies([]);
            handleAlert("No movies found");
          }

          setLoading(false);
        }
      }).catch(() => {
        handleAlert("An error has occured when fetching from omdb", "danger");
      })
    }
  }

  return (
    <div>
      <Nav />
      <Container className="py-5">
        <SearchBar title={title} setTitle={setTitle} handleSearch={handleSearch}/>
          {
            loading ?
            <div className="d-flex justify-content-center">
              <Spinner animation="border"/>
            </div> 
            :
            <MovieContainer alert={alert} movies={movies} />
          }
      </Container>
    </div>
  );
}

export default App;
