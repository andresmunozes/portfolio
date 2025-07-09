// Ubicación: src/pages/experience.tsx

import Layout from '@/Layout/Main.Layout';
import { Title } from '@/components/Common/Title';
import React from 'react';

const ExperiencePage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-5">

        {/* --- Sección de experiencia Laboral --- */}
        <section id="experience" className="w-full mt-10">
          <Title num={1} title="Work Experience" />
          <div className="mt-8 ml-4">
            <h3 className="text-2xl font-bold text-neon">Cost Analyst</h3>
            <p className="text-xl text-textDark">Manufacturing Industry Company</p>
            <p className="text-sm text-gray-400">2021 - 2024</p>
            <ul className="mt-4 ml-5 space-y-2 list-disc text-text">
              <li>
                Analyzed production costs to identify inefficiencies, achieving a 15% reduction in material waste in the first year.
              </li>
              <li>
                Developed and maintained dashboards in Advanced Excel and Power BI for tracking financial KPIs, providing management with visual reports for decision-making.
              </li>
              <li>
                Collaborated with the operations team to model the financial impact of changes in the production line.
              </li>
            </ul>
          </div>
        </section>

        {/* --- Sección de Educación --- */}
        <section id="education" className="w-full mt-20 mb-20">
          <Title num={2} title="Education" />
          <div className="mt-8 ml-4">
            <h3 className="text-2xl font-bold text-neon">Post-Degree Diploma in Data Analytics</h3>
            <p className="text-xl text-textDark">Langara College, Vancouver, BC</p>
            <p className="text-sm text-gray-400">Expected Graduation: December 2025</p>

            <h3 className="mt-8 text-2xl font-bold text-neon">Bachelor of Business Administration</h3>
            <p className="text-xl text-textDark">EAFIT University, Medellin, Colombia</p>
            <p className="text-sm text-gray-400">Graduated: December 2020</p>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default ExperiencePage;