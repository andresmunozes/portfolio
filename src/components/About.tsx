// Ubicación: src/components/About.tsx

import { Title } from './Common/Title';
import data from '@/data';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-7xl w-full m-20 p-5 md:p-0"
      id="about"
    >
      <Title num={1} title="About me" />

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start gap-8">
        
        {/* Columna Izquierda: Biografía */}
        <div className="md:w-1/2 z-10 space-y-6 text-xl text-textDark">
          {data.about.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Columna Derecha: Foto y Logos */}
        <div className="md:w-1/2 flex flex-col items-center">
          
          {/* Foto de Perfil */}
          <div className="relative mx-auto w-[256px] h-[256px] rounded-full border-2 border-neon flex items-center justify-center overflow-hidden">
            <Image
              alt={data.name}
              className="object-cover w-full h-full"
              height={320}
              src={data.image}
              width={320}
            />
          </div>

          {/* === SECCION DE LOGOS === */}
          <div className="w-full mt-8">
            <p className="text-center text-lg text-textDark mb-4">My Technical Toolkit:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {data.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center p-2 rounded-lg bg-bgLight" title={skill.name}>
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    width={55}
                    height={70}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Botón "View My Background" */}
      <div className="mt-12 text-center">
        <Link href="/experience" legacyBehavior>
          <a className="px-5 py-3 text-lg border-2 rounded-lg fill-current border-neon text-neon hover:scale-105 relative z-10 inline-block">
            View My Experience & Education →
          </a>
        </Link>
      </div>
    </div>
  );
};