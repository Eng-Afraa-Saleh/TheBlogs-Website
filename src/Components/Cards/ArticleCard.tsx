import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { categoryColors, type Article } from "../../Data/articles";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="relative bg-white dark:bg-[#090D1F] overflow-hidden transition hover:shadow-lg">      

      <img src={article.mainImage} alt={article.title} className="w-full h-48 object-cover"/>

      <div className="p-4 space-y-2">
        <p className="text-xs text-primary">{article.date}</p>

        <div className="flex items-center justify-between">

          <h2 className="text-lg font-semibold text-[#090D1F] dark:text-white line-clamp-2">{article.title}</h2>

          <Link to={`/article/${article.id}`} className=" text-gray-800 hover:bg-purple-800 transition hover:text-white dark:text-white p-1.5 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 transition">
        <FiArrowUpRight className="w-6 h-6" />
      </Link>

        </div>


        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
          {article.description[0]}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {article.categories.map((cat,index) => (
            <span key={index} className={`text-xs px-2 py-1 rounded-full ${categoryColors[cat] || "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
             }`}>{cat}</span>

          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
