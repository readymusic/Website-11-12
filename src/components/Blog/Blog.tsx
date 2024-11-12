import React, { useState } from 'react';
import BlogCard from './BlogCard';
import ResourceCard from './ResourceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';

const blogPosts = [
  {
    title: "10 Essential Tips for Your First Studio Session",
    excerpt: "Make the most of your studio time with these professional tips from our experienced producers.",
    category: "Studio Tips",
    readTime: "5 min read",
    date: "Mar 15, 2024",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80",
    slug: "first-studio-session-tips"
  },
  {
    title: "Understanding Music Production: A Beginner's Guide",
    excerpt: "Learn the fundamentals of music production and start your journey on the right foot.",
    category: "Education",
    readTime: "8 min read",
    date: "Mar 12, 2024",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80",
    slug: "music-production-guide"
  }
];

const resources = [
  {
    title: "Studio Session Preparation Guide",
    description: "A comprehensive checklist to help you prepare for your recording session.",
    type: "pdf" as const,
    thumbnail: "https://images.unsplash.com/photo-1516223725307-6f76b9182f7c?auto=format&fit=crop&q=80",
    downloadUrl: "#"
  },
  {
    title: "Recording Vocal Techniques",
    description: "Learn professional techniques for capturing the perfect vocal take.",
    type: "video" as const,
    thumbnail: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80",
    videoUrl: "#"
  },
  {
    title: "Music Licensing Explained",
    description: "Everything you need to know about protecting your music and rights.",
    type: "guide" as const,
    thumbnail: "https://images.unsplash.com/photo-1519508234439-4f23643125c1?auto=format&fit=crop&q=80",
    downloadUrl: "#"
  }
];

const Blog = () => {
  const [activeTab, setActiveTab] = useState('blog');

  return (
    <section id="blog" className="bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-surface mb-4">
            Blog & Resources
          </h2>
          <p className="text-xl text-surface/80 max-w-3xl mx-auto">
            Stay informed with our latest articles, tutorials, and resources
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex justify-center space-x-4 mb-12">
            <TabsTrigger value="blog">Latest Articles</TabsTrigger>
            <TabsTrigger value="resources">Free Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Blog;