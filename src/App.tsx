 import './App.css'
import Navbar from './Components/HeaderComponent/Navbar '
  import { Route, Routes } from 'react-router-dom'
import ArticleDetails from './Components/Pages/ArticleDetails'
import Home from './Components/HomeComponent/Home'
import NewsLetter from './Components/Pages/NewsLetter'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/newsletter" element={<NewsLetter />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App

