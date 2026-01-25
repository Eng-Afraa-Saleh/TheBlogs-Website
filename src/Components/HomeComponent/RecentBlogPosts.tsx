import { Link } from "react-router-dom";
import { categoryColors } from "../../Data/articles";
import { useAppSelector } from "../../Redux/hooks";
import { MdArrowOutward } from "react-icons/md";
import { useMemo } from "react";

const RecentBlogPosts = () => {
  const articles = useAppSelector((state) => state.article.articles);

  const [first,second, third,fourth]= useMemo(()=> {

    const shuffled = [...articles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0,4);
  }, [articles]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-14">
      <div className="flex items-center justify-between">

        <h2 className="font-inter font-bold text-[16px] md:text-[24.8px] lg:text-[32.8px] leading-[100%] text-[#090D1F] dark:text-white transition-opacity duration-700 delay-300">Recent blog posts</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <Link to={`/article/${fourth.id}`} className="lg:w-1/2 group opacity-0 translate-y-4 animate-fadeInUp transition-transform transition-opacity duration-500 ease-in-out hover:opacity-90 hover:scale-105">


          <img src={fourth.mainImage} alt={fourth.title} className="w-full h-48 lg:w-[592px] lg:h-[228px] object-cover"/>

      
          <div className="mt-4 space-y-2">
            <p className="font-inter font-semibold text-[14px] leading-5 text-[#6941C6]">{fourth.date}</p>


            <div className="flex items-center justify-between">
              <h2 className="font-inter font-semibold text-[24px] leading-8 text-[#090D1F] dark:text-white">
                {fourth.title}
              </h2>
              <MdArrowOutward className="w-6 h-6 text-[#090D1F] dark:text-white" />
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{fourth.description[0]}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {fourth.categories.map((cat,i) => (
                <span key={i} className={`text-xs px-2 py-1 rounded-full ${categoryColors[cat]}`}>{cat}</span>
              ))}

            </div>
          </div>
        </Link>

        <div className="lg:w-1/2 flex flex-col gap-6">
          {[second, third].map((article,idx) => (
            <Link to={`/article/${article.id}`} key={idx}
              className="flex flex-col md:flex-row gap-4 group opacity-0 translate-y-4 animate-fadeInUp transition-transform transition-opacity duration-500 ease-in-out hover:opacity-90 hover:scale-105">

              <img src={article.mainImage} alt={article.title} className="w-full md:w-1/2 h-48 object-cover"/>

              <div className="flex-1 space-y-2">
                <p className="font-inter font-semibold text-[14px] leading-5 text-[#6941C6]">{article.date}</p>
                <div className="flex items-center justify-between">
                  <h3 className="font-inter font-semibold text-[20px] leading-8 text-[#090D1F] dark:text-white">
                    {article.title}
                  </h3>
                  <MdArrowOutward className="w-6 h-6 text-[#090D1F] dark:text-white" />
                </div>


                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{article.description[0]}</p>
                <div className="flex flex-wrap gap-2">

                  {article.categories.map((cat, index)=> (
                    <span key={index} className={`text-xs px-2 py-1 rounded-full ${categoryColors[cat]}`}>{cat}</span>
                  ))}
                </div>
              </div>
            </Link>

          ))}
        </div>
      </div>




      <Link  to={`/article/${first.id}`} className="flex flex-col md:flex-row gap-6 group opacity-0 translate-y-4 animate-fadeInUp transition-transform transition-opacity duration-500 ease-in-out hover:opacity-90 hover:scale-105">

        <img src={first.mainImage} alt={first.title}
          className="w-full h-48 md:w-1/2 lg:w-[592px] lg:h-[228px] object-cover"/>

        <div className="flex-1 space-y-2">
          <p className="font-inter font-semibold text-[14px] leading-5 text-[#6941C6]">{first.date}</p>

          <div className="flex items-center justify-between">
            <h3 className="font-inter font-semibold text-[20px] leading-8 text-[#090D1F] dark:text-white">{first.title}</h3>
            <MdArrowOutward className="w-6 h-6 text-[#090D1F] dark:text-white" />
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{first.description[0]}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {first.categories.map((cat, i) => (
              <span key={i} className={`text-xs px-2 py-1 rounded-full ${categoryColors[cat]}`}>{cat}</span>
            ))}
          </div>
        </div>
      </Link>


      
    </section>
  );
};

export default RecentBlogPosts;
