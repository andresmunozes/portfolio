// Ubicación: src/components/Blog/index.tsx

import React, { FC } from 'react';
import { Title } from '../Common/Title';
// CORRECCIÓN FINAL: Importamos 'PostCard' desde el archivo './PostCard'
import { PostCard } from './PostCard'; 
import Link from 'next/link';
import { LocalPostType } from '@/utils/getPosts';

interface IBlogProps {
  Posts: LocalPostType[];
  showAll?: boolean;
}

export const Blog: FC<IBlogProps> = ({ Posts, showAll = false }) => {
  return (
    <div
      id="blog"
      className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto p-5 md:p-0"
    >
      <Title num={3} title={showAll ? "All Blog Posts" : "Latest Posts"} />
      
      <div className="flex flex-wrap justify-center mt-10 gap-8">
        {Posts && Posts.map((post) => (
          // CORRECCIÓN FINAL: Usamos el componente correcto <PostCard />
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {!showAll && Posts && Posts.length > 0 && (
        <div className="w-full text-center mt-10">
          <Link href="/blog" legacyBehavior>
            <a className="px-5 py-2 text-lg border-2 rounded-lg fill-current border-neon text-neon hover:scale-105 inline-block relative z-10">
              View All Posts →
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};