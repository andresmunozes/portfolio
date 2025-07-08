// Ubicación: src/components/Projects/index.tsx

import React, { FC } from 'react';
import { Title } from '../Common/Title';
// PASO 1: Importamos el componente correcto desde el archivo correcto
import { Project } from './Project'; 
import Link from 'next/link';

// La interfaz se mantiene igual
interface IProjectsProps {
  projects: any[];
  showAll?: boolean;
}

export const Projects: FC<IProjectsProps> = ({ projects, showAll = false }) => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto"
    >
      <Title num={2} title={showAll ? "All My Projects" : "Featured Projects"} />
      
      {/* El layout de los proyectos era una lista, lo cambiamos a un div para que se vea mejor */}
      <div className="flex flex-col w-full mt-10 space-y-12">
        {projects.map((project, i) => (
          // PASO 2: Usamos el componente 'Project' y le pasamos los datos como un solo 'project'
          <Project key={i} project={project} />
        ))}
      </div>

      {!showAll && (
        <div className="mt-10">
          <Link href="/projects" legacyBehavior>
            <a className="px-5 py-2 text-lg border-2 rounded-lg fill-current border-neon text-neon hover:scale-105">
              View All Projects →
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};