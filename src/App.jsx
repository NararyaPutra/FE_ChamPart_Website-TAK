import './index.css'
import Header from './component/header.jsx'
import Footer from './component/footer.jsx'
import Home from './page/user/home.jsx'
import Bookmark from './page/user/bookmark.jsx' 
import History from './page/user/history.jsx'
import { Routes, Route } from 'react-router-dom'
import TampilanSearch from './page/user/tampilansearch.jsx'
import TampilanKegiatan from './page/user/tampilanKegiatan.jsx'
import Profile from './page/user/editprofile.jsx'
import EditPassword from './page/user/editpassword.jsx'
import EditEmail from './page/user/editemail.jsx'

function App() {

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="max-w-7xl mx-auto my-auto pt-[120px] pb-[90px] px-[70px] flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/history" element={<History />} />
          <Route path="/search" element={<TampilanSearch />} />
          <Route path="/kegiatan" element={<TampilanKegiatan />} />
          <Route path="/editprofile" element={<Profile />} />
          <Route path="/editpassword" element={<EditPassword />} />
          <Route path="/editemail" element={<EditEmail />} />
        </Routes>
        </main>
      <Footer />
      </div>
    </>
  )
}

export default App
