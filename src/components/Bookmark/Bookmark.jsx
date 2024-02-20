import PropTypes from 'prop-types'
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div>

            <div className='  bg-slate-300  p-2 rounded-md '>
                <h3 className=' text-lg'> {title}</h3>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}
export default Bookmark;