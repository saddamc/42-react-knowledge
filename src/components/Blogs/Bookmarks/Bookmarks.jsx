
import PropTypes from 'prop-types'
import Bookmark from '../../Bookmark/Bookmark'

const Bookmarks =({bookmarks, readingTime}) =>{
    return(
        <div className="md:w-1/3 bg-gray-300 ml-4 rounded-xl shadow-xl ">
            <div className='my-2 bg-stone-400 rounded-lg shadow-2xl m-2 p-2'>
                <h3 className='text-4xl'>Reading Time: {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center p-1">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={(bookmark.id, idx)} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
} 

export default Bookmarks;
