"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Clock3, Lock } from "lucide-react";

import type { BlogPost } from "@/constants/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({
  post,
}: BlogCardProps) {
  const CardContent = (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-primary/20
        bg-card
        p-8
        transition-all
        duration-500
        hover:border-primary/60
        hover:shadow-[0_0_45px_rgba(212,175,55,.18)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top,rgba(212,175,55,.08),transparent_70%)]
        "
      />

      <div className="relative z-10">
        {/* Category */}
        <p className="text-xs uppercase tracking-[0.3em] text-primary/70">
          {post.category}
        </p>

        {/* Title */}
        <h3 className="mt-5 text-3xl font-bold text-primary">
          {post.title}
        </h3>

        {/* Subtitle */}
        <p className="mt-2 italic text-muted-foreground">
          {post.subtitle}
        </p>

        {/* Excerpt */}
        <p className="mt-6 leading-8 text-muted-foreground">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-between border-t border-primary/15 pt-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="h-4 w-4 text-primary" />
            {post.readTime}
          </div>

          {post.status === "published" ? (
            <span
              className="
                flex
                items-center
                gap-2
                font-medium
                text-primary
                transition-transform
                group-hover:translate-x-1
              "
            >
              <BookOpen className="h-4 w-4" />
              Open Manuscript →
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              Manuscript In Preparation
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );

  // Published manuscripts are clickable
  if (post.status === "published") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="block"
      >
        {CardContent}
      </Link>
    );
  }

  // Coming soon manuscripts are not clickable
  return CardContent;
}