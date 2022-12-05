import react from "react";
import BookPicture from "../../Assets/images/book-image.png";

const SearchResultsItem = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="picture block">
          <img className="w-96 pt-2" src={BookPicture} alt="Thumbnail of Coding with JavaScript For Dummies" />
        </div>
        <div className="content pl-5">
          <div className="title text-violet-500 text-xl">
            Coding with JavaScript For Dummies
          </div>
          <div className="copyright-info flex text-sm">
            <div className="writers"><a href="#" className="text-violet-500 hover:text-violet-600">Chris Minnick,</a> <a href="#" className="text-violet-500 hover:text-violet-600">Eva Holland</a></div>
            <div className="year text-violet-200 pl-1"> · 2015</div>
          </div>
          <div className="short-description pt-2">
            <p className="text-violet-200 pb-2 text-sm">
              Java courses for beginners all the way to advanced courses. Learn
              Java with in-depth online courses from Pluralsight. Certification
              Prep. Skill Assessments. Mobile Apps. Role IQ. Offline Access.
              Expert-Led Courses. Hands-on Learning. Cloud Labs. Courses: IT
              Ops, AI, Big Data.
            </p>
            <button className="btn-preview px-3 py-1 rounded-full text-violet-200 border-violet-200 transition-colors border text-sm hover:border-violet-400 hover:text-violet-400">
              Preview
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchResultsItem;
