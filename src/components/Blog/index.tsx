// Ubicación: src/components/Blog/index.tsx

import React, { FC } from 'react';
import { Title } from '../Common/Title';
// CORRECCIÓN: Importamos el componente correcto 'Post' desde el archivo './Post'
import { Post } from './Post'; 
import Link from 'next/link';
import type { LocalPostType } from '@/utils/getPosts';

interface IBlogProps {
  Posts: LocalPostType[];
  showAll?: boolean;
}

export const Blog: FC<IBlogProps> = ({ Posts, showAll = false }) => {
  return (
    <div
      id="blog"
      className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto"
    >
      <Title num={3} title={showAll ? "All Blog Posts" : "Latest Posts"} />
      
      <div className="flex flex-wrap justify-center mt-10 gap-8">
        {Posts && Posts.map((post) => (
          // CORRECCIÓN: Usamos el componente correcto <Post />
          // @ts-ignore
          <Post key={post.slug} post={post} />
        ))}
      </div>

      {!showAll && Posts && Posts.length > 0 && (
        <div className="mt-10">
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