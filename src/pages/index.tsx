// Ubicación: src/pages/index.tsx

import Layout from '@/Layout/Main.Layout';
import { About, Blog, Contact, Intro, Projects } from '@/components';
import data from '@/data';
import type { LocalPostType } from '@/utils/getPosts';
// CORRECCIÓN: Importamos la función correcta sin llaves
import { getSortedPostsData } from '@/utils/getPosts'; 
import { GetStaticProps } from 'next';
import { FC } from 'react';

interface IHomeProps {
  featuredProjects: typeof data.projects;
  latestPosts: LocalPostType[];
}

const Home: FC<IHomeProps> = ({ featuredProjects, latestPosts }) => {
  return (
    <Layout>
      <Intro />
      <About />
      <Projects projects={featuredProjects} />
      {/* CORRECCIÓN: Nos aseguramos de que el blog solo se muestre si hay posts */}
      {latestPosts.length > 0 && <Blog Posts={latestPosts} />}
      <Contact />
    </Layout>
  );
};

export default Home;

// Esta es la función corregida
export const getStaticProps: GetStaticProps = async () => {
  // Tomamos los primeros 3 proyectos
  const featuredProjects = data.projects.slice(0, 3);
  
  // CORRECCIÓN: Obtenemos todos los posts y usamos "await" para esperar el resultado.
  // La función getSortedPostsData no necesita un "username".
  const allPosts = getSortedPostsData();
  const latestPosts = allPosts.slice(0, 3);

  return {
    props: {
      featuredProjects,
      latestPosts,
    },
  };
};