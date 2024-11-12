import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  category,
  readTime,
  date,
  image,
  slug
}) => {
  return (
    <article className="bg-primary rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-accent text-primary text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-surface/60 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-surface mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-surface/80 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <a
          href={`/blog/${slug}`}
          className="inline-flex items-center space-x-2 text-accent hover:text-accent-light transition-colors"
        >
          <span>Read More</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;