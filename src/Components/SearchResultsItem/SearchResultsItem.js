import react from "react";
import BookPicture from "../../Assets/images/book-image.png";

const SearchResultsItem = (props) => {
  const bookData = props.volumeInfo;
  const book = {
    title: bookData.title,
    authors: bookData.authors,
    thumbnail: bookData.imageLinks.thumbnail,
    altText: `Thumbnail of ${bookData.title}`,
    description: bookData.description?.substring(0, 200),
    publishedDate: bookData.publishedDate.split('-')[0],
    link: bookData.canonicalVolumeLink
  }
  console.log(bookData);
  return (
    <>
      <div className="flex h-auto pb-2 pt-2">
        <div className="picture block">
          <img className="w-96 pt-2" src={book.thumbnail} alt={book.altText} />
        </div>
        <div className="content pl-5">
          <div className="title text-violet-500 text-xl">
            {book.title}
          </div>
          <div className="copyright-info flex text-sm">
            <div className="writers">
              {book.authors.map((author, i) => {
                return <a href="#" className="text-violet-500 hover:text-violet-600">{author}{(i < book.authors.length - 1) && `, `}</a>
              })}</div>
            <div className="year text-violet-200 pl-1"> · {book.publishedDate}</div>
          </div>
          <div className="short-description pt-2">
            <p className="text-violet-200 pb-2 text-sm">
              {book.description}
            </p>
            <button className="btn-preview px-3 py-1 rounded-full text-violet-200 border-violet-200 transition-colors border text-sm hover:border-violet-400 hover:text-violet-400"
              onClick={(e) => {
                e.preventDefault();
                window.open(book.link, "_blank");
              }}>
              Preview
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchResultsItem;
