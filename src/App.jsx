import './index.css'
import Header from './component/header.jsx'
import Footer from './component/footer.jsx'
import Home from './page/user/home.jsx'
import Bookmark from './page/user/bookmark.jsx' 
import History from './page/user/history.jsx'
import { Routes, Route } from 'react-router-dom'
import TampilanSearch from './page/user/tampilansearch.jsx'

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
        </Routes>
        </main>
      <Footer />
      </div>
    </>
  )
}

export default App
