import react, { useState } from "react";
import Logo from "../../Assets/images/books-logo.svg";
import SearchIcon from "../../Assets/images/search-icon.svg";
import axios from "axios";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const searchBook = (event) => {
    if (event.key==="Enter") {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_API}`)
      .then(results=>console.log(results.data.items))
      .catch(error=>console.error(error))
    }
  }
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto text-left w-5/12">
          <h3>
            <img src={Logo} alt="Logo" />
          </h3>
          <p className="text-md text-gray-300">
            Which book are you looking for?
          </p>
          <div className="w-full mt-4 search--container">
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="invert absolute ml-4 mt-3"
            />
            <input
              type="text"
              className="px-3 py-3 rounded-full w-full indent-9 bg-gray-800 text-gray-400 transition-colors focus:text-gray-700 focus:bg-white focus:border-violet-400 focus:outline-none"
              placeholder="Type a book name..."
              value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
