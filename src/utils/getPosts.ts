// Ubicación: src/utils/getPosts.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Definimos la estructura de un post local
export interface LocalPostType {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover_image: string;
}

const postsDirectory = path.join(process.cwd(), '_posts');

export function getSortedPostsData(): LocalPostType[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { title: string; date: string; excerpt: string; cover_image: string }),
    } as LocalPostType;
  });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) return 1;
    return -1;
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.mdx$/, ''),
    },
  }));
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    slug,
    frontmatter: matterResult.data,
    content: matterResult.content,
  };
}