import react from "react";
import Logo from "../../Assets/images/books-logo.svg";
import SearchIcon from "../../Assets/images/search-icon.svg";

const SearchBar = () => {
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
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
