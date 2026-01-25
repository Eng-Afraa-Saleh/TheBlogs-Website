import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-[#090D1F] text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-white">

      <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-gray-800 dark:text-white"
        >
      <div className="text-center max-w-7xl mx-auto px-4 py-6 text-sm flex flex-col sm:flex-row sm:justify-start gap-4 text-left">
        <span>© 2023</span>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-4">
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Twitter</a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Email</a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition">RSS feed</a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Add to Feedly</a>
        </div>
      </div>

        </motion.div>
    </footer>
  );
};

export default Footer;
