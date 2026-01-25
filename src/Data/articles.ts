
import ImageMain from '/images/Article1Images/ImageMain.png'
import ImageMain2 from '/images/Article2Images/ImageMain.png'
import ImageMain3 from '/images/Article3Images/ImageMain.png'
import ImageMain4 from '/images/Article4Images/ImageMain.png'
import ImageMain5 from '/images/Article5Images/ImageMain.png'
import ImageMain6 from '/images/Article6Images/ImageMain.png'
import ImageMain7 from '/images/Article7Images/ImageMain.png'
import ImageMain8 from '/images/Article8Images/ImageMain.png'
import ImageMain9 from '/images/Article9Images/ImageMain.png'
import ImageMain10 from '/images/Article10Images/ImageMain.png'
import ImageMain11 from '/images/Article11Images/ImageMain.png'
import ImageMain12 from '/images/Article12Images/ImageMain.png'
import ImageMain13 from '/images/Article13Images/ImageMain.png'
import ImageMain14 from '/images/Article14Images/ImageMain.png'
import ImageMain15 from '/images/Article15Images/ImageMain.png'
import ImageMain16 from '/images/Article16Images/ImageMain.png'
import ImageMain17 from '/images/Article17Images/ImageMain.png'
import ImageMain18 from '/images/Article18Images/ImageMain.png'
import ImageMain19 from '/images/Article19Images/ImageMain.png'
import ImageMain20 from '/images/Article20Images/ImageMain.png'



import ImageD1 from '/images/Article1Images/ImageD1.png'
import ImageD2 from '/images/Article1Images/ImageD2.png'


import ImageD3 from '/images/Article1Images/ImageD3.png'
import ImageD4 from '/images/Article1Images/ImageD4.png'
import ImageD5 from '/images/Article1Images/ImageD5.png'
import ImageD6 from '/images/Article1Images/ImageD6.png'

import ImageD7 from '/images/Article1Images/ImageD7.png'
import ImageD8 from '/images/Article1Images/ImageD8.png'
import ImageD9 from '/images/Article1Images/ImageD9.png'

import Image2D1 from '/images/Article2Images/ImageD1.png'
import Image2D2 from '/images/Article2Images/ImageD2.png'
import Image2D3 from '/images/Article2Images/ImageD3.png'
import Image2D4 from '/images/Article2Images/ImageD4.png'


export interface SectionImage {
  image: string;
  titleD: string[];
  caption: string[];
}


export interface ArticleSection {
  titleDimg: string;
  images: SectionImage[];
}

export const categoryColors: Record<Category, string> = {
  Design: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  Research: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Presentation: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Interface: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Management: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  Leadership: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  Frameworks: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  Product: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  SaaS: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
  Tools: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  "Software Development": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  "Customer Success": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
  Podcasts: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300",
};

export type Category =
  | "Design"
  | "Research"
  | "Presentation"
  | "Interface"
  | "Management"
  | "Leadership"
  | "Frameworks"
  | "Product"
  | "SaaS"
  | "Tools"
  | "Software Development"
  | "Customer Success"
  | "Podcasts";



export interface Article {
  id: number;
  title: string;
  date: string;
  description: string[];
  mainImage: string;
  categories: Category[];
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Grid system for better Design User Interface",
    date: "Sunday, 1 Jan 2023",
    description: [
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go."


    ],
    mainImage: ImageMain,
    categories: ["Design", "Interface"],
    sections: [
      {
        titleDimg: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        images: [
          {
            image: ImageD1,
            titleD: ["Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page."],
            caption: [
              "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
              "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
              "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
              "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
              "**Breaking Down the Grid**",
              "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
              "**Columns:** Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
              "**Gutters:** The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile."

            ]

          }


        ]

      },
      {
        titleDimg: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        images: [
          {
            image: ImageD2,
            titleD: ["Examples of Grids in Use", "Example 1: Hierarchical Grid"],
            caption: [
              "Our first example is from <The New York Times>. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right."
            ]

          }
        ]
      },
      {
        titleDimg: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        images: [
          {
            image: ImageD3,
            titleD: ["Example 2: Column Grid"],
            caption: [
              "Our second example is from <Ritual.com>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",

            ]

          }
        ]
      },
      {
        titleDimg: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        images: [
          {
            image: ImageD4,
            titleD: ["Example 3: Modular Grid"],
            caption: [
              "Our third example is from <Behance>, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element."
            ]

          }
        ]
      },
      {
        titleDimg: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        images: [
          {
            image: ImageD5,
            titleD: ["Example 4: Breaking the Grid"],
            caption: [
              "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it."
            ]

          }
        ]
      },
      {
        titleDimg: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        images: [
          {
            image: ImageD6,
            titleD: ["Benefits of the Grid"],
            caption: [
              "Using a grid benefits both end users and the designers alike:",
              "Designers can quickly put together well-aligned interfaces.",
              "Users can easily scan predictable grid-based interfaces.",
              "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns."
            ]

          }
        ]
      },
      {
        titleDimg: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        images: [
          {
            image: ImageD7,
            titleD: ["Choosing and Setting Up Your Grid"],
            caption: [
              "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
              "**Choose the right grid for your needs.** Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
              "**Spend time setting up your grid.** Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",

            ]

          }
        ]
      },
      {
        titleDimg: "Easily set the number of columns, the gutter size, and margin size in Figma.",
        images: [
          {
            image: ImageD8,
            titleD: [""],
            caption: [
              "**Always place content within columns, not gutters.** The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",

            ]

          }
        ]
      },
      {
        titleDimg: "Content or elements should be placed within and across columns, not gutters.",
        images: [
          {
            image: ImageD9,
            titleD: [""],
            caption: [
              "**Consider using an 8px grid system.** For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
              "**Conclusion**",
              "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
            ]

          }
        ]
      },





    ]
  },
  {
    id: 2,
    title: "UX review presentations",
    date: "Sunday , 1 Jan 2023",
    description: ["How do you create compelling presentations that wow your colleagues and impress your managers?"],
    mainImage:ImageMain2,
    categories: ["Design", "Presentation", "Research"],
    sections: [
      {
        titleDimg: "Introduction to UX Review Presentations",
        images: [
          {
            image:Image2D1,
            titleD: ["presentations are a critical part of the product development process."],
            caption: [
              "They serve as a platform to showcase user experience research, design decisions, usability findings, and potential areas for improvement. Whether you're presenting to designers, developers, or stakeholders, the way you structure and communicate your UX review can significantly influence the direction of a product."
            ]
          },
        ]
      },
      {
        titleDimg: "Understanding Your Audience",
        images: [
          {
            image:Image2D2,
            titleD: ["The most important thing is to understand the users' needs."],
            caption: [
              "Before you begin crafting your presentation, it's essential to identify who will be in the room. Are you speaking to product managers, engineers, senior executives, or fellow designers? Each group has different interests and priorities. Tailoring your language, depth of detail, and focus areas based on your audience ensures your presentation resonates with them and keeps them engaged."
            ]
          },
        ]
      },
      {
        titleDimg: "Structuring Your Presentation",
        images: [
          {
            image:Image2D3,
            titleD: ["A compelling UX review presentation should follow a clear structure:"],
            caption: [
              "**Introduction:** Briefly state the purpose of the presentation.",
              "**Project Overview:** Summarize the product, its goals, and target users.",
              "**Research Findings:** Present user data, insights, and usability testing results",
              "**Design Solutions:** Showcase wireframes, prototypes, and design rationales.",
              "**Recommendations:** Highlight key takeaways and propose actionable steps.",
              "This logical flow helps maintain clarity and builds a narrative that your audience can easily follow.",
            ]
          },
        ]
      },
      {
        titleDimg: "Using Visuals to Tell a Story",
        images: [
          {
            image:Image2D4,
            titleD: ["UX is a visual discipline, so your presentation should reflect that. Avoid dense text slides. Instead, use:"],
            caption: [
              "User journey maps",
              "Screenshots of designs and prototypes",
              "Before-and-after comparisons",
              "Charts and graphs for data",
              "These visuals help convey your message faster and more effectively than words alone.",
            ]
          },
        ]
      },

    ]
  },
  {
    id: 3,
    title: "Migrating to Linear 101",
    date: "Sunday , 1 Jan 2023",
    description: ["Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."],
    mainImage: ImageMain3,
    categories: ["Research", "Design"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image:ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image:ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image:ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image:ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 4,
    title: "Building your API Stack",
    date: "Sunday , 1 Jan 2023",
    description: ["The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."],
    mainImage:ImageMain4,
    categories: ["Research", "Design"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image:ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image:ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image:ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image:ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 5,
    title: "Building your API Stack",
    date: "Sunday , 1 Jan 2023",
    description: ["Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"],
    mainImage: ImageMain5,
    categories: ["Management", "Leadership", "Presentation"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image:ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image:ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image:ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image:ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 6,
    title: "PM mental models",
    date: "Sunday , 1 Jan 2023",
    description: ["Mental models are simple expressions of complex processes or relationships."],
    mainImage:ImageMain6,
    categories: ["Frameworks", "Product", "Research"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image:ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image:ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 7,
    title: "What is Wireframing?",
    date: "Sunday , 1 Jan 2023",
    description: ["Introduction to Wireframing and its Principles. Learn from the best in the industry."],
    mainImage:ImageMain7,
    categories: ["Research", "Design", "Presentation"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 8,
    title: "How collaboration makes us better designers",
    date: "Sunday , 1 Jan 2023",
    description: ["Collaboration can make our teams stronger, and our individual designs better."],
    mainImage: ImageMain8,
    categories: ["Design", "Research", "Presentation"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 9,
    title: "Our top 10 Javascript frameworks to use",
    date: "Sunday , 1 Jan 2023",
    description: ["JavaScript frameworks make development easy with extensive features and functionalities."],
    mainImage:ImageMain9,
    categories: ["Software Development", "Tools", "SaaS"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 10,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday , 1 Jan 2023",
    description: ["Starting a community doesn’t need to be complicated, but how do you get started?"],
    mainImage:ImageMain10,
    categories: ["Podcasts", "Customer Success", "Presentation"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 11,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday , 1 Jan 2023",
    description: ["Starting a community doesn’t need to be complicated, but how do you get started?"],
    mainImage:ImageMain11,
    categories: ["Podcasts", "Customer Success", "Presentation"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 12,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday , 1 Jan 2023",
    description: ["Starting a community doesn’t need to be complicated, but how do you get started?"],
    mainImage:ImageMain12,
    categories: ["Podcasts", "Customer Success", "Presentation"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 13,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday , 1 Jan 2023",
    description: ["Starting a community doesn’t need to be complicated, but how do you get started?"],
    mainImage:ImageMain13,
    categories: ["Podcasts", "Customer Success", "Presentation"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 14,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday , 1 Jan 2023",
    description: ["Starting a community doesn’t need to be complicated, but how do you get started?"],
    mainImage: ImageMain14,
    categories: ["Podcasts", "Customer Success", "Presentation"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 15,
    title: "Building your API Stack",
    date: "Sunday , 1 Jan 2023",
    description: ["The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."],
    mainImage:ImageMain15,
    categories: ["Research", "Design"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 16,
    title: "Building your API Stack",
    date: "Sunday , 1 Jan 2023",
    description: ["Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"],
    mainImage:ImageMain16,
    categories: ["Management", "Leadership", "Presentation"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 17,
    title: "PM mental models",
    date: "Sunday , 1 Jan 2023",
    description: ["Mental models are simple expressions of complex processes or relationships."],
    mainImage: ImageMain17,
    categories: ["Frameworks", "Product", "Research"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 18,
    title: "What is Wireframing?",
    date: "Sunday , 1 Jan 2023",
    description: ["Introduction to Wireframing and its Principles. Learn from the best in the industry."],
    mainImage:ImageMain18,
    categories: ["Research", "Design", "Presentation"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 19,
    title: "How collaboration makes us better designers",
    date: "Sunday , 1 Jan 2023",
    description: ["Collaboration can make our teams stronger, and our individual designs better."],
    mainImage: ImageMain19,
    categories: ["Design", "Research", "Presentation"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },
  {
    id: 20,
    title: "Our top 10 Javascript frameworks to use",
    date: "Sunday , 1 Jan 2023",
    description: ["JavaScript frameworks make development easy with extensive features and functionalities."],
    mainImage:ImageMain20,
    categories: ["Software Development", "Tools", "SaaS"],
    sections: [
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, accusamus.",
        images: [
          {
            image: ImageD1,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD2,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum."
            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD3,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },
      {
        titleDimg: "Lorem ipsum dolor sit amet consectetur",
        images: [
          {
            image: ImageD4,
            titleD: ["Lorem ipsum dolor sit amet consectetur"],
            caption: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe vero soluta magni unde dicta!",
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus modi praesentium nisi soluta, exercitationem et, laudantium unde fuga veniam minus illum.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam voluptate velit quas eum minus, laborum similique molestiae repudiandae earum.",
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nisi nulla consequuntur modi qui illum quam deserunt, magnam, velit voluptatibus quas error facilis odio in optio quibusdam corrupti est repellat.",

            ]
          },
        ]
      },




    ]
  },

];
