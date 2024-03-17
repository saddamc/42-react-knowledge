import PropTypes from "prop-types";
import { BsBookmarks } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {id, title, cover, author, author_img, reading_time, posted_date, hashtag } = blog;

  return (
    <div>
      <img className="w-full rounded-xl" src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between m-4 items-center text-center">
        <div className="flex ">
          <img className="w-14 h-14" src={author_img} alt="" />
          <div className="ml-6 text-left">
            <h3 className="text-xl font-bold ">{author}</h3>
            <p className="text-sm mb-1">{posted_date}</p>
          </div>

        </div>
        <div>
          <span className="m-4">{reading_time}</span>
          {/* button */}
          <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-red-600 text-2xl"><BsBookmarks></BsBookmarks></button>
        </div>
      </div>
     <div className="space-y-2 text-left mb-12">
       <h2 className="text-4xl text-left mb-2">{title}</h2>
      <p className="mb-1 text-left">
        {
          hashtag.map((hash, idx) => <span key={idx}><a href="">#{hash}  </a></span> )
          
        }
      </p>
      <button onClick={() => handleMarkAsRead(id, reading_time)} className="ali text-purple-600 font-bold underline">Mark As Read</button>
     </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
