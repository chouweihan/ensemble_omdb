import React, { useState } from 'react';
import { IMovie } from '../Interfaces/interfaces';
import styled from "styled-components";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const MovieCard = ({ Poster, Title, Type, Year, imdbID} : IMovie) => {
  
  const [showLabel, setShowLabel] = useState<boolean>(false);

  return (
    <MovieCardWrapper>
        <Card.Img variant="top" src={Poster} onError={
            ({currentTarget}) => {
                currentTarget.onerror = null;
                currentTarget.src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg";
            }
        }/>
        <Card.Body>
            <Card.Title>{Title}</Card.Title>
            <Card.Subtitle>{Type} - {Year}</Card.Subtitle>
            <Button variant="outline-primary" className="mt-3" size="sm" onClick={() => {setShowLabel(prev => !prev)}}>Label</Button>
            <p>
                { showLabel &&
                  "label placeholder"
                }
            </p>
        </Card.Body>
    </MovieCardWrapper>
  )
}

const MovieCardWrapper = styled(Card)`
    height: 100%;  

    .card-img-top {
        height: 350px;
        object-fit: cover;
    }

    .card-title {
        padding-top: 4px;
        font-size: 16px;
        font-weight: 600;
    }

    .card-subtitle {
        font-size: 14px;
        color: #505050;
    }
`

export default MovieCard