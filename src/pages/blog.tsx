// Ubicación: src/pages/blog.tsx
import Layout from '@/Layout/Main.Layout';
import { Blog } from '@/components'; // Reutilizamos el mismo componente de sección
import { getSortedPostsData } from '@/utils/getPosts';
import type { LocalPostType } from '@/utils/getPosts';
import { GetStaticProps } from 'next';

interface BlogPageProps {
  posts: LocalPostType[];
}

const AllBlogPostsPage = ({ posts }: BlogPageProps) => {
  return (
    <Layout>
      {/* Le pasamos la lista COMPLETA de posts y la propiedad 'showAll' */}
      <Blog Posts={posts} showAll={true} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();

  return {
    props: {
      posts,
    },
  };
};

export default AllBlogPostsPage;
