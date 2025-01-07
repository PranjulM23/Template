import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      title: "UX review presentations",
      category: "Design",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      description:
        "How to create compelling presentations that wow your colleagues and impress your managers?",
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg", // Replace with actual image URL
    },
    {
      title: "Migrating to Linear 101",
      category: "Product",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      image: "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=", // Replace with actual image URL
    },
    {
      title: "Building your API stack",
      category: "Software Engineering",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      image: "https://www.shutterstock.com/image-photo/blogging-concept-web-blog-social-600nw-2484136087.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Latest blog posts</h2>
          <p className="text-gray-500">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600">
          View all posts
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm overflow-hidden bg-white transition hover:shadow-md"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-red-500 font-medium mb-1">
                {blog.category}
              </p>
              <h3 className="text-lg font-semibold mb-2 hover:underline">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{blog.description}</p>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <span>{blog.author}</span>
                <span>•</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
