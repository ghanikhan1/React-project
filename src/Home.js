import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'my new website', body: 'lorem ipsum 1', author: 'Usman', id: 1},
    {title: 'welcome', body: 'lorem ipsum 1', author: 'ghani', id: 2},
    {title: 'development', body: 'lorem ipsum 1', author: 'khan', id: 3},
  ]);

  return (
    <div className="home">
    {blogs.map((blog) => (
      <div className="blog-preview px-32 py-6 my-2 border border-b border-black " key={blog.id}>
        <h2 className="text-red-400">{blog.title}</h2>
        <p>Author: {blog.author}</p>
        {/* New Line of Code */}
        <p>title: {blog.author}</p>
      </div>
    ))}

    </div>
  );
}

export default Home;
