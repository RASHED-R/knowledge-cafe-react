import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({ handleToBookmarkAdd, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className=" md:w-3/4">
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog handleToBookmarkAdd={handleToBookmarkAdd} handleMarkAsRead={handleMarkAsRead} blog={blog} key={blog?.id}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleToBookmarkAdd: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blogs;