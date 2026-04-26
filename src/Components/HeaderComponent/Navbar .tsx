import { useState } from 'react'
import { motion } from "framer-motion";
import ThemeToggle from './ThemeToggle ';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (

    <nav className='bg-white dark:bg-[#090D1F] sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-gray-800 dark:text-white"
        >
         Hello
        </motion.div>

        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='text-gray-800 dark:text-white focus:outline-none'>
            <HiMenu className='w-6 h-6' />
          </button>

        </div>
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden md:flex md:items-center md:space-x-6 text-gray-700 dark:text-gray-300 text-sm"
        >
          <Link to="/" className="hover:text-blue-500">Blogs</Link>
          <Link to="/" className="hover:text-blue-500">Products</Link>

          <Link to="/" className="hover:text-blue-500">About</Link>
          <Link to="/newsletter" className="hover:text-blue-500">NewsLetter</Link>


          <ThemeToggle />
        </motion.div>


      </div>

      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className=' fixed inset-0 bg-white dark:bg-[#090D1F] text-[#090D1F] dark:text-white flex flex-col justify-between items-center z-50'>

          <div className='pt-20 text-center text-lg font-inter'>Hello</div>
          <ul className='space-y-6 text-lg text-center'>
            <li><Link onClick={() => setMenuOpen(false)} to="/">Blogs</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/">Products</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/">About</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/newsletter">Newsletter</Link></li>

          </ul>

          <div className='mb-10 flex flex-col items-center space-y-6'>
            <ThemeToggle />
            <button onClick={() => setMenuOpen(false)} className='text-2xl text-[#090D1F] dark:text-white'><HiX className="w-6 h-6" /></button>
          </div>
        </motion.div>
      )}

    </nav>

  )
}

export default Navbar 
