import { useEffect, useState } from "react";
import { useAppSelector } from "../../Redux/hooks";
import ArticleCard from "../Cards/ArticleCard";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden:{opacity: 0, y: 20 },
  visible:(delay =0) => ({
    opacity:1,
    y:0,
    transition:{ duration: 0.6, delay },
  }),
};



const containerVariants = {
  hidden:{},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};



const NewsLetter = () => {


  const articles= useAppSelector((state)=>state.article.articles);
  const [randomArticles, setRandomArticles] =useState<typeof articles>([]);

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (articles.length < 3) return;
    const baseArticle = articles[Math.floor(Math.random() * articles.length)];


    const similar = articles.filter(

      (a) => a.id !== baseArticle.id &&
        a.categories.some((cat) => baseArticle.categories.includes(cat))
    );

    const shuffled = [...similar].sort(() => 0.5 - Math.random());

    const selected = [baseArticle, ...shuffled.slice(0, 2)];

    setRandomArticles(selected);
  }, [articles]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full px-10 py-10 space-y-12 text-center text-[#090D1F] dark:text-white bg-white dark:bg-[#090D1F]"
    >
      <motion.p variants={fadeInUp} className="text-purple-500 text-sm font-semibold">Newsletters</motion.p>

      <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl font-bold">Stories and interviews</motion.h1>

      <motion.p
        variants={fadeInUp}
        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base"
      >Subscribe to learn about new product features, the latest in technology, solutions, and updates.</motion.p>

      <motion.div
        variants={fadeInUp}  className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mt-4"
      >
        <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={email} onChange={(e) => setEmail(e.target.value)}/>

        <button className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition text-sm w-full sm:w-auto">Subscribe</button>
      </motion.div>

      <motion.p variants={fadeInUp } className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        We care about your data in our <span className="underline">privacy policy</span>

      </motion.p>

      <motion.div variants={fadeInUp} className="mt-20 space-y-6 text-left">
        <h2 className="text-2xl font-bold text-center">All blog posts</h2>

        {randomArticles.length === 3 && (
          <motion.div 
          variants={containerVariants}
            className="flex flex-col gap-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
          {randomArticles.slice(0, 2).map((article) => (
                <motion.div key={article.id} variants={fadeInUp}>
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="w-full max-w-2xl mx-auto">
              <ArticleCard article={randomArticles[2]} />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default NewsLetter;
