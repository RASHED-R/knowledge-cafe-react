
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleToBookmarkAdd = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const [markAsRead, setMarkAsRead] = useState(0);

  const handleMarkAsRead = (time, id) => {
    setMarkAsRead(markAsRead + time);
    const remainingBookMark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMark);

  }
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>

        <div className=' md:flex md:justify-between py-6'>
          <Blogs handleToBookmarkAdd={handleToBookmarkAdd} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
