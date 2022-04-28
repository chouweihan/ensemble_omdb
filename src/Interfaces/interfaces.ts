import { Variant } from "react-bootstrap/types"

export interface IAlert {
    text: string,
    variant: Variant
}

export interface IMovie {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}

