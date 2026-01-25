import   { useEffect, useState } from 'react'

const HomeTitle = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col items-center justify-start pt-10 md:pt-20 bg-white dark:bg-[#090D1F] px-4'>
      <div className='w-full max-w-5xl h-px bg-gray-300 dark:bg-gray-600 mb-4 md:mb-6'></div>
      <h1 className={`font-inter font-bold text-[40px] sm:text-[56px] md:text-[124.8px] lg:text-[200.8px] leading-[100%] text-center text-gray-900 dark:text-white
          transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>The Blogs</h1>

      <div className='w-full max-w-5xl h-px bg-gray-300 dark:bg-gray-600 mt-4 md:mt-6'></div>

    </div>
  )
}

export default HomeTitle
