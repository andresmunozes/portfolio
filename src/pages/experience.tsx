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
            <p className="text-xl text-textDark">
               Solla S.A - <span className="italic">Medellin, Colombia</span>
            </p>
            <p className="text-sm text-gray-400 italic">Animal feed manufacturing company (similar to Ritchie-Smith Feeds Inc. in Canada) </p>
            <p className="text-sm text-gray-400">May 2021 - August 2022</p>
            <ul className="mt-4 ml-5 space-y-2 list-disc text-text">
              <li>
                Analyzed raw material and process cost variances, reducing input cost deviations through improved tracking and reporting tools.
              </li>
              <li>
                Delivered monthly cost and variance reports that directly supported the plant controller in achieving tighter cost control and operational efficiency.
              </li>
                            <li>
                Collaborated with operations, procurement, and finance teams to standardize cost reporting, enhancing accuracy of fixed and variable cost allocation.
              </li>
              <li>
                Streamlined expense and profitability tracking by developing and automating Power BI dashboards.
              </li>
            </ul>
          </div>
          <div className="mt-8 ml-4">
            <h3 className="text-2xl font-bold text-neon">Cost Analyst</h3>
            <p className="text-xl text-textDark">
               Papelsa S.A (Smurfit Westrock) - <span className="italic">Medellin, Colombia</span>
            </p>
            <p className="text-sm text-gray-400 italic">Paper, fiber and packaging manufacturing company, (similar to Cascades in Canada)</p>
            <p className="text-sm text-gray-400">May 2020 - May 2021 </p>
            <ul className="mt-4 ml-5 space-y-2 list-disc text-text">
              <li>
                Supported plant controlling through effective monthly closings, fixed cost monitoring, and reporting.
              </li>
              <li>
                Ensured accurate SAP reconciliations by coordinating physical inventory counts.
              </li>
              <li>
                Delivered key insights to management by preparing detailed reports on cost variances and product profitability, supporting strategic decision-making.
              </li>
              <li>
                Actively contributed to financial planning by participating in budgeting and forecasting processes.
              </li>
              <li>
                Improved reporting accuracy by leading internal audits on inventory and costing, implementing recommendations.
              </li>
            </ul>
          </div>
          <div className="mt-8 ml-4">
            <h3 className="text-2xl font-bold text-neon">Internship Cost Analyst</h3>
            <p className="text-xl text-textDark">
               Papelsa S.A (Smurfit Westrock) - <span className="italic">Medellin, Colombia</span>
            </p>
            <p className="text-sm text-gray-400 italic">Paper, fiber and packaging manufacturing company, (similar to Cascades in Canada)</p>
            <p className="text-sm text-gray-400">December 2019 - May 2020 </p>
            <ul className="mt-4 ml-5 space-y-2 list-disc text-text">
              <li>
                Managed audit processes by compiling documentation and testing cost control.
              </li>
              <li>
                Improved data accuracy through participation in inventory counts and SAP reconciliations.
              </li>
              <li>
                Provided analytical support to the Senior Controller by creating reports on cost variances and product profitability.
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
            <p className="text-sm text-gray-400">September 2024 - PRESENT </p>

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