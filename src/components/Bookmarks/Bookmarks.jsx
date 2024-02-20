import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, markAsRead }) => {
    return (
        <div className=" md:w-1/3 ms-2  p-2 bg-slate-200">
            <div>
                <h1>Total Study Time: {markAsRead} min </h1>
            </div>
            <h3 className="">Bookmarked length : {bookmarks.length}</h3>

            <div className=' flex gap-3 flex-col mt-4'>
                {
                    bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark} markAsRead={markAsRead}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    markAsRead: PropTypes.number
}
export default Bookmarks;