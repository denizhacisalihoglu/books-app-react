import react, { useState } from "react";
import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";
import axios from "axios";

const SearchResults = (props) => {
  const [searchResults, setsearchResults] = useState([]);
  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props.search}&key=${process.env.REACT_APP_GOOGLE_API}`)
        .then(response => {
          setsearchResults(response.data.items);
        })
        .catch((error) => console.error({ error }));
    }
  }
  return (
    <div className="w-full h-full bg-gray-900">
      Search Results JS
      {props.keyword}

      {searchResults.length}
            {searchResults.map((book, i) => {
              const {volumeInfo, saleInfo} = book;
              return (
                <SearchResultsItem key={i} volumeInfo={volumeInfo} saleInfo={saleInfo} />
              );
            })}
    </div>
  );
};
export default SearchResults;
