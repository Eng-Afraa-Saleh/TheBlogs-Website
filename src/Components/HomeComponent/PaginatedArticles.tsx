import { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { setCurrentPage } from "../../Redux/articleSlice";
import ArticleCard from "../Cards/ArticleCard";

const PaginatedArticles = () => {
  const articles= useAppSelector((state)=> state.article.articles);
  const currentPage = useAppSelector((state)=> state.article.currentPage);

  const articlesPerPage=useAppSelector((state) => state.article.articlesPerPage);

  const dispatch = useAppDispatch();

  const [isFading,setIsFading] = useState(false);
  const [isVisible,setIsVisible] = useState(false);


  const containerRef =useRef<HTMLDivElement>(null);

  const totalPages=Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;

  const currentArticles = articles.slice(startIndex,startIndex + articlesPerPage);

  useEffect(() => {
    const observer= new IntersectionObserver((entries) => {

        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            setIsVisible(true);
            observer.disconnect();
          }

        });
      },
      {threshold: 0.1}
    );

    if (containerRef.current){
      observer.observe(containerRef.current);
    }

    return ()=> {
      observer.disconnect();
    };
  }, []);

  const goToPage= (page: number)=>{

    if (page >= 1 && page <= totalPages) {

      setIsFading(true);

      setTimeout(() => {
        dispatch(setCurrentPage(page));
        setIsFading(false);
      }, 300);
    }
  };



  return (

    
    <div  ref={containerRef} className={`w-full max-w-7xl mx-auto px-4 py-12 transition-opacity transition-transform duration-700 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

        <h2 className="pb-8 font-inter font-bold text-[16px] md:text-[24.8px] lg:text-[32.8px] leading-[100%] text-[#090D1F] dark:text-white transition-opacity duration-700 delay-300">All Blogs</h2>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}>

        {currentArticles.map((article) => (

          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <div className="relative flex items-center justify-center mt-8">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}

          className="absolute left-0 text-sm text-blue-600 dark:text-blue-400 disabled:opacity-40">&larr; Prev

        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (

            <button key={page} onClick={() => goToPage(page)} className={`w-8 h-8 text-sm rounded transition-all 

              ${page === currentPage? "bg-gray-300 dark:bg-gray-600 text-black dark:text-white" : "text-gray-700 dark:text-gray-300"}`} >{page} </button>

          ))}
        </div>

        <button
          onClick={()=>goToPage(currentPage + 1)}

          disabled={currentPage === totalPages}
          className="absolute right-0 text-sm text-blue-600 dark:text-blue-400 disabled:opacity-40">Next &rarr;
        </button>
        
      </div>
    </div>
  );
};

export default PaginatedArticles;
