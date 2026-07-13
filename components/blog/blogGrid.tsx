"use client";

import { blogPosts } from "@/constants/blog";

import BlogCard from "./blogCard";

export default function BlogGrid() {
  return (
    <div
      className="
        mt-20
        grid
        gap-8
        md:grid-cols-2
      "
    >
      {blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}