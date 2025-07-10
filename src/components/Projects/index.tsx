import React, { FC } from 'react';
import { Title } from '../Common/Title';
import { Project } from './Project';
import Link from 'next/link';

interface IProjectsProps {
  projects: any[];
  showAll?: boolean;
}

export const Projects: FC<IProjectsProps> = ({ projects, showAll = false }) => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center w-full max-w-5xl mx-auto p-5 md:p-0"
    >
      <Title num={2} title={showAll ? "All My Projects" : "Featured Projects"} />
      <div className="flex flex-col items-center w-full mt-10 space-y-12">
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
      {!showAll && (
        <div className="w-full text-center mt-10">
          <Link href="/projects" legacyBehavior>
            <a className="px-5 py-2 text-lg border-2 rounded-lg fill-current border-neon text-neon hover:scale-105 inline-block relative z-10">
              View All Projects →
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};