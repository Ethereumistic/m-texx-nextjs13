import React from 'react';

interface BlogCardProps {
  title: string;
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  coverPhoto: {
    url: string;
  };
  datePublished: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, author, coverPhoto, datePublished, slug }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md mb-4">
      <img className="w-full h-64 object-cover rounded-md" src={coverPhoto.url} alt="Cover photo" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <div className="flex items-center mt-2">
        <img className="w-8 h-8 rounded-full mr-2" src={author.avatar.url} alt="Author avatar" />
        <p>{author.name}</p>
      </div>
      <p className="mt-2 text-gray-600">Published on {new Date(datePublished).toLocaleDateString()}</p>
      <a className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md" href={`/blog/${slug}`}>Read more</a>
    </div>
  );
};

export default BlogCard;
