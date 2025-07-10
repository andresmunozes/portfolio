const data = {
  name: 'Andres Munoz',
  image: '/avatar2.jpg',
  username: 'avneesh0612',
  keywords:
    'Andres Munoz,Andres, Munoz, Data Analyst, Business Intelligence, Power BI, SQL, Python, Financial Analysis',
  profession: 'Data Analyst',
  intro:
    'Focused on transforming complex data into clear insights that drive strategic business decisions. I love to learn new things and am passionate about sharing my knowledge with others  !',

  about: [
    ' I\'m a Data Analyst with a background that blends business administration with deep technical expertise. With a Post-Degree Diploma in Data Analytics and three years of experience as a Cost Analyst in the manufacturing industry, I bring a strong understanding of business operations and financial context to each project.',
    
    'Through my academic work, I\'ve had the opportunity to address data challenges across diverse domains, including gene expressions, clinical trials, environmental science, financial risk, and data from mobile device sensors.',
    
    'I specialize in transforming complex data into actionable insights. My technical toolkit includes Advanced Excel, Power BI, SQL, Python, R, and enterprise systems like SAP ERP. My goal is to leverage critical thinking and problem-solving skills to help businesses make smarter, data-driven decisions, supported by my experience with Google Cloud Platform.',
  
    'When I\'m not analyzing data, I find a good balance between creative and active pursuits. I enjoy cooking, and you\'ll often find me learning new things while sipping on a cold brew. During my holidays, I make the most of the seasons, from hiking mountain trails in the summer to ice skating in the winter.'
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
        Live: 'https://nbviewer.org/github/andresmunozes/Projects/blob/main/gene_expressions_lung_cancer/02_Prediction_model/prediction_model.ipynb',
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
  skills: [
    { name: 'Python', icon: '/logos/skills/python.svg' },
    { name: 'R', icon: '/logos/skills/r-logo.svg' },
    { name: 'SQL', icon: '/logos/skills/sql.svg' },
    { name: 'Power BI', icon: '/logos/skills/power-bi.png' },
    { name: 'Excel', icon: '/logos/skills/excel.svg' },
    { name: 'SAP', icon: '/logos/skills/sap.svg' },
    { name: 'Google Cloud', icon: '/logos/skills/gcp.png' },
    // Añade más si lo necesitas
  ],



};

export default data;
