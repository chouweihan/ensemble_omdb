import React  from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

interface ISearchBar{
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    handleSearch: () => void
}

const SearchBar = ({ title, setTitle, handleSearch } : ISearchBar) => {

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
     if(e.key === "Enter") {
        handleSearch();
     }
  } 

  return (
    <InputGroup className="mb-3">
        <FormControl
            placeholder="Search movie title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyUp={onEnter}
        />
        <Button variant="outline-secondary" onClick={handleSearch}>
            Search
        </Button>
    </InputGroup>
  )
}

export default SearchBar