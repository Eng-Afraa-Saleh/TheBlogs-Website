import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks";
import { categoryColors } from "../../Data/articles";
import { motion } from "framer-motion";
 import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ArticleDetails = () => {
  const {id}= useParams();
  const navigate = useNavigate();


  const articles= useAppSelector((state)=> state.article.articles);
  const article = articles.find((a)=> a.id === Number(id));

  useEffect(()=> {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!article) return <div className="text-center py-10">Article not found.</div>;

  const relatedArticles = articles.filter(

    (a) => a.id !== article.id &&
      a.categories.some((cat) => article.categories.includes(cat))
  );

    const [email, setEmail] = useState("");
  
const fadeInUp = {
  hidden:{opacity: 0, y: 20 },
  visible:(delay =0) => ({
    opacity:1,
    y:0,
    transition:{ duration: 0.6, delay },
  }),
};

  return (  
    <>
      <button  onClick={() => navigate("/")} className="m-1 bg-white dark:bg-gray-800 p-2 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition">
      <IoMdArrowRoundBack className="w-6 h-6 text-purple-400" /></button>

<div className="w-full px-12 py-10 text-[#090D1F] dark:text-white bg-white dark:bg-[#090D1F]">
  <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-gray-800 dark:text-white"
        >

      <div className="flex flex-col md:flex-row gap-10">

  
        <main className="order-1 md:order-2 md:w-2/3 space-y-8">

          <div>
            <h1 className="text-3xl font-bold">{article.title}</h1>

            <p className="font-inter text-sm text-primary pt-4 pb-4">{article.date}</p>

            <img src={article.mainImage} alt={article.title} className="w-full rounded-xl object-cover mt-4"/>
          </div>



          {article.description.map((desc,i) => (
            <p key={i} className="text-lg leading-relaxed">{desc}</p>
          ))}

          {article.sections.map((section, idx) => (

            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-semibold mt-8">{section.titleDimg}</h2>

              {section.images.map((img,i) => (

                <div key={i} className="mb-6">
                  <img src={img.image} alt={img.titleD.join(" ")} className="w-full rounded"/>


                  {img.titleD.map((title, ti) => (
                    <p key={ti} className="font-semibold mt-2">{title}</p>
                  ))}

                  {img.caption.map((c,ci) => (
                    <p key={ci} className="text-sm text-gray-600 dark:text-gray-300">{c}</p>
                  ))}
                </div>

                 
              ))}
               
            </div>
          ))}

           <motion.p variants={fadeInUp} className="text-purple-500 text-sm font-semibold">Newsletters</motion.p>
          
                <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl font-bold">Stories and interviews</motion.h1>
          
                <motion.p
                  variants={fadeInUp}
                  className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base"
                >Subscribe to learn about new product features, the latest in technology, solutions, and updates.</motion.p>
          
                <motion.div
                  variants={fadeInUp}  className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mt-4"
                >
                  <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
          
                  <button className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition text-sm w-full sm:w-auto">Subscribe</button>
                </motion.div>
          
                <motion.p variants={fadeInUp } className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  We care about your data in our <span className="underline">privacy policy</span>
          
                </motion.p>
          
        </main>

        <aside className="order-2 md:order-1 md:w-1/3 space-y-6">
          <h2 className="text-xl font-bold mb-2">Related Posts</h2>

          {relatedArticles.map((related) => (
            <Link to={`/article/${related.id}`} key={related.id}
              className="block bg-white dark:bg-[#090D1F]  hover:shadow-md transition overflow-hidden">


              <img src={related.mainImage} alt={related.title} className="w-full h-40 object-cover"/>

              <div className="p-4 space-y-2">

                <p className="font-inter text-sm text-primary">{related.date}</p>
                <h3 className="text-md font-semibold text-[#090D1F] dark:text-white line-clamp-2">{related.title}</h3>

                
                <div className="flex flex-wrap gap-2 mt-2">
                          {article.categories.map((cat,index) => (
                            <span key={index} className={`text-xs px-2 py-1 rounded-full ${categoryColors[cat] || "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                             }`}>{cat}</span>
                
                          ))}
                </div>
              </div>
            </Link>
          ))}
        </aside>

      </div>
              </motion.div>

    </div>
    
    </>
  );
};

export default ArticleDetails;
