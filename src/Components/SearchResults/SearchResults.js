import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";
import axios from "axios";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchKey = searchParams.get("q");
  const [searchResults, setsearchResults] = useState([]);

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchKey}&key=${process.env.REACT_APP_GOOGLE_API}`)
        .then(response => {
          setsearchResults(response.data.items);
        })
        .catch((error) => console.error({ error }));
  }, [searchKey]);

  return (
    <div className="w-full h-full bg-gray-900">
      <div className="m-left text-left w-5/12 pl-10 pt-8">
        {searchResults.map((book, i) => {
          const {volumeInfo, saleInfo} = book;
          return (
            <SearchResultsItem key={i} volumeInfo={volumeInfo} saleInfo={saleInfo} />
          );
        })}
      </div>
    </div>
  );
};
export default SearchResults;
