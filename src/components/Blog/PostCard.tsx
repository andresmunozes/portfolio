// Ubicación: src/components/Blog/PostCard.tsx

import { LocalPostType } from '@/utils/getPosts';
import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';

// La interfaz ahora es para un 'PostCard'
interface IPostCardProps {
  post: LocalPostType;
}

// El componente ahora se llama 'PostCard'
export const PostCard: FC<IPostCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} legacyBehavior>
      <a className="block w-full max-w-sm p-4 overflow-hidden duration-300 transform border-2 rounded-lg border-neon hover:scale-105">
        <div className="relative w-full h-40">
          <Image
            alt={post.title}
            layout="fill"
            objectFit="cover"
            src={post.cover_image}
            className="rounded-md"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-text">{post.title}</h3>
          <p className="mt-1 text-sm text-gray-400">{post.date}</p>
          <p className="mt-2 text-textDark">{post.excerpt}</p>
        </div>
      </a>
    </Link>
  );
};