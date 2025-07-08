// Ubicación: src/pages/projects.tsx

import Layout from '@/Layout/Main.Layout';
import { Projects } from '@/components'; // Reutilizamos el mismo componente de sección
import data from '@/data';

const AllProjectsPage = () => {
  return (
    <Layout>
      {/* Le pasamos la lista COMPLETA de proyectos y la propiedad 'showAll' */}
      <Projects projects={data.projects} showAll={true} />
    </Layout>
  );
};

export default AllProjectsPage;