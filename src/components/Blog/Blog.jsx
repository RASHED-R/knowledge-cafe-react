import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleToBookmarkAdd, handleMarkAsRead }) => {
    const { id, title, cover_img, author_name, hashtags, author_img, reading_time, posted_date } = blog;
    return (
        <div className=' border p-4 my-4 rounded'>
            <img className=' h-20 ' src={cover_img} alt={`This is cover image for blogs ${cover_img}`} />
            <h3 className="text-4xl my-2">{title}</h3>
            <div className="flex justify-between my-4">
                <div>
                    <div className=' flex'>
                        <img className=' w-14' src={author_img} alt="" />
                        <div className=' ms-3'>
                            <h4 className=' text-xl'>{author_name}</h4>
                            <p className=' text-lg'>Posted Date: {posted_date}</p>
                        </div>
                    </div>
                    <div className="flex mt-3">
                        {
                            hashtags.map((hashtag, index) => <p key={index} style={{ margin: index === 1 ? '0 10px' : '0' }} ># {hashtag}</p>)
                        }
                    </div>
                    <button onClick={() => handleMarkAsRead(reading_time, id)} className=' underline text-red-700 mt-4'>Mark As Read</button>
                </div>

                <div className='flex gap-2 items-center'>
                    <p>{reading_time} min reading time</p>
                    <button onClick={() => handleToBookmarkAdd(blog)} type="button" className=' rounded bg-blue-700 text-white p-2'><FaRegBookmark></FaRegBookmark></button>
                </div>

            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToBookmarkAdd: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;