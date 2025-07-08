// Ubicación: src/utils/getPosts.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// Ya no importamos PostType de '@/types', lo definiremos aquí

// ESTA ES LA NUEVA DEFINICIÓN CORRECTA PARA TUS POSTS LOCALES
export interface LocalPostType {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover_image: string;
}

const postsDirectory = path.join(process.cwd(), '_posts');

// La función ahora devuelve una lista del nuevo tipo: LocalPostType[]
export function getSortedPostsData(): LocalPostType[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    } as LocalPostType; // Usamos el nuevo tipo
  });

  // El sort ahora funciona porque LocalPostType sí tiene una propiedad 'date'
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

// El resto de las funciones se mantienen igual, no necesitan cambios
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
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