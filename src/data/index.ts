const data = {
  name: 'Andres Munoz',
  image: '/avatar.png',
  username: 'avneesh0612',
  keywords:
    'Andres Munoz,Andres, Munoz, Data Analyst, Business Intelligence, Power BI, SQL, Python, Financial Analysis',
  profession: 'Data Analyst',
  intro:
    'Focused on transforming complex data into clear insights that drive strategic business decisions. I love to learn new things and am passionate about sharing my knowledge with others  !',

  about: [
    'I’m a Data Analyst with a background that blends business administration with deep technical expertise. With a Post-Degree Diploma in Data Analytics and three years of experience as a Cost Analyst in the manufacturing industry, I bring a strong understanding of business operations and financial context to each project.',
    
    'Through my academic work, I\'ve had the opportunity to address data challenges across diverse domains, including gene expressions, clinical trials, environmental science, financial risk, and data from mobile device sensors.',
    
    'I specialize in transforming complex data into actionable insights using tools like Advanced Excel, Power BI, SQL, Python, and R. My goal is to leverage critical thinking and problem-solving skills to help businesses make smarter, data-driven decisions. I am also experienced with cloud technologies, including Google Cloud Platform.'
  ],
  website: 'https://andresmunoz.vercel.app/',
  projects: [
    {
      name: 'Lung Cancer Prediction with Gene Expressions',
      image: '/projects/gene3.png',
      about:
        "This project involved developing a machine learning pipeline to classify lung cancer with maximum accuracy using a minimal set of genes. Starting with over 51,000 genes, I used Mutual Information for feature selection and a Random Forest model to discover that a highly efficient model using only 2 key genes could achieve perfect classification accuracy.",
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 't-SNE', 'Jupyter'],
      links: {
        Live: 'https://nbviewer.org/github/andresmunozes/Projects/blob/main/gene_expressions_lung_cancer/01.%20Data%20extraction/data_extraction.ipynb',
        GitHub: 'https://github.com/andresmunozes/Projects/tree/main/gene_expressions_lung_cancer',
      },
      role: 'Data Analyst & ML Researcher',
    },
    {
      name: 'MIMIC-IV Data Extraction with BigQuery',
      image: '/projects/big_query.png',
      about:
        'Executed complex SQL queries in Google BigQuery to perform an ETL (Extract, Transform, Load) process on the large-scale MIMIC-IV clinical database. The goal was to build a clean, analysis-ready dataset for studying patient ICU stays and outcomes.',
      tech: ['SQL', 'Google BigQuery', 'Google Cloud Platform', 'ETL', 'Data Warehousing'],
      links: {
        Live: '',
        GitHub: 'https://github.com/andresmunozes/Projects/tree/main/data_extraction_mimic_IV' ,
      },
      role: 'Data Analyst',
    },
    {
      name: 'Candypay',
      image: '/projects/candypay.png',
      about: 'Seamless, mobile-native NFT & Payments experiences on solana! 🍭',
      tech: ['Next.js', 'solana', 'Typescript'],
      links: {
        GitHub: 'https://github.com/candypay',
        Live: 'https://candypay.fun',
      },
      role: 'Fullstack web3 developer',
    },
  ],
  links: [
    {
      name: 'GitHub',
      icon: 'github.svg',
      link: 'https://github.com/andresmunozes/',
    },
    {
      name: 'Mail me',
      icon: 'mail.svg',
      link: 'mailto:anmues97@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin.svg',
      link: 'https://www.linkedin.com/in/andres-munoz-e/',
    },
  ],
};

export default data;
