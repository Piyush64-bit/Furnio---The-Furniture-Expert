import React from 'react';
import one from '../../../assets/blog1.jpg';
import two from '../../../assets/blog2.jpg';
import three from '../../../assets/blog3.jpg';
import rightone from '../../../assets/blog11.jpg';
import righttwo from '../../../assets/blog22.jpg';
import rightthree from '../../../assets/blog33.jpg';
import rightfour from '../../../assets/blog44.jpg';
import rightfive from '../../../assets/blog55.png';

function App() {
  const blogPosts = [
    {
      id: 1,
      image: one,
      category: 'Wood',
      title: 'Going all-in with millennial design',
      date: '14 Oct 2022',
      author: 'Admin',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      id: 2,
      image: two,
      category: 'Handmade',
      title: 'Exploring new ways of decorating',
      date: '14 Oct 2022',
      author: 'Admin',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      id: 3,
      image: three,
      category: 'Wood',
      title: 'Handmade pieces that took time to make',
      date: '14 Oct 2022',
      author: 'Admin',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
  ];

  const categories = [
    { name: 'Crafts', count: 3 },
    { name: 'Design', count: 2 },
    { name: 'Handmade', count: 7 },
    { name: 'Interior', count: 1 },
    { name: 'Wood', count: 8 },
  ];

  const recentPosts = [
    { id: 1, title: 'Going all-in with millennial design', image: rightone },
    { id: 2, title: 'Exploring new ways of decorating', image: righttwo },
    { id: 3, title: 'Handmade pieces that last time to make', image: rightthree },
    { id: 4, title: 'Modern Home in Milan', image: rightfour },
    { id: 5, title: 'Colorful office redesign', image: rightfive },
  ];

  const Header = () => (
    <header className="py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative">{/* logo / nav could go here */}</div>
      </div>
    </header>
  );

  const BlogPostCard = ({ post }) => (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
      <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
      <div className="p-6">
        <div className="flex flex-wrap items-center text-gray-500 text-sm mb-3">
          <span className="flex items-center mr-4 mb-2 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {post.author}
          </span>
          <span className="flex items-center mr-4 mb-2 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
            </svg>
            {post.category}
          </span>
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">{post.title}</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>
        <a href="#" className="text-black font-medium hover:underline">
          Read more
        </a>
      </div>
    </article>
  );

  const MainContent = () => (
    <main className="lg:w-2/3 lg:pr-8 mb-8 lg:mb-0">
      {blogPosts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </main>
  );

  const Sidebar = () => (
    <aside className="lg:w-1/3 lg:pl-8">
      {/* Search + Categories */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder=""
            className="border border-gray-300 rounded-md py-3 pl-4 pr-10 w-full focus:outline-none focus:ring-1 focus:ring-gray-300 text-lg"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-gray-900">Categories</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.name} className="flex justify-between items-center py-3">
              <a href="#" className="text-black hover:text-gray-700 text-lg font-normal">
                {category.name}
              </a>
              <span className="text-gray-500 text-base">{category.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Recent Posts</h3>
        <ul>
          {recentPosts.map((post) => (
            <li key={post.id} className="flex items-center py-3">
              <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-md mr-4" />
              <a href="#" className="text-black hover:text-blue-600 font-medium">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      <Header />
      <div className="container mx-auto flex flex-col lg:flex-row mt-8 px-4">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
