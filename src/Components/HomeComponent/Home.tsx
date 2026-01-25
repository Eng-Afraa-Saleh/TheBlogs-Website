 import HomeTitle from './HomeTitle'
import RecentBlogPosts from './RecentBlogPosts'
import PaginatedArticles from './PaginatedArticles'

function Home() {
    return (
        <section className='bg-white dark:bg-[#090D1F]'>
            <HomeTitle />
            <RecentBlogPosts />
            <PaginatedArticles />
        </section>
    )
}

export default Home
