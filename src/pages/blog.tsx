// Ubicación: src/pages/blog.tsx

import Layout from '@/Layout/Main.Layout';
import { Blog as BlogSection } from '@/components/Blog';
import { getSortedPostsData, LocalPostType } from '@/utils/getPosts';
import { GetStaticProps } from 'next';
import { FC } from 'react';

// Definimos los props para esta página
interface IBlogPageProps {
  allPosts: LocalPostType[];
}

const BlogPage: FC<IBlogPageProps> = ({ allPosts }) => {
  return (
    <Layout>
      {/* Le pasamos la lista COMPLETA de posts y la propiedad 'showAll' */}
      <BlogSection Posts={allPosts} showAll={true} />
    </Layout>
  );
};

export default BlogPage;

// Esta función se ejecuta al construir la página para obtener TODOS los posts
export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getSortedPostsData();
  return {
    props: {
      allPosts,
    },
  };
};